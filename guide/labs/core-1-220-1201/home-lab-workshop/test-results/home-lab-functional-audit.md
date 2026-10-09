# Home Lab functional audit

## Result

All 28 automated suites pass. They include 90 engine assertions and all 247 guided tasks across eight labs. The complete guided-course test now runs with the current presentation and laptop control center attached. Four planner templates also pass their existing readiness/network/resource checks.

## Course coverage

| Course | Checked tasks | Result |
| --- | ---: | --- |
| Home network → rack server → VMs | 42 | Pass |
| Rack storage & RAID | 35 | Pass |
| Virtualization server | 42 | Pass |
| Wireless home office | 29 | Pass |
| Two routed subnets | 31 | Pass |
| Hybrid cloud & backup | 40 | Pass |
| Troubleshooting | 5 | Pass |
| Free-build orientation | 23 | Pass |

The suite covers valid and invalid cabling, unplug/replug, power loss, surge/UPS rules, rack collision and supports, IPv4/DHCP/DNS/Wi-Fi, RAID capacity and failure tolerance, VM resources/isolation, cloud provisioning and backup, Windows/Ubuntu tools and terminal commands, save validation and restoration, guidance levels, and presentation/navigation.

## Problems found and fixed

1. **Diagnostic controls could disagree with the result.** A guided ping could leave HTTPS selected. From, To and Test now match the request that ran, and every result records its endpoints and protocol.
2. **A guided VM result could not be repeated through the test form.** VM HTTPS destinations now appear in the selector, and repeat tests use the VM path. Unsupported VM diagnostic protocols give a clear explanation instead of silently using another protocol. The simulated Terminal remains available for guest-address ping practice.
3. **Save progress could show Saved after browser storage failed.** Failed saves now report Save failed and retain the previous stored build. Export remains the fallback.
4. **A delayed RAID rebuild could outlive the build that started it.** Completion now belongs to the exact state/device/drive. A replaced or cleared lab cannot receive its old completion event. Power-loss interruption and a successful retry are tested.
5. **Opening the cable-list hint expanded unrelated equipment.** It now opens the connection list while preserving the compact equipment tray. The Wi-Fi disconnection instruction uses the actual Disconnect button label.

A new recovery regression suite reproduces the diagnostic mismatch and covers these edge cases. The complete 28-suite command is included in the GitHub project and its CI workflow.

## Actual browser walkthroughs

- Launched all eight courses and checked their initial instructions, task counts and completion gates.
- Completed the troubleshooting course: repaired Ethernet, set a temporary static IPv4 address, restored router DHCP, returned the laptop to DHCP, tested ICMP, repaired DNS, loaded HTTPS, and reached Course complete.
- Loaded the working VM template from the laptop planner. Confirmed HTTPS to the external Web-Lab VM succeeds, the private VM stays isolated, and repeated ping tests retain the correct selection and result description.
- Ran `ipconfig /all` in the Windows-style terminal and `ip addr` in Ubuntu using Enter. Both report the same modeled client address.
- Loaded the NAS template, failed one RAID 5 member, successfully read the SMB share while degraded, then replaced/rebuilt the drive and observed a healthy 3 TB array.
- No browser errors were reported in the inspected final session.

## Reproduce

From the standalone GitHub lab folder, run `npm ci --ignore-scripts` then `npm test` with Node.js 24. From the hosted site's source checkout, run `npm run test:lab`. The engine fixture is generated before dependent suites. Full console output is retained in `home-lab-functional-audit.log`.

## What this does not prove

Automated UI tests use LinkeDOM with WebGL stubbed; geometry and cable routes have separate Three.js/GLB tests. Browser walkthroughs exercise representative rendered paths, not all 247 tasks manually or every possible user action. No test can guarantee every browser/GPU/device combination. These remain restricted educational OS/network/cloud simulations, not real operating systems or traffic. This audit covers the local Edition 44 candidate; it does not assert that this candidate has been published.
