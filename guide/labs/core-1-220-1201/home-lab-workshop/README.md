# Home Lab Workshop

Public interactive simulator: https://core-1-reviewed-flashcards.bigdawgroof812178.chatgpt.site/home-lab.html

Begin with **Home network from zero**. The first guided path continues through a rack server, RAID and virtual machines. Open **Show exact steps & why** at each checkpoint. Use the device inspector to connect labeled ports and configure equipment, then send test traffic.

## Included

- Seven guided configurations plus free build: wired networking, rack storage/NAS, virtualization, wireless, two routed subnets, cloud backup and fault finding.
- Workbench, rack, rear-cable, network-map and server-interior views; realistic scene art and component illustrations. Drag shelf handles onto the bench and move placed devices; cables follow. View-specific positions survive browser save and JSON export/import. Arrow keys move focused equipment; Escape cancels a drag. Rack installation still uses validated rails and unit controls.
- Power cords, wall/UPS/PDU chains, brief battery outages, rack supports and collision checks, ESD preparation, compatible CPU/RAM/NIC/storage installation.
- SC provider fiber, copper Ethernet, passive patch panels, LC optical modules and SFP+ DAC; connector, occupied-port, distance and bridge-loop checks.
- DHCP, static IPv4, subnet masks, gateways, DNS, NAT, switch access VLANs, Wi-Fi association and PoE.
- RAID 0/1/5/6/10 capacity and failure rules, degraded arrays, replacement/rebuild; no claim that RAID replaces backups.
- Hypervisor preparation, guest resource allocation, guest OS/start/service state, external/internal/private virtual-switch isolation, and external-guest DHCP addresses.
- HTTPS/SMB/ICMP tests with explanations and animated routes; cloud model comparisons and simulated backup/recovery records.
- Linked glossary; browser narration with voice choice, speed, play, pause/resume, stop, optional next-lesson reading, and device/test explanations. No autoplay. Browser-local saves and JSON export/import. Saves are not account-wide or cross-device unless exported.

## Scope and correctness

This is independent educational software, not CompTIA’s exam interface and not a real hypervisor or packet emulator. It never changes physical hardware or provisions cloud resources. It focuses on A+ 220-1201 networking (domain 2), hardware/storage (domain 3), virtualization/cloud (domain 4), and troubleshooting (domain 5). Rack mounting and access-VLAN exercises add practical context. It does not claim complete exam coverage.

The model has IPv4 /24 DHCP pools, simplified provider/DNS services, two directly connected router LANs, access VLANs without trunks/STP, no RF propagation, and charged UPS batteries without runtime modeling. Internal/private guest modes show isolation; guest-to-guest application traffic and guest NAT are not implemented. OS installation and rebuilding are shortened teaching actions. The 4-bay AM4/DDR4 server is a specific teaching platform, not a universal server specification. Rack units are inches; cable lengths are feet. Port labels and validation rules are authoritative; artwork is illustrative.

### Primary references

- [CompTIA A+ 220-1201 objectives](https://assets.ctfassets.net/82ripq7fjls2/1oSdlyujpaX3GrM0rir6Ge/91afb2be72785281e8fb4c0d9a70c6f4/CompTIA-A-220-1201-Exam-Objectives-3.0.pdf)
- [Microsoft Hyper-V networking](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/plan/plan-hyper-v-networking-in-windows-server)
- [Cisco DHCP troubleshooting](https://www.cisco.com/c/en/us/support/docs/ip/dynamic-address-allocation-resolution/27470-100.html)
- [Dell RAID level specifications](https://www.dell.com/support/kbdoc/en-us/000128635/dell-servers-what-are-the-raid-levels-and-their-specifications)
- [NIST cloud computing definitions](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf)

### Workbench usability

The lesson sits above the lab. Device settings are grouped into expandable sections, save tools are tucked away, and the bench can expand. On phones, the equipment shelf scrolls horizontally, the scene fits the screen, and the selected equipment opens a settings drawer. Click-to-add remains available alongside pointer dragging.

### Verification

`node test-lab.mjs`: 90 assertions for connectivity, faults, parts, RAID, routing, power, Wi-Fi, VM isolation/resources and cloud requirements.

`node test-lab-ui.mjs`: all inspectors/configurations/views, browser-save round trip, import validation, glossary and control integrity in a DOM harness.

`node test-lab-ux.mjs`: drag/drop, cancellation, invalid drops, saved placement, grouped settings, cable suggestions, and narration state/cancellation.

`node test-lab-save.mjs`: portable-file round trip and malformed-input rejection.

Browser checks cover fault repair through successful HTTPS, rack mounting, ESD rejection, save/reset/load, and desktop/mobile layout. The browser automation file picker stalled; import parsing and restoration were separately exercised by the save and UI tests.

Scene and equipment artwork was generated with the available image-generation tool. Higgsfield generation was unavailable without a plan upgrade; no upgrade was purchased. No personal attribution or dates appear in the simulator.

## Run this copy locally

From this folder, run `python3 -m http.server 8000`, then open `http://localhost:8000/home-lab.html`. The hosted version is easiest to share. This folder contains the application files; test scripts live with the hosting source.
