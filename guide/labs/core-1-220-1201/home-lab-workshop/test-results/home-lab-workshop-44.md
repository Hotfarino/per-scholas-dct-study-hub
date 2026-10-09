# Home Lab Workshop — layout and regression review

## Change

Edition 44 keeps the current task beside the 3D workbench. Equipment opens in a horizontal tray. Native Choose lab and Save & files dialogs keep secondary actions separate. A course progress indicator and power-gated Open laptop button provide a consistent next step. Help level, voice, camera settings and the outline expand on demand.

The presentation reuses existing controls and handlers. Engine rules, cable validation, configuration access, guided completion and the portable-save schema are unchanged.

## Automated validation

`npm ci --ignore-scripts` and `npm test` passed from the standalone GitHub lab folder using Node.js 24.8.0 and pinned LinkeDOM 0.18.12.

- 90 engine assertions: power, cabling, storage, RAID failures, VM limits/isolation, routing, Wi-Fi and modeled cloud access.
- All 247 guided tasks across eight courses, including UI actions and save/resume.
- Router setup with DHCP disabled, temporary static addressing, local access without WAN/DNS/NAT, address-change invalidation, and management-path enforcement.
- Windows/Ubuntu browser shortcuts, separate browser/machine histories, refresh after network changes, and unsupported addresses.
- Portable saves, legacy switch migration, OS practice state, and rejection of malformed data.
- Workshop navigation: original handlers remain attached after moving controls; menus preserve state; laptop entry requires power; help mode preserves build/progress; cancelling a new course preserves the build; confirmed lab switching updates progress; DOM IDs remain unique.

These are engine/DOM tests. WebGL is stubbed in the DOM harness; rendered geometry and real pointer interaction require browser review.

## Local browser review

Reviewed the local static preview at 1280, 900 and 390 CSS-pixel widths. The task, equipment tray, responsive toolbar and guide menu remained within the page width. Native file/lab dialogs open, close and restore focus. Saving gives feedback. Starting a new course requests confirmation; cancelling keeps the current task and hardware.

Walked through adding a laptop, connecting its AC socket to the wall, completing the task, selecting its power button and opening the Lab console through Open laptop. Confirmed mode changes, task progress, original connection markers and laptop configuration entry. Browser review caught and corrected a tablet header alignment conflict and an older CSS rule hiding connection records.

## Limits

This review does not guarantee every browser, touch device, GPU or accessibility combination. The 3D lab needs WebGL 2; the restricted desktop is easier on a full-size display. No real OS/network/cloud traffic is executed. Existing detailed model limits remain in the in-app Lab manual. Local test success is separate from the status of a subsequent GitHub Actions run.
