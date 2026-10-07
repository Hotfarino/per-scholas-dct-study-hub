# Edition 36 validation

## Automated results

- All 42 original guided steps pass, including cable targeting, hints, free-mode exclusion and save/resume.
- New course UI walkthroughs pass: NAS 35, virtualization 42, Wi-Fi 29, routed subnets 31, cloud 40, troubleshooting 5 and sandbox orientation 23 steps. Tests actually apply relevant settings, create connections, exercise failures/rebuilds and inspect every completion condition.
- OS simulation tests pass: Windows/Ubuntu commands, physical/guest addresses, static guest settings shared by physical-client tests, staged NetworkManager changes, idempotent service start/stop, private-switch isolation, DNS failure, power gating and unsupported command rejection.
- Subnet math covers ordinary /25 and /26 plus /0, /31 and /32 boundaries and invalid inputs.
- Desktop UI tests pass: repository navigation/search entry, lesson questions, subnet form, terminal execution, settings changes, browser test, project checks, minimize/restore/maximize, every app entry, unique IDs and power-loss display.
- Existing engine, IP/Wi-Fi, inspectors, portable save, hardware, 3D world, cable collision routing, Blender socket anchors, studio, rack mounting, surge/VM and connection-pulse suites pass.

## Browser review

Reviewed on the retained local preview before publication, at desktop sizes and 390 × 844.

- Opened the Windows-style host console from a saved powered build.
- Opened Foundations and the subnet lesson; checked layout and workflow readability.
- Executed Get-NetIPConfiguration and read the simulated address.
- Created a VM, installed its guest OS, started it and opened Ubuntu. `ip addr` showed its distinct guest lease.
- Reviewed the Ubuntu network Settings screen at phone width: no button, input or select exceeded the viewport horizontally.
- Verified the Wi-Fi mission begins with its own 29-step guided course and a locked Continue button before completion.
- Large wheel gestures changed zoom gradually (100% → 105%); the recorded camera target stayed at -1.00,-1.80,0.50 and page scroll stayed unchanged. Repeated wheel gestures at different cursor positions did not move the center.
- Repeated transitions between the hidden guided VM panel and the visible free-mode workbench retained camera position and 100% zoom after the hidden-viewport fix.
- No browser error logs were reported in the reviewed desktop flow.

## Intentional boundaries

This is an original teaching simulation, not Windows/Ubuntu emulation or official CompTIA questions. It runs no real shell, guest kernel or network service. Commands, devices and timings are a documented subset. Internal/private guest application traffic is not modeled. Browser access targets the simulated example.com endpoint. Cloud provisioning and recovery verification create only simulated records. The learning folders are an in-desktop navigation feature, not a security boundary protecting publicly shipped JavaScript.
