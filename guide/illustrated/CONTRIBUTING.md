# Adding an Illustrated Study Guide

Keep this library easy to browse as new lessons arrive. The current series uses detailed comic illustrations with concise, accurate explanations.

## Folder and naming convention

```text
guide/illustrated/
  README.md
  catalog.json
  core-1-220-1201/
    networking/
      01-network-devices/
        README.md
        network-devices.pdf
        cover.jpg
        lesson.md
```

Use lowercase, hyphenated names. Group first by exam/version, then subject, then two-digit issue number and topic. For example, a future ports lesson belongs in `core-1-220-1201/networking/02-ports-and-protocols/`. Create a folder when the lesson is ready; planned lessons only need catalog and roadmap entries.

Keep the issue identifier and download path stable after publication. Update the edition and revision history when the content changes. Let Git retain old versions instead of collecting `final-v2-final` duplicate PDFs.

## Publish a lesson

1. Check the current official exam objectives. Record the primary objective separately from supporting context.
2. Explain each important acronym and term. Include what the device/concept is, how and why it works, when to use it, and likely exam distinctions.
3. Include actual, detailed comic illustrations. Keep factual labels and tables readable; avoid making readers infer wiring or technical limits from a visual metaphor.
4. Verify speeds, distances, units, and standards against primary references. For PoE, distinguish source-side power from power available to the device.
5. Add three original quiz questions with explained answers. Do not copy paid exam questions or restricted course material.
6. Render the finished PDF and inspect every page. Check clipping, tables, page order, links, image quality, and file size.
7. Add the PDF, a cover preview, a searchable `lesson.md`, and a lesson `README.md` with classification, source links, review date, and revision history.
8. Update `catalog.json` and the illustrated-guide index. Add links to the relevant existing subject sections in `CATEGORY-INDEX.md`; add other cross-links only where useful.
9. Run `node scripts/check-local-links.mjs` from the repository root. Confirm catalog paths exist, the page count is correct, and the PDF hash matches.
10. Review the changed files before committing. Keep scratch renders, obsolete drafts, machine-specific paths, and private information out of the repository.

## Metadata

Each catalog entry uses a stable `id`, `series`, `issue`, `title`, `exam`, `subject`, and `status`. Available entries additionally record `edition`, `published`, `reviewed`, `primary_objectives`, repository-relative lesson files (relative to this library), PDF `pages`, `bytes`, and `sha256`. Planned entries have no fake download paths.

The existing file ignore rules allow only the approved PDF/cover locations in this library. Store approved artwork or editable source in a future dedicated folder only when it is needed; avoid duplicating all embedded full-resolution images with every PDF by default.

## Attribution

Identify AI-assisted text and generated artwork. Cite technical sources, preserve any required attribution, and distinguish independent practice from official objectives. Do not add a license for someone else's work or imply CompTIA endorsement.

## Measurement preference

Use inches for component dimensions and feet (ft) for cable distances in new or revised comic guides. Mark rounded conversions as approximate. Preserve industry-standard names such as M.2 2280, and explain metric-based naming when relevant.

## Interactive companions

A lesson may include a PowerPoint flashcard companion in its existing folder. Record it under `files.presentation`, with slide count, bytes, and SHA-256 in `presentation`, and a top-level `flashcards` count. Keep the PDF as the full printable lesson. Explain Slide Show mode and any limitations on the landing page. Render every slide and validate all reveal, retry, menu, and next-card links before publishing. Use native links without macros.
