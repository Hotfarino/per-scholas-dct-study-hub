# Edition 40 presentation verification

## Scope

Correct laptop key legends in Blender, separate desk/backdrop materials, soften lighting, and organize existing controls into expandable groups. No changes to engine rules, feature capabilities, saved-state format or port geometry.

## Automated checks — passed

- `test-lab-learning.mjs`: 42 guided tasks, gating, hints, help levels and save/resume.
- `test-lab-courses.mjs`: every additional mission's guided steps and save/resume.
- `test-lab-world.mjs`: all 116 socket transforms, mounting, desk placement, collision rejection and cable moves.
- `test-lab-world-routing.mjs`: 20 clear bench/wall/rack routes and modeled-solid clearance.
- `test-lab-blender.mjs`: compressed assets, authored socket contract, rack proportions and independent lights.
- `test-lab-screen.mjs`: Blender LCD projection, console ownership, power/link gates and capability policies.
- `test-lab-os-admin.mjs`: OS configuration and guided repair state.
- Syntax checks for presentation, learning and world modules.

## Local browser review — passed

- Default guided layout prioritizes the task and workbench; camera zoom readout and moved controls remain present, without duplicate element IDs.
- Added a laptop, completed its wall-power connection using actual socket controls, advanced to the power task, switched it on and opened the simulated Windows desktop on the modeled display.
- Picking up a cable opens Connections & cables automatically. Connection success still gates Continue correctly.
- Focus selected, zoom, Top down, Rear / wiring and Move view remain operable. The View controls label identifies Pan mode; Build / move parts restores the normal label.
- Change help level opens Lesson options and focuses its actual selector.
- Planning/PowerShell and IP/Wi-Fi drawers expand inside All tools & other labs.
- Reviewed desktop, 900-pixel and 390-pixel widths. No document horizontal overflow in checked layouts. Fixed a clipped mobile camera menu; its final bounds were x=25..350 within the 390-pixel viewport.
- No browser error logs during the tested workflow.
- Blender source/GLB review confirmed identity rotation for top-facing legends, replacing the prior 180-degree rotation. Key rows are unchanged.

The regression checks above cover existing logic. This is not a claim that every possible device combination or every browser was exhaustively tested.
