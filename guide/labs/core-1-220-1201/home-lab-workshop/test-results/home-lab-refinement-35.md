# Edition 35: navigation, scale and cable clearance

## Changes
- Explicit Build / move parts, Move view and Rotate view modes. Pan defaults on empty space; zoom follows the cursor with bounded button controls. Reset and fixed views fit the workspace. Keyboard arrow keys pan, + / - zoom and Home resets.
- Rack expanded from 12U to 18U, retaining 19-inch equipment width and 1.75-inch units. Saved lower-unit builds remain valid. Rack NAS/UPS use dedicated Blender 2U chassis and matching socket coordinates.
- Cables leave along socket normals, route around padded device footprints, follow rear desk lanes and enter the rack through an external vertical channel. Rounded paths are checked against modeled cases, wall, worktop and rack frames. Obstructed paths generate a clearance notice rather than rendering through solids. Loose-cable previews use the same routing checks.
- Detailed seated connector shapes replace uniform cubes. Lighting/shadow bias and rack labels refined.

## Automated checks
- test-lab-world-routing.mjs: 20 desk/wall/rack routes, rounded-curve clearance, positive obstruction rejection, socket positions/normals for bench and rack variants, 18U upper boundary, and heavy-UPS low-placement rules.
- test-lab-blender.mjs: compressed asset loading, 58 base socket anchors, independent lamp materials, and room identifiers.
- Engine, 42-task guided learning, rack actions, save/import, network, model3d, UI, surge/VM and continuous connection-pulse suites pass.
- Production Worker build passes and includes the new GLB assets and routing modules.

## Native browser checks
- Existing saved six-device/11-cable build resumes with all 11 cable paths clear.
- Pan changes camera position and target while retaining device/cable counts; rotate changes camera position around an unchanged target.
- Reset restores whole-lab framing and 100%; two zoom-in button clicks yield 149% without changing the build.
- Rack front view, wiring channels and NAS mounted at U8-U9 inspected. Rack NAS opens the matching exploded connector model with no console errors.
- Switch back to Build mode; drag the laptop AC plug to empty workspace. Connection is removed, power changes and remaining ten routes are clear.
- At 390-pixel viewport, no horizontal page overflow; navigation buttons remain 38 pixels high with readable labels.

## Scope
Geometry checks cover the modeled room and component bounds. This remains an educational network simulation, not a physical cable-slack, strain, electrical or packet-timing solver. The selected cable length continues to control the teaching engine's link limits; it is not inferred from the displayed route.
