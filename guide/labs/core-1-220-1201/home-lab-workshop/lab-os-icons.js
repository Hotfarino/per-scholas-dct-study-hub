// Small original interface glyphs. Ubuntu app artwork is the attributed Yaru theme.
const paths={
 start:'<path fill="#087cdb" d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z"/>',
 repos:'<path fill="#e9a918" d="M2 5a2 2 0 0 1 2-2h5l3 3h8a2 2 0 0 1 2 2v11H2z"/><path fill="#ffd76c" d="M2 8h20v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/><path fill="#e9ad30" d="M2 15h20v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/>',
 terminal:'<rect x="1" y="3" width="22" height="18" rx="3" fill="#282a30"/><path d="m5 8 4 4-4 4m7 0h6" stroke="#eee" stroke-width="1.8" fill="none"/>',
 powershell:'<path d="M5 3h18l-4 18H1z" fill="#2584cc"/><path d="m8 7 4 4-6 5m7 0h4" stroke="#fff" stroke-width="1.7" fill="none"/>',
 cmd:'<rect x="1" y="3" width="22" height="18" rx="2" fill="#202020"/><path d="m5 9 4 3-4 3m7 0h5" stroke="#fff" stroke-width="1.5" fill="none"/>',
 settings:'<path fill="#788494" d="m10 1 4 0 .7 3 2 .9L20 4l2 3-2.2 2.3.2 2.2 3 1v4l-3 .7-1 2 1 2.6-3 2-2.3-2.2-2.2.2-1 3-4-1-.7-3-2-1L2 19l-2-3 2.2-2.3-.2-2.2L0 10l1-4 3-.7 1-2L8 4z" transform="translate(2 0) scale(.85)"/><circle cx="12" cy="12" r="5" fill="#beddfa"/><circle cx="12" cy="12" r="3" fill="#137bd5"/>',
 browser:'<circle cx="12" cy="12" r="10" fill="#159ed4"/><path d="M3 15c5 5 12 3 17-2-1 7-8 11-14 6z" fill="#13b88b"/><path d="M3 14C1 6 12-1 19 6c-8-2-13 4-10 8z" fill="#2477d4"/><path d="M9 11c2-4 9-5 12 0-3 3-8 5-12 2z" fill="#7be3df"/>',
 vms:'<rect x="1" y="2" width="15" height="13" rx="2" fill="#1977c3"/><rect x="3" y="4" width="11" height="8" fill="#c2e9ff"/><rect x="8" y="9" width="15" height="13" rx="2" fill="#764ebc"/><rect x="10" y="11" width="11" height="8" fill="#dccbff"/>',
 cloud:'<path d="M6 20a5 5 0 0 1-1-10 7 7 0 0 1 13-2 6 6 0 0 1 0 12Z" fill="#289cde"/>',
 tools:'<rect x="2" y="2" width="20" height="15" rx="2" fill="#62768c"/><path fill="#b5e5ff" d="M4 4h16v10H4z"/><path stroke="#62768c" stroke-width="2" d="M12 17v4m-5 0h10"/>',
 search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
 network:'<rect x="3" y="3" width="18" height="13" rx="1"/><path d="M12 16v5m-4 0h8"/>',
 volume:'<path d="M4 9h4l5-4v14l-5-4H4zm12-1c3 2 3 6 0 8m3-11c5 4 5 10 0 14"/>',
 power:'<path d="M12 2v10m-5-7a9 9 0 1 0 10 0"/>',
 home:'<path d="m2 11 10-9 10 9M5 9v12h5v-7h4v7h5V9"/>'
};
export function appIcon(k,os='windows'){
 if(os==='ubuntu'&&['repos','terminal','settings','browser'].includes(k))return `<img class="os-app-icon" src="lab-yaru-${k==='repos'?'files':k}.png" alt="" draggable="false">`;
 if(os==='ubuntu'&&k==='start')return '<svg class="os-app-icon" viewBox="0 0 24 24" aria-hidden="true">'+[4,12,20].flatMap(x=>[4,12,20].map(y=>`<circle cx="${x}" cy="${y}" r="2" fill="currentColor"/>`)).join('')+'</svg>';
 const line=['search','network','volume','power','home'].includes(k);
 return `<svg class="os-app-icon" viewBox="0 0 24 24" aria-hidden="true" style="stroke:${line?'currentColor':'none'};stroke-width:1.6;fill:none">${paths[k]||paths.repos}</svg>`;
}
