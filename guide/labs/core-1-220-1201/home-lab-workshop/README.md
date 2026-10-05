# Home Lab Workshop

Public interactive simulator: https://core-1-reviewed-flashcards.bigdawgroof812178.chatgpt.site/home-lab.html

Begin with **Home network from zero**. The first guided path continues through a rack server, RAID and virtual machines. Open **Show exact steps & why** at each checkpoint. Use the device inspector to connect labeled ports and configure equipment, then send test traffic.

## Bright workbench update

White panels, blue/teal controls, a daylight workbench and a new 16-cell equipment atlas replace the dark tiles and drawn outlet. Drag an item back to the equipment shelf or the Return to shelf zone; clicking that zone returns the selected item too. Undo restores its configuration, hosted VMs, saved placement and cable connections when the original endpoints are still available. Fixed wall/ISP anchors cannot be returned. This is a workspace edit, not an instruction to disconnect running physical equipment.

The inspector becomes a drawer on smaller screens. Equipment arranges into fewer columns on narrow benches. Image tiles retain square proportions, controls wrap, and the equipment shelf intentionally scrolls horizontally on phones.

## Direct hardware operation

Click equipment on the bench to open a larger operating panel. Choose cable and length, click its first socket, and click the destination socket. Existing connector/length/occupied-port/loop rules apply. Seated plugs and cable paths use the actual port positions. Click an occupied socket to unplug the cable. Power controls, PoE, supply loss, physical link indicators, disk status, UPS display and AP illumination derive from the same simulation state.

The laptop has a simulated desktop, network status, command prompt (`ipconfig /all`, `ping 1.1.1.1`, `nslookup example.com`), and a browser teaching page. Opening the page runs the existing DHCP/addressing/routing/DNS/TCP/HTTPS checks. DNS lookup is checked independently from HTTPS. It never executes shell commands or loads an external OS. Activity lights illustrate the last successful test briefly; they are not measurements of actual traffic.

These remain generic teaching chassis, not exact manufacturer replicas. Compact devices use a matched AC-to-DC adapter abstracted into the power cable. The custom server remains AM4/DDR4; it is not a Dell PowerEdge. USB, display outputs, firmware vendor UIs and real operating systems are outside this simulation. Power buttons on generic devices are teaching controls and should not be inferred to exist on every real model.

Physical-reference research confirmed why brand labels cannot simply be applied to these chassis:

- [TP-Link ER605 v2](https://www.tp-link.com/us/business-networking/vpn-router/er605/v2/) has five Ethernet ports, USB and a DC input; versions differ.
- [TP-Link TL-SG2008P](https://www.tp-link.com/us/business-networking/poe-switch/tl-sg2008p/v1/) has eight Ethernet ports, four with PoE, and no SFP slot.
- [Dell R740 technical guide](https://i.dell.com/sites/csdocuments/shared-content_data-sheets_documents/en/aa/poweredge_r740_r740xd_technical_guide.pdf) describes a dual-Xeon, 24-DIMM platform, not this custom AM4 server.
- [Synology DS923+ hardware manual](https://global.download.synology.com/download/Document/Hardware/HIG/DiskStation/23-year/DS923%2B/enu/DS923p_HIG_enu.pdf) documents separate power, drive and LAN indicators.
- [Ubiquiti U6 Lite datasheet](https://dl.ui.com/ds/u6-lite_ds.pdf) specifies its PoE-fed Ethernet input.

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

## Plug-and-socket practice

Open a device, choose a cable and its length in feet, then drag from an empty socket to the other device’s socket. The loose end follows the pointer; a green socket highlight indicates a possible fit. Release to run the full connection checks. A success prompt confirms both plugs seated and explains the next test. Error prompts explain why the connection failed; they never replace existing wiring.

You may also click or keyboard-activate the first socket and then the second. After selecting the first end, the **Drag loose plug** handle lets you retry a missed drop. Escape or **Cancel cable** cancels the unfinished cable. Click an occupied socket with no cable pending, then choose **Unplug this cable**. Power and link indicators update from the simulated wiring. Physical connection success does not guarantee IP connectivity or a working website.

## Surge protector and VM dashboard

Choose **Surge protector** from the equipment shelf to place it on the workbench. Connect POWER IN to a wall outlet, switch it on, then connect devices to its six outputs. It has no battery: removing wall power turns its loads off. This model blocks chaining through UPS/PDU/other surge strips, uses a 1,800 W total ceiling, and does not simulate voltage spikes or protection wear. The incoming cord uses a labeled teaching socket.

The virtualization dashboard separates host readiness, guest sizing, and guest operation. Resource bars show existing reservations and the proposed VM. Presets fill RAM/vCPU/disk fields; validation uses the same engine as creation. Each guest shows install, start, web-service and HTTPS-test controls, a switch reachability diagram, and a local test explanation. No guest operating-system kernel executes in this simulation. External/internal/private terminology follows the Microsoft Hyper-V model. The two-guest diagrams illustrate reachability; they do not represent a live guest inventory.

References: [Microsoft virtual-switch terminology](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/features-terminology), [Schneider surge strips and UPS connections](https://www.se.com/be/en/faqs/FA158852/), [Philips surge-protector connection guidance](https://www.philips.co.uk/c-f/XC000008875/can-i-daisy-chain-philips-surge-protectors).

## IP and Wi-Fi learning workspace

Use **IP & Wi-Fi settings** above the bench to jump to the new workspace. Configure DHCP/static IPv4, masks, gateways, DNS, and the laptop’s active Ethernet/Wi-Fi path. The live address card shows the calculated lease or APIPA example and derives the subnet boundary from the mask. Private/public IPv4, IPv6 context, DHCP DORA, SSID, WPA2/WPA3, bands/channels and Windows settings have plain-language explanations.

Access-point controls change the SSID, practice passphrase, security, 2.4/5 GHz band and matching channel subset. Router controls expose DHCP and offered DNS; More router settings opens the existing full inspector. Settings share the existing wiring, power, VLAN and routing model. Diagnostics stop at the first failing layer: power/boot, physical link or Wi-Fi association, IP, gateway/public ping, DNS, then TCP/TLS/HTTPS. Results are invalidated by build changes. This is troubleshooting order, not a literal packet capture.

The client supports both modeled radio bands/security profiles, with no roaming or RF/interference model. Matching SSIDs and passphrases do not imply Internet access. WPA2/WPA3-Personal use the same 8–63 character teaching constraint here; it is not a statement that every real WPA3 implementation has that constraint. Channels are a US 20 MHz teaching subset. Lease assignment is immediate and deterministic, not a timer simulation. IPv6 is explained but not configured.

`node test-lab-network.mjs` verifies malformed address rejection, non-/24 subnet calculation, gateway failure, DNS-versus-ping diagnosis, DHCP/APIPA, Wi-Fi authentication and power dependence, valid band/channel combinations, and live form/diagnostic resets. Browser QA checked healthy HTTPS, DNS failure, channel changes, unpowered AP failure, and layout at desktop and 390 px mobile width without horizontal overflow.

Sources: [Microsoft Windows network settings](https://support.microsoft.com/en-us/windows/experience/connectivity-networking/essential-network-settings-and-tasks-in-windows), [Cisco wireless RF reference](https://www.cisco.com/c/en/us/td/docs/wireless/controller/9800/technical-reference/wireless-rf-reference-guide.html), and the CompTIA objectives linked above.

## Run locally

Serve this directory over HTTP (for example, `python3 -m http.server 8767`) and open `http://localhost:8767/home-lab.html`. JavaScript modules require HTTP; opening the HTML directly from disk is not supported. Share the public link above with classmates.
