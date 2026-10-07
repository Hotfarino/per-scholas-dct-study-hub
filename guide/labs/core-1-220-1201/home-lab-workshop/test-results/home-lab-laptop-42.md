# Edition 42 — laptop configuration verification

## Automated checks

- `test-lab-laptop-courses.mjs`: wired 42, NAS 35, virtual 42, Wi-Fi 29, routed subnets 31, cloud 40, troubleshooting 5 and free orientation 23. All 247 guided task checks pass with real desktop/control-center routing enabled. Includes explicit native OS static bootstrap before initial router DHCP setup, restoration to DHCP, native Wi-Fi join, part-fit/RAID/OS/firmware controls, VM creation and service tests, cloud backup and save validation.
- `test-lab-laptop-config.mjs`: parked controls mount only inside the OS; unique element IDs survive application changes; router DHCP loss, manual IP recovery, stale-address invalidation, same-subnet checks and unsupported ports/schemes; numeric LAN management works without DNS, WAN or NAT; switch access fails without its LAN path; public browsing and in-screen task evidence; VM changes blocked when the laptop loses its host path; cloud backup immediately updates Continue.
- `test-lab-hardware.mjs`: physical power/link, plug/unplug/drag/cancel and all device sockets; duplicate hardware mini-browser/terminal removed in favor of a desktop handoff.
- Existing browser, desktop/OS administration, save/import and guided course checks remain valid.

## Local browser review

Reviewed Windows Lab console cards, planner/template loading, browser-hosted router setup, DHCP-off failure, native Windows manual IP recovery, restored local router access, example-page success, VM workspace, Ubuntu Firefox router navigation, and responsive 1280/900-pixel views. The active guided task remains above the laptop; optional OS exercises start folded. No browser error logs occurred during the reviewed actions. Forms scroll inside the simulated OS and retain their existing engine handlers.

## Model boundaries

Restricted teaching interfaces only. No real OS, web request, device or cloud resource is modified. Router setup models local HTTP port 80 and a numeric LAN path, without authentication/TLS. Switch/AP setup uses a labeled local utility and does not invent management addresses. Bench service controls represent local physical/firmware access, not remote control of an uncabled or unbooted server. VM management requires client-to-host IP reachability. Real management also requires its protocol, authentication and authorization.
