# Edition 46: guided teaching and independent troubleshooting

## Implemented

- Guided explanations, acronym definitions, analogies and completion recaps for every task. Read-aloud includes the task's teaching material.
- Required-setting checks with expected/current values for cables, power, supports, parts, DHCP, client IPv4/Wi-Fi, routed interfaces, VLANs, RAID, guests and cloud backup source identity.
- Virtualization has 48 steps, including six distinct Private/Internal/External isolation and restoration tasks. The other courses retain their distinct follow-on goals.
- Network and prepared-server foundations are saved locally and revalidated before loading. Extra guests and follow-on equipment are removed. Missing or corrupted checkpoints are rejected with instructions.
- Six independent challenges: wired link, DNS, static gateway, Wi-Fi association, access VLAN and VM reachability. Goals, optional hints and current results are separate from guided lessons. Missing equipment reports failure without crashing.
- The RAID guide now has a next/restart path for hidden parity blocks. Navigation/page hiding stops playback; images decode lazily.

## Browser verification

- Completed a guided task and opened its term definitions and automatic recap.
- Started a DNS challenge, read separate IP/DNS/HTTPS results, corrected DNS through the laptop router page and submitted a complete result.
- Saved a validated foundation and started Wireless at step 23 of 29, Add Wi-Fi access point.
- Advanced parity from visible blocks to one missing block, then two, then restarted with editing enabled. Replaced a failed RAID 5 member and completed all three rebuild rows.
- No browser console errors occurred in these flows. Results and definitions use scrollable areas so the computer screen stays available.

## Automated coverage and limits

The 30-suite runner includes the prior device/network/UI checks, all 253 course step occurrences, new education/checkpoint/challenge regressions and the RAID guide suite. Expected isolation failures require a working client-to-host path, correct guest resources and a running guest web service. Cloud source identity is checked in addition to its display name. Old saves accept a missing rebuild counter as zero.

The parity controls were deliberately paused when blocks were hidden; no infinite-loop cause was identified. The revised interaction and rebuild path were tested, but a device-specific browser freeze may need a browser/version report if it returns. DOM tests stub WebGL; browser checks cover the flows listed above. Scenario percentages count that scenario's checks and do not measure certification readiness.
