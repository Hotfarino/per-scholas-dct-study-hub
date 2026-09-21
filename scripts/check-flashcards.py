"""Check published flashcard navigation and OOXML hyperlink child ordering.
Run with Python 3; uses only the standard library. Does not test app playback.
"""
import json
import posixpath
import xml.etree.ElementTree as ET
from pathlib import Path
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[1] / 'guide' / 'illustrated'
NS = {'p': 'http://schemas.openxmlformats.org/presentationml/2006/main',
      'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
      'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
ORDER = {'hlinkClick': 0, 'hlinkHover': 1, 'extLst': 2}

def check_deck(path, expected):
    count = 0
    graph = {}
    with ZipFile(path) as archive:
        names = set(archive.namelist())
        for name in sorted(names):
            if not (name.startswith('ppt/slides/slide') and name.endswith('.xml')):
                continue
            slide = ET.fromstring(archive.read(name))
            relpath = posixpath.join(posixpath.dirname(name), '_rels', posixpath.basename(name) + '.rels')
            rels = {r.attrib['Id']: r.attrib for r in ET.fromstring(archive.read(relpath))}
            targets = set()
            for props in slide.findall('.//p:cNvPr', NS):
                order = [ORDER[c.tag.rsplit('}', 1)[-1]] for c in props if c.tag.rsplit('}', 1)[-1] in ORDER]
                assert order == sorted(order), f'{name}: hyperlink follows extension list'
                for link in props.findall('a:hlinkClick', NS):
                    if link.get('action') != 'ppaction://hlinksldjump':
                        continue
                    rel = rels[link.attrib['{' + NS['r'] + '}id']]
                    assert rel['Type'] == NS['r'] + '/slide'
                    assert rel.get('TargetMode', 'Internal') == 'Internal'
                    target = rel['Target']
                    target = target.lstrip('/') if target.startswith('/') else posixpath.normpath(posixpath.join(posixpath.dirname(name), target))
                    assert target in names, f'Missing slide target: {target}'
                    targets.add(target)
                    count += 1
            graph[name] = targets
        assert count == expected, (path, count, expected)
        # All cards must be reachable through menus and next/retry links.
        visited, pending = set(), ['ppt/slides/slide1.xml']
        while pending:
            current = pending.pop()
            if current in visited:
                continue
            visited.add(current)
            pending.extend(graph.get(current, ()))
        assert visited == set(graph), f'Unreachable slides: {set(graph) - visited}'
    return count

if __name__ == '__main__':
    total = 0
    for entry in json.loads((ROOT / 'catalog.json').read_text())['guides']:
        if 'presentation' not in entry.get('files', {}):
            continue
        total += check_deck(ROOT / entry['files']['presentation'], entry['presentation']['internal_links'])
    print(f'Passed: {total} button links, XML child order, and slide reachability. Playback requires a presentation app.')
