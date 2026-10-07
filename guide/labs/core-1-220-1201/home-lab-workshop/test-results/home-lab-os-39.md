# Edition 39 verification

Implemented Windows Device Manager, properties and driver installation, Services, read-only Disk Management, system information, adapter/security/name settings, expanded shell commands, a searchable command library and four checked guided tasks. Ubuntu keeps its own desktop/terminal styling and a labeled teaching hardware inspector.

## Automated verification

All 23 `test-lab*.mjs` suites passed after the model and command changes. The dedicated `test-lab-os-admin.mjs` verifies disabled-adapter/local-desktop behavior, missing drivers and preserved settings, link pulses, DHCP release/renew/reactivation, DNS failure independent of link state, PowerShell/CMD separation, services/listeners, canonical firewall state, guest/host reachability, remote-host recovery restrictions, command gating, virtual text files, supported catalog commands and full guided tasks. It rejects skipping a step and validates the supplied driver location. `test-lab-save.mjs` verifies validated persistence of OS configuration and completed workflows. Desktop and new administration tests passed again after final UI changes.

## Browser verification

Reviewed the live local Three.js laptop LCD at 1280×720 and 900×800, including Larger text. Completed disabled-adapter repair through Device Manager properties, read ipconfig, pinged the gateway and completed the guided task. Checked Code 22/28 explanations, Driver/General tabs, driver browse/install, the command library, native-looking PowerShell and Ubuntu Bash windows, Ubuntu hardware view, and Services start/stop/restart.

A properties dialog initially pushed its footer below the visible LCD in Larger text. It now keeps header, tabs and footer fixed within the available display, scrolling its content when needed. At 900 pixels the dialog and footer both fit inside the application pane; no page-width overflow was observed. No browser console errors were reported. Background management controls are inert while a properties dialog is open.

## Model limits

These remain independent restricted OS interface simulations, with no real kernel or arbitrary shell access. Service names/PIDs are predefined lab fixtures; timing and performance are not fabricated. Disk Management reads modeled storage only. DHCP is deterministic, not a complete timed lease server. Primary Microsoft and Ubuntu references are linked in the lessons and HOME-LAB-README.md. Real OS revisions may differ visually.
