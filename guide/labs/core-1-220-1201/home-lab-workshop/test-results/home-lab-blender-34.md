# Blender edition validation

- Blender 5.2.0 LTS generated the editable room and all 13 hardware types. Optimized GLBs retain all 58 named socket anchors.
- `test-lab-blender.mjs`: both meshopt-compressed GLBs parse; each port position matches the existing socket contract within 0.001 simulation units; lamp materials remain independent across ports/devices; rack width and U pitch are preserved.
- `test-lab-world.mjs`: procedural fallback transforms, rack/bench moves, shelf Undo, rejected cable moves, saved coordinates, and front-rail alignment pass.
- Engine, hardware, save, network, surge/VM, learning, equipment-actions, rack-direct, model3d, connection-pulses and UI test suites pass. The learning suite completes the 42-task path and checks all help levels.
- Worker build embeds GLBs with binary encoding and model/gltf-binary MIME type; decoded headers are glTF.
- Native in-app-browser preview: both Blender hardware and room report loaded. Saved lab restored six added devices and 11 cables. Server close-up, rack-front alignment and exploded connection viewer inspected. Laptop power unplugged by dragging to empty space: screen went dark and status confirmed unplug. Dragging its AC socket to the wall outlet restored the connection. No console errors observed.
- Desktop overview, rear detail and laptop keyboard/ports inspected. At 390-pixel viewport there is no page overflow; corrected action buttons wrap into readable rows (158.5-pixel half-width controls and 325-pixel final control), with 38-pixel height.
- These are generic modeled teaching devices, not vendor CAD. The electrical/network behavior continues to use the educational simulation engine.
