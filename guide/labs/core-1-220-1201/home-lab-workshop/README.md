## Edition 39 — configure, inspect and repair inside the OS

Open the laptop desktop and use **Guided OS task → Start task**. Four tasks teach read/test/browse, disabled-adapter repair, missing-driver installation (Windows), and starting a web service (server-capable labs). Each shows one instruction, **Take me there**, and **Check & continue**. End task restores the fault it introduced. Completion is saved with the build.

Windows System tools now includes Device Manager with a hardware tree, General/Driver/Details properties, enable/disable, a supplied-driver installation wizard, and scan for hardware changes. Code 22 means disabled; Code 28 means missing driver. A good driver does not prove IP, DNS or application connectivity. The local desktop stays available when its adapter fails. Disruptive adapter exercises are blocked on the remote physical host console to keep its management path recoverable.

Services starts/stops/restarts the preinstalled LabHTTPS and LabSMB teaching services. Listening ports and process IDs agree with terminal output. Disk Management reads modeled storage and RAID capacity; it does not format or partition disks. Settings adds advanced adapter controls, inbound service rules, and device rename. Physical firewall controls share one authoritative value. Ubuntu has its own Hardware/Services/Disks/About presentation, Network settings and Bash interface; the hardware inspector is a teaching app, not a claim that Ubuntu has Windows Device Manager.

The searchable Command library groups supported commands and explains each. Load a command, then press Enter. Additional commands cover adapters and Plug and Play status, service controls, DHCP release/renew, routes, DNS settings, listening sockets, modeled system facts and navigation through real text files in the small virtual filesystem. Commands never execute on the user's OS. Only modeled fields are printed. Applying DHCP clears a released lease state. Lease allocation is deterministic and can recompute addresses; this is not a timed real DHCP lease server. External guest traffic respects the host's uplink, and physical clients can ping the guest's modeled address.

The supplied package path is `C:\LabDrivers\Ethernet`. Driver installation preserves IP settings and adapter enabled state. LabHTTPS/LabSMB and process IDs 4242/4243 are teaching fixtures. Ubuntu nginx is preconfigured for HTTPS on 443 in this exercise. No latency, CPU use, vendor IDs, driver versions or build dates are invented. Real Windows usually requires a restart after rename; this model applies it immediately. Practice terminal files are separate from the full interactive lessons in Files/File Explorer.

References: [Microsoft Device Manager error codes](https://support.microsoft.com/en-us/windows/hardware/drivers/error-codes-in-device-manager-in-windows), [driver updates](https://support.microsoft.com/en-us/windows/update-drivers-through-device-manager-in-windows-ec62f46c-ff14-c91d-eead-d7126dc1f7b6), [Get-NetAdapter](https://learn.microsoft.com/en-us/powershell/module/netadapter/get-netadapter), [managing services](https://learn.microsoft.com/en-us/powershell/scripting/samples/managing-services), [ipconfig](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig), [Ubuntu systemctl](https://manpages.ubuntu.com/manpages/noble/man1/systemctl.1.html), [Ubuntu nmcli](https://manpages.ubuntu.com/manpages/noble/man1/nmcli.1.html).

Validation: `test-results/home-lab-os-39.md`.

## Edition 38 — recognizable Windows, Ubuntu and terminal desktops

The laptop now opens to an uncluttered desktop. Windows uses the blue Bloom wallpaper, centered taskbar, Start/search panel, file folders, account/tray area, and Windows-style Settings and title bars. Ubuntu 24.04 uses its Noble Numbat wallpaper, Yaru icons, GNOME workspace indicator, centered clock, left dock, application grid, and distinct window chrome. Artwork sources and licenses are packaged in `site/lab-os-artwork-credits.txt`.

The teaching profile selector, coach, save and command-reference controls sit above the laptop, outside its OS display. Windows Terminal has PowerShell and Command Prompt tabs with separate transcripts. Ubuntu Terminal uses an aubergine background and colored Bash prompt. Commands use an inline input and Enter; ↑/↓ recalls commands, Ctrl+L clears the current shell. IP output uses each command’s recognizable field layout while deriving values from the model. Unmodeled adapter details are omitted.

Windows Settings → Network & internet → Edit and Ubuntu Network → IPv4 settings edit the same simulated interface. File Explorer / Files opens the lab’s learning repositories. Start / Show applications searches installed learning apps; unavailable lab tools stay disabled. Start’s power control shuts down the simulated machine. The current lab still controls capabilities. VM consoles stay inside the physical client’s display with their own machine state and terminal history.

These are independent, restricted interface recreations. The desktop and artwork do not imply affiliation with Microsoft, Canonical or CompTIA, or execution of real OS kernels. The Windows-style server host console remains a teaching management view. See `test-results/home-lab-os-38.md` for validation.

## Edition 37 — operating systems on the 3D computer screen

Power the laptop and click its modeled LCD, or choose **Laptop screen / Open computer desktop**. The camera faces the Blender display and the interactive OS surface follows its real four corners. Windows 11 and Ubuntu 24.04 LTS teaching profiles share the physical client’s modeled network settings. The bezel remains visible; **Back to workbench** or Escape restores the workshop and camera. **Larger text** improves readability. Narrow phone screens provide a horizontally pannable workspace; landscape or a larger display is recommended for terminal exercises.

Terminal, Settings, Browser and the learning folders open within that display. A Windows client provides PowerShell and Command Prompt; Ubuntu provides Bash and NetworkManager exercises. In VM labs, open **Virtual machines → Open Ubuntu desktop**. The guest’s desktop and terminal remain inside a console frame on the physical client. **Disconnect console** returns to the client; it does not stop the guest. **Open host console** provides the host’s management view on the same display. Guest and host commands act on their own modeled machine. Sessions retain their app and terminal history while switching within the current build; transcripts are not saved across a reload.

Tools and learning content follow the selected lab. Home network → rack → VMs and Virtual machines enable guest management. Wi-Fi enables the wireless controls; Cloud backup enables its console. Free build enables every modeled app. The help-level toggle controls hints, independently of the selected lab’s scope. Unsupported or out-of-scope commands cannot run. Physical power/boot failure blocks the client screen, and host power, guest state or the modeled client-to-host management path can block remote consoles. A private guest network still permits a console through its reachable host. The model uses LAN reachability for this check; real management protocols additionally require the right ports, authentication and permissions.

These are faithful, restricted learning interfaces, not licensed OS images or running kernels. No real shell process, VM, network request or device configuration is executed. System settings and supported commands derive their results from the lab engine. The device library currently supplies laptop clients; rack servers are managed from a client screen. The prior guided courses, wiring, RAID, rack mounting and save format remain available. WebGL 2 is needed for the attached 3D display.

Verification: OS logic/UI, screen projection and capability gates, all eight guided courses, save/import, IP/Wi-Fi, core engine, UI, Blender geometry and cable-routing checks passed. Local browser review covered direct LCD clicking, both OS profiles, physical and guest terminals, host administration, guest disconnect, browsing, scrolling without camera movement, larger text, 1280/900/390-pixel views, and returning to the workbench. See `test-results/home-lab-screen-37.md`.

## Edition 36 — guided labs and simulated operating systems

Open **Open computer desktop** after powering a laptop, or **Open Ubuntu desktop** on an installed, running Linux VM. Learning repositories are reached inside those desktops. Foundations has 12 lessons, workflows, knowledge checks and a /0–/32 subnet calculator. Practice projects has eight exercises checked against the current machine, successful commands and the lab state. The desktop contains Settings, Terminal, Browser, Virtual Machine Manager, Cloud console and a limited System tools view. Window title bars drag; taskbar icons restore minimized windows. Save progress preserves completed learning checks with the lab; terminal history and unactivated Linux profile changes are session-only.

Windows offers PowerShell and Command Prompt. Ubuntu uses a Bash-style teaching console and NetworkManager profile exercises. Only supported commands run; output is simulated, and no real kernel, command process or network request is launched. Guest static addresses feed both the desktop and physical-client VM tests. Internal/private switches remain isolated and do not simulate guest-to-guest application traffic. The Windows-style host-management desktop is a generic teaching console rather than a claim that a generic hypervisor is Windows 11.

Guided and Practice modes now cover every mission: wired 42 steps, NAS 35, virtualization 42, Wi-Fi 29, routed subnets 31, cloud 40, troubleshooting 5 and sandbox orientation 23. Free help mode removes the checklist without resetting equipment. Shared foundation steps are reused intentionally; these counts are not unique lessons or official PBQs.

Wheel zoom uses bounded 4.5% logarithmic steps per animation frame around a fixed center. Hidden or collapsed viewports no longer change the camera, and starting a lab fits the scene. Existing cable routing, rack mounting and Blender models remain integrated.

Primary references appear in the in-desktop lessons: CompTIA 220-1201/220-1202 objectives, Microsoft Windows/PowerShell/Hyper-V documentation, Ubuntu 24.04 nmcli/systemctl manuals, Cisco subnetting guidance and NIST cloud definitions. Subnet arithmetic, service setup and VLAN implementation include extension practice beyond basic A+ recognition.

Validation: `test-lab-courses.mjs` exercises every added guided mission through UI/engine actions; `test-lab-desktop.mjs` covers command behavior, network changes, VM isolation, service state, subnet boundaries, repository interactions and desktop controls. See `test-results/home-lab-desktop-36.md` for browser review.

# Home Lab Workshop · Blender 3D edition

The main workbench and 18U rack now share a real-time Three.js scene with Blender-authored equipment and room models. Models include shaped sockets, contacts, vents, fasteners, drive trays, keyboards and rack hardware. The optimized assets total about 2 MB; generic procedural equipment remains a loading fallback. Choose Whole lab, Desk, Top down, Rack front, or Rear / wiring. Build mode drags equipment and pans empty space; Move view pans from anywhere; Rotate view orbits. Reset view frames the full environment. Scroll zooms toward the cursor; + / − provide bounded steps. Arrow keys pan and Home resets when the scene is focused. Device configuration, network tests, RAID, VMs, cloud exercises, narration, sounds and the 42-task guided path retain the existing simulation engine.

- Select a model; double-click for the exploded 3D connection viewer. It spreads only plugs and wires, keeping the chassis whole and the build unchanged.
- Drag empty socket markers together to connect. Drag a seated plug to a different socket to move one end, or onto empty desk space to unplug. Rejected moves preserve the original cable. Escape cancels.
- Cable paths follow socket normals, avoid padded equipment footprints, and travel outside the desk edge into the rack cable channel. Rounded bends are checked against modeled solid surfaces. Blocked paths are reported rather than drawn through geometry. The configured length remains the teaching-engine cable rating; drawn routes do not simulate slack or mechanical stress.
- NAS and UPS equipment use separately authored 2U rack variants rather than distorted tower geometry.
- Drag equipment between the desk and numbered rack spaces. Support, height, collision and heavy-UPS placement rules apply. Mounting controls provide a click alternative.
- Focus selected enlarges small sockets. The named socket buttons and equipment selector provide keyboard alternatives.
- Device settings opens the inspector. Laptop screen retains the simulated desktop, terminal and browser.
- Guided Find buttons frame both endpoints together. Guided destinations pulse; Practice and Free build do not flash the answers.
- Green cable pulses show available power; blue pulses show physical link readiness. Neither is a traffic measurement. Test IP/DNS/services separately.
- 3D desk coordinates are saved separately in layout.world and survive save/import and shelf Undo. Existing builds load into an orderly initial 3D arrangement.

WebGL 2 is required for the 3D scene. The illustrated workbench remains a fallback if initialization fails. Models are generic teaching equipment, not manufacturer CAD or a physical cable-slack/electrical simulation. The 18U rack uses a 19-inch equipment width with the fronts aligned to its rails. 1U remains 1.75 inches and cable lengths are in feet.

Validation: test-lab-world.mjs covers all 13 device types and 116 socket transforms across bench/rack variants, stable placement, collision checks, coordinate persistence, Undo, and rejected cable moves. Existing engine, 42-task guided, save, network, hardware, RAID and VM tests pass. Native browser checks cover plug/unplug, power, double-click explosion, rack drag in/out, invalid move preservation, saved-build reload, and desktop/mobile layout.

Editable assets and reproducible Blender build instructions: [blender/README.md](blender/README.md). The Blender asset test verifies all 58 socket positions, compressed loading, separate link lamps and preserved room identities.

## Earlier implementation notes


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


## Lab studio: templates, tools and feedback

Use **Planner & PowerShell** above the bench. Four working examples cover a connected home office, NAS recovery, a self-hosted VM lab, and trading-app staging. Enter a goal and parts notes; the planner matches one of these patterns, checks the numeric RAM/CPU/drive fields, and gives build steps and tradeoffs. It is a bounded rules-based planner, not live product search or an unrestricted AI designer. Numeric fields are authoritative; free-form notes are not a hardware inventory parser. Loading a template replaces the current bench with fixed teaching hardware; Undo restores the previous build.

The searchable parts library explains eleven equipment types plus CPU, RAM, NIC and storage options. Six diagnostic tools use the existing simulation state. A basic cable check is distinct from bandwidth certification, a power budget is distinct from measured power, and a successful TCP connection is distinct from application or data health.

Successful test paths show moving data pulses. Brief link pulses require a live data link. Power cables never carry data pulses. **Sound on** opts into connection, completion and error tones with a volume control; written results remain available. **Guided steps** and **Data pulses** can be disabled. Reduced-motion preferences are respected. The workbench/rack has its own scrollable viewport, zoom controls, Fit width, and Up/Down buttons. Expanding the bench recomputes its width and cable geometry.

### PowerShell practice

Ten command cards link to Microsoft references. The browser console reads IP configuration, performs modeled DNS/ICMP/TCP tests, lists guests, compares virtual-switch profiles, changes a guest’s switch and practices static addressing/DNS/DHCP. It accepts only the displayed command patterns; no real shell, arbitrary script, pipeline or external OS executes. State-changing commands update the lab and its network diagnostics. Differences from real Windows are stated beside each command.

The downloadable `HomeLab.Tools.psm1` is a separate read-only Windows module with three helpers: `Get-HomeLabNetwork`, `Test-HomeLabService`, and `Get-HomeLabVM`. It requires the applicable Windows modules and permissions. Review the source before importing it. The TCP helper contacts the host supplied by the person running it. Its source was reviewed here; it was not executed on Windows in this macOS environment.

### Latency and fresh data

The trading template is a staging/replay exercise. The freshness sandbox checks event age, arrival silence, processing backlog, connection/subscription status, clock uncertainty and unresolved sequence gaps. Thresholds are practice values. A quiet feed may have an old last event without a broken connection; real acceptance policies depend on the feed and application. No live feeds, broker accounts or orders are connected, and no low-latency or no-stale-data guarantee is made. Host placement guidance emphasizes measuring actual paths and p50/p95/p99 delays before choosing a deployment location.

Primary references: [Microsoft Get-NetIPConfiguration](https://learn.microsoft.com/en-us/powershell/module/nettcpip/get-netipconfiguration), [Test-NetConnection](https://learn.microsoft.com/en-us/powershell/module/nettcpip/test-netconnection), [Hyper-V Get-VM](https://learn.microsoft.com/en-us/powershell/module/hyper-v/get-vm), [New-NetIPAddress](https://learn.microsoft.com/en-us/powershell/module/nettcpip/new-netipaddress), [Alpaca streaming behavior](https://docs.alpaca.markets/us/docs/streaming-market-data), [Alpaca event timestamps](https://docs.alpaca.markets/us/docs/real-time-stock-pricing-data), and [AWS location/network requirements](https://docs.aws.amazon.com/wellarchitected/latest/framework/perf_networking_choose_workload_location_network_requirements.html). Trading-specific reliability is additional practical context, not an A+ exam objective.

### Imagery and checks

The new AI-generated bench backdrop is native 1672 × 941. It is not advertised as a native 4K photograph. Higgsfield required a paid plan; the available image generator supplied the fallback without a plan upgrade. `lab-reference-4k.svg` has a scalable 3840 × 2160 canvas with correct generic router/switch ports, server storage, rack positions and power/data paths. It is a technical vector reference, not a manufacturer photograph. Existing interactive sockets, switches and indicators remain tied to the teaching model.

`node test-lab-studio.mjs` verifies four connected templates, resource and compatibility checks, PowerShell parser/state changes, isolation, stale-data rejection, optional sounds, scroll/zoom controls, tabs, search and template Undo. Existing lab regression checks also pass. Browser review covered desktop and 390 px layouts, independent rack scrolling at increased zoom, expanded-bench width, template Undo, PowerShell output, fresh/stale examples, data pulses and an empty error console. No horizontal page overflow was observed in those reviewed layouts.

Edition 35 validation: `test-lab-world-routing.mjs` checks 20 bench, wall and rack routes against room and equipment geometry, rounded-curve clearance, blocked routes, rack/bench socket normals, 18U boundaries and heavy-UPS restrictions. Native browser checks confirmed pan/orbit preserve the build, reset and zoom work, all 11 saved cable routes clear, and the 2U NAS mounts at U8 and opens the correct exploded connection model.
