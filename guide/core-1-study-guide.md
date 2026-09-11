# CompTIA A+ Core 1 and Data Center Support Study Guide

Community-organized notes compiled from authorized course materials through September 7, 2026. Private course attachments are indexed but are not redistributed in this public repository.

> Use Canvas and instructor announcements for live deadlines. The Discord calendar and peer notes are snapshots and can be superseded. Peer-created quizzes are excellent practice, but the official CompTIA exam objectives are the authority for exam scope.

## Start here

1. Read the [official CompTIA A+ Core 1 `220-1201` objectives](https://assets.ctfassets.net/82ripq7fjls2/1oSdlyujpaX3GrM0rir6Ge/91afb2be72785281e8fb4c0d9a70c6f4/CompTIA-A-220-1201-Exam-Objectives-3.0.pdf).
2. Review the beginner Modules 1–4 guide *(course attachment; not redistributed)*.
3. Use the 60-question Modules 1–4 practice exam *(course attachment; not redistributed)*, then the five-task PBQ lab *(course attachment; not redistributed)*.
4. Study the networking, Wi-Fi, cabling, RAID, and troubleshooting sections below.
5. Use the [attachment manifest](../resources/attachments.md) and [image and diagram index](../resources/images.md) when you need the original slides or diagrams.

## Exam snapshot and priorities

The posted objectives are for CompTIA A+ Core 1 `220-1201`:

- Up to 90 questions in 90 minutes, including multiple-choice and performance-based questions.
- Passing score: 675 on a 100–900 scale.
- Recommended experience: about 12 months of hands-on IT support.
- Domain weights: Hardware and Network Troubleshooting 28%; Hardware 25%; Networking 23%; Mobile Devices 13%; Virtualization and Cloud Computing 11%.

The `220-1101` series is the previous exam generation. Older flashcards can help with unchanged fundamentals, but do not use them to define current scope; map every topic against the `220-1201` objectives.

Study in this order when time is limited:

1. Hardware and network troubleshooting.
2. Hardware identification, compatibility, installation, and safety.
3. Networking ports, protocols, devices, cabling, IP addressing, and wireless.
4. Mobile hardware and connectivity.
5. Virtualization and cloud concepts.

The standard six-step troubleshooting method supports scenario questions, but the posted `220-1201` objectives note that the method itself is not a formal test objective. Know it because it helps you reason through PBQs and real support calls.

## 1. IT support and troubleshooting

### Six-step method

1. Identify the problem: interview the user, inspect symptoms, check logs, determine scope, and identify recent changes.
2. Establish a theory of probable cause: question the obvious and begin with simple, low-risk causes.
3. Test the theory: if it fails, form a new theory or escalate.
4. Establish a plan and implement the solution: consider side effects and obtain authorization when needed.
5. Verify full functionality and add preventive measures.
6. Document findings, actions, and outcomes.

### Scenario habits

- Several users lose the same resource at once: suspect the server, switch, access point, ISP, or shared service before five independent PC failures.
- A device is completely dead: verify the outlet, power strip, cables, and power switch before replacing parts.
- Make one controlled change at a time so the result proves or disproves a theory.
- After the repair, reproduce the original task, check related functions, and ask the user to confirm.
- Document symptoms, root cause, exact fix, test results, and prevention advice.
- Explain the repair in plain language and let the user finish describing the problem before interrupting.

### Safety-first symptoms

- Smoke or burning smell: disconnect power immediately.
- Grinding or repeated clicking from an HDD: stop using the drive, preserve recoverable data, and replace it.
- Swollen or leaking motherboard capacitors: replace the failed board; do not continue normal operation.
- Unfamiliar production change: back up, document, and use an approved change plan.

## 2. Networking foundations

### TCP/IP model

| Layer | What to remember |
|---|---|
| Application | User-facing protocols and services such as HTTP, DNS, SMTP, and DHCP. |
| Transport | TCP and UDP; ports identify the service or application. |
| Internet | IPv4/IPv6 addressing and routing between networks. |
| Network access | Ethernet/Wi-Fi frames, MAC addresses, cabling, and physical transmission. |

TCP is connection-oriented, ordered, and acknowledged. UDP is connectionless and lower overhead; it favors speed and timeliness over retransmission. ARP resolves an IPv4 address to a local MAC address.

### Common ports

| Port | Protocol/service | Key idea |
|---:|---|---|
| 20/21 | FTP | Data/control; unencrypted file transfer. |
| 22 | SSH | Secure remote shell and file transfer. |
| 23 | Telnet | Unencrypted remote terminal; avoid on untrusted networks. |
| 25 | SMTP | Mail transfer. |
| 53 | DNS | Name resolution; commonly UDP, TCP for some transfers/large replies. |
| 67/68 | DHCP | Server/client address configuration. |
| 80 | HTTP | Unencrypted web traffic. |
| 110 | POP3 | Mail retrieval, typically downloads mail to a client. |
| 143 | IMAP | Mail retrieval with server-side synchronization. |
| 137–139 | NetBIOS | Legacy Windows name/session services. |
| 389 | LDAP | Directory queries. |
| 443 | HTTPS | TLS-protected web traffic. |
| 445 | SMB | Windows file and printer sharing. |
| 3389 | RDP | Microsoft remote desktop. |

Practice resource: [Network Ports Explained](https://www.youtube.com/watch?v=g2fT-g9PX9o).

#### Server-services review

An attached cram-sheet image reviewed on September 11 groups high-yield services as follows: SMB uses TCP 445 for Windows file/print sharing; FTP uses TCP 20/21; SSH uses TCP 22; Telnet uses TCP 23 and is insecure; SMTP uses TCP 25, POP3 uses TCP 110/995, IMAP uses TCP 143/993, LDAP uses TCP 389/636, RDP uses TCP 3389, NTP uses UDP 123, SNMP uses UDP 161/162, and Syslog uses UDP 514. Proxy servers, firewalls/UTM, IDS/IPS, spam gateways, load balancers, legacy systems, embedded systems/ICS/SCADA, and IoT are related service concepts to recognize. Verify port details against the current CompTIA objectives.

### IPv4, subnetting, and IPv6

- Private IPv4 ranges: `10.0.0.0/8`, `172.16.0.0/12`, and `192.168.0.0/16`.
- APIPA/link-local IPv4: `169.254.0.0/16`, often indicating DHCP failed.
- Common masks: `/8 = 255.0.0.0`, `/16 = 255.255.0.0`, `/24 = 255.255.255.0`.
- The default gateway routes traffic outside the local subnet.
- DHCP supplies address, mask, gateway, DNS, and lease information.
- IPv6 uses 128-bit addresses; `fe80::/10` is link-local. Neighbor Discovery replaces ARP, SLAAC can self-configure addressing, and dual stack runs IPv4 and IPv6 together.

Subnetting tools posted in Discord:

- [CIDR reference and calculator](https://www.ipaddressguide.com/cidr)
- [IP subnet calculator](https://jodies.de/ipcalc?host=192.168.0.0&mask1=16&mask2)

## 3. Wireless and mobile connectivity

### Frequency bands

| Band | Strength | Tradeoff |
|---|---|---|
| 2.4 GHz | Longest practical range and better wall penetration | Crowded spectrum, more interference, lower throughput; use non-overlapping channels 1, 6, and 11 in North America. |
| 5 GHz | Higher throughput and more channels | Shorter range than 2.4 GHz. |
| 6 GHz | Clean spectrum and very high capacity | Shortest range and requires compatible Wi-Fi 6E/7 equipment. |

A Wi-Fi analyzer helps compare signal strength, encryption, congestion, and channel use. Signal is measured in negative dBm; a value closer to zero is stronger (for example, `-45 dBm` is stronger than `-80 dBm`).

### Wi-Fi generations

- `802.11` (1997): 2.4 GHz, 1–2 Mbps.
- `802.11b`: 2.4 GHz, up to 11 Mbps.
- `802.11a` and `802.11g`: 5 GHz and 2.4 GHz respectively, up to 54 Mbps.
- `802.11n` / Wi-Fi 4: 2.4/5 GHz, MIMO, up to 600 Mbps theoretical.
- `802.11ac` / Wi-Fi 5: 5 GHz, wider channels and MU-MIMO.
- `802.11ax` / Wi-Fi 6: 2.4/5 GHz, OFDMA and improved MU-MIMO; Wi-Fi 6E adds 6 GHz.
- `802.11be` / Wi-Fi 7: 2.4/5/6 GHz, 320 MHz channels, multi-link operation, 4K-QAM, and multi-RU support.

Advertised wireless speeds are theoretical. Distance, walls, interference, channel width, client capability, and shared airtime reduce real throughput.

### Wi-Fi troubleshooting order

When one phone cannot join Wi-Fi but other devices work, start with the affected client and use the least disruptive checks first:

1. Confirm Wi-Fi is enabled, airplane mode is off, and the correct SSID and password are selected.
2. Forget the saved network and reconnect, watching for authentication or certificate errors.
3. Check whether the client receives a valid IP address, gateway, and DNS settings instead of an APIPA address.
4. Verify band, wireless-generation, and security compatibility, especially for 5/6 GHz-only networks and WPA3.
5. Restart or update the client, then inspect access-point configuration and logs if the problem remains.
6. Reserve factory resets and hardware replacement for last, after configuration and compatibility checks fail.

### Short-range and wide-area technologies

- Bluetooth: peripherals, audio, and short-range device connections.
- NFC: very short-range tap-to-pair and contactless transactions.
- RFID: tags and readers for tracking/identification.
- Fixed wireless/microwave: site-to-site links, often requiring clear line of sight.
- Cellular and hotspot/tethering: WAN access through a mobile carrier.

Videos:

- [Wi-Fi standards explained](https://www.youtube.com/watch?v=hhks5xSpM-0)
- [CompTIA 1201 mobile-device hardware review](https://www.youtube.com/watch?v=FdkzOEUnLRQ)

## 4. Cabling, connectors, and network devices

### Copper and coaxial connectors

- RJ45/8P8C: Ethernet LAN connections.
- RJ11: telephone/modem wiring.
- RJ48: commonly shielded T1/leased-line wiring.
- BNC: bayonet coax connector used by legacy networking, test gear, and video.
- T568A starts with the green pair; T568B starts with the orange pair.
- Straight-through cable: same standard on both ends, traditionally for unlike devices.
- Crossover cable: T568A on one end and T568B on the other, traditionally for like devices; modern auto-MDI/MDIX often removes the need.

### Ethernet categories

- Cat 5e: 1 Gb/s up to 100 m.
- Cat 6: 1 Gb/s up to 100 m; 10 Gb/s over shorter runs, commonly about 55 m depending on conditions.
- Cat 6a: 10 Gb/s up to 100 m.
- Cat 7: shielded/specialized deployments; verify connector and environment requirements.
- Cat 8: 25/40 Gb/s data-center links up to 30 m.

### Fiber connectors and polish

- SC: square, push-pull connector.
- LC: smaller latch connector, common in dense switches and transceivers.
- ST: bayonet-style half-turn connector.
- MT-RJ: compact duplex connector.
- UPC polish: normally blue, low loss for general use.
- APC polish: normally green with an angled face for low back reflection.
- Do not mate UPC and APC connectors; their polish angles do not match.

### Power over Ethernet

- `802.3af` / PoE: about 13 W usable at the powered device.
- `802.3at` / PoE+: about 25 W usable.
- `802.3bt` Type 3/4: higher-power operation, roughly 51 W/71–73 W usable depending on implementation.
- The power-sourcing equipment detects a compatible powered device before applying full power.

### Devices

- Hub: repeats traffic to all ports.
- Switch: forwards Layer 2 frames using a MAC address table.
- Router: connects IP networks and often performs NAT.
- Access point: bridges wireless clients onto a wired LAN.
- Modem/ONT: converts the provider's access signal into customer-facing networking.
- SOHO gateway: often combines router, switch, firewall, DHCP, and Wi-Fi access point functions.

Tools: a stripper removes the cable jacket, a crimper terminates modular plugs, and a punch-down tool seats conductors into IDC blocks or keystone jacks.

Videos:

- [Network connectors](https://www.youtube.com/watch?v=ktTtAQIvYkg)
- [Cable, DSL, and fiber Internet](https://www.youtube.com/watch?v=qQYiwmamq38)
- [TCP vs. UDP](https://www.youtube.com/watch?v=uwoD5YsGACg)

## 5. PC hardware

### Motherboard map

Know these parts by sight and purpose:

- CPU socket and retention mechanism.
- DIMM slots and paired-channel placement.
- 24-pin ATX motherboard power and 4/8-pin EPS CPU power.
- PCIe x16 for GPUs and high-bandwidth cards; shorter PCIe slots for other adapters.
- M.2 sockets for NVMe/SATA modules; SATA ports for 2.5/3.5-inch drives.
- Front-panel, USB, fan, and audio headers.
- UEFI/BIOS flash storage, chipset, and CMOS battery.

Use the motherboard flowchart image *(course attachment; not redistributed)* as a visual checklist.

### CPU

The basic instruction cycle is fetch, decode, execute, and store/write back. Socket and chipset must match the processor. LGA places spring contacts in the motherboard socket; PGA places pins on the processor. ZIF retention allows installation without forcing the CPU.

Cooling reminders:

- Apply a thin, even thermal-interface layer between CPU and heatsink.
- Connect the CPU fan to the correct monitored header.
- Dust, failed fans, poor airflow, or a loose heatsink can cause thermal throttling and shutdowns.
- ARM emphasizes efficiency and dominates mobile devices; x86/x64 is common in PCs and servers.

Reference: [CPU anatomy](https://www.overclockers.co.uk/blog/anatomy-of-a-cpu/) and [basic CPU functions](https://www.geeksforgeeks.org/computer-science-fundamentals/basic-function-of-cpu/).

### RAM

- DIMM is the standard desktop module; SODIMM is the compact laptop form factor.
- DDR generations are physically keyed and electrically incompatible.
- Install matched modules in the motherboard-designated slots for dual-channel operation.
- ECC detects and corrects certain memory errors and is common in supported servers/workstations.
- Symptoms of loose/failing RAM include POST codes, no display, crashes, and memory-test errors.

### Storage

- HDD: magnetic, mechanical, high capacity; performance commonly described by RPM and transfer rate.
- SATA SSD: flash storage using the SATA interface.
- M.2: a form factor, not a protocol; an M.2 drive can use SATA or PCIe/NVMe depending on the slot and device.
- NVMe: low-overhead storage protocol over PCIe, typically faster than SATA.
- Verify connector, keying, lane sharing, form-factor length, firmware support, and boot settings before purchase.

### Power supplies

1. Add the expected wattage of CPU, GPU, drives, fans, pumps, cards, and accessories.
2. Add roughly 20–30% capacity headroom.
3. Choose the next appropriate reputable PSU size and verify every required connector.
4. Use efficiency certification as one quality/energy indicator, not as a substitute for electrical quality.

The posted example totals 490 W, adds 25% headroom to reach about 613 W, and selects a 650 W unit. See the PSU planning image *(course attachment; not redistributed)*.

An attached motherboard-power image also reviewed the legacy 20-pin ATX P1 connector and the common 24-pin (2x12) connector. A 20+4 adapter can support older 20-pin boards when electrically compatible; confirm the motherboard and PSU documentation before connecting power.

## 6. RAID

| Level | Minimum drives | Usable capacity | Fault tolerance | Best memory cue |
|---|---:|---:|---:|---|
| RAID 0 | 2 | Sum of all drives | None | Striping = speed only. |
| RAID 1 | 2 | 50% with two drives | One drive in a mirror | Mirroring = duplicate copy. |
| RAID 5 | 3 | `(N−1) × smallest drive` | One drive | Distributed single parity. |
| RAID 6 | 4 | `(N−2) × smallest drive` | Two drives | Distributed dual parity. |
| RAID 10 | 4 | About 50% | Depends which drives fail | Stripe across mirrored pairs. |

RAID improves availability or performance; it is not a backup. Maintain separate, tested backups.

Videos posted in `#comptia-help`:

- [RAID 0, 1, 5, and 10 overview](https://www.youtube.com/watch?v=U-OCdTeZLac)
- [RAID visual short](https://youtube.com/shorts/g-fLUpIgj2Y)
- [RAID explanation](https://www.youtube.com/watch?v=Xo0XabwIW-M)
- [Longer RAID walkthrough](https://www.youtube.com/watch?v=rgo0OPSw9_E&t=321s)
- [Additional RAID short](https://youtube.com/shorts/6EKgRJdn91g)

## 7. Boot, UEFI, security, and display troubleshooting

### Boot sequence

1. Power rails stabilize and the CPU begins firmware execution.
2. POST checks essential hardware.
3. UEFI/BIOS initializes devices and reads configuration.
4. Firmware selects a boot device.
5. A bootloader starts the operating-system kernel.
6. Drivers and services load, followed by login.

### Firmware and security

- UEFI replaces legacy BIOS features with modern boot, partition, and security support.
- Secure Boot allows trusted, digitally signed boot software.
- TPM protects cryptographic keys and supports technologies such as BitLocker.
- The CMOS/RTC battery preserves time and some firmware settings while disconnected from power.
- A supervisor/administrator firmware password restricts configuration changes.

### Fast symptom map

| Symptom | Likely checks |
|---|---|
| No power | Outlet, strip, switch, external cable, 24-pin ATX, EPS CPU power, PSU. |
| Power but no display | Monitor/input/cable, RAM seating, GPU seating/power, POST codes. |
| Time/date resets | Replace the CR2032 CMOS battery and restore settings. |
| Boot device not found | Drive detection, data/power cable, M.2 seating, boot order, failed drive, bootloader. |
| GPU artifacts | Temperature, GPU/VRAM stability, driver, display cable, monitor. |
| Very dim LCD with a faint image under a flashlight | Backlight or its power/control circuit. |
| Stretched/fuzzy LCD image | Set the display to its native resolution and confirm cable/driver. |
| SMART warning or mechanical drive noise | Back up immediately and replace the drive. |

## 8. Mobile devices

For Core 1, practice identifying and replacing laptop/mobile hardware: batteries, keyboards, RAM, storage, wireless cards, cameras, microphones, speakers, touchpads, and displays. Also know:

- USB-C is a connector; supported protocols and power levels vary by device and cable.
- Thunderbolt over USB-C can carry high-speed data, displays, docking, networking, and charging when both ends support it.
- Docking stations and port replicators expand connectivity.
- Hotspot/tethering shares cellular service; airplane mode disables radios; screen locks and remote wipe protect lost devices.
- Mobile troubleshooting includes connectivity, battery swelling/overheating, app permissions, synchronization, and accessory compatibility.

Video: [CompTIA A+ 1201 mobile hardware review](https://www.youtube.com/watch?v=FdkzOEUnLRQ).

## 9. Virtualization and cloud

### Virtualization

- A hypervisor allocates CPU, memory, storage, and networking to virtual machines. Type 1 runs on hardware; Type 2 runs as an application on a host OS.
- Confirm that hardware virtualization support—Intel VT-x or AMD-V—is present and enabled in UEFI/BIOS. SLAT, called EPT on Intel and RVI/NPT on AMD, reduces virtual-memory translation overhead.
- Size the host with CPU cores/threads, RAM, storage capacity and I/O, and network bandwidth for both the host and every running guest. Leave headroom; overcommitting can make the host and all guests slow or unstable.
- A virtual NIC is the network interface presented to a guest. The hypervisor connects it to a virtual switch and then, depending on mode, to NAT, a host-only/internal network, or a bridged physical network.
- VNC is a cross-platform remote-access protocol for viewing and controlling a graphical desktop across a network. Protect it with strong authentication and encryption appropriate to the implementation; do not expose it directly to the Internet.
- Snapshots help with short-term rollback but are not a replacement for backups.

| Full virtual machine | Container |
|---|---|
| Includes a complete guest OS and virtual hardware. | Shares the host kernel while isolating application processes and files. |
| Usually consumes more RAM, storage, and startup time. | Usually starts faster and uses fewer resources. |
| Can run a different supported guest OS and provides a stronger isolation boundary. | Must use a compatible host kernel; a host-kernel compromise can affect every container. |

### Secure VirtualBox lab checklist

1. Download VirtualBox from the [official Oracle page](https://www.virtualbox.org/wiki/Downloads), select the correct host OS and CPU architecture, and verify the checksum when practical.
2. Patch the host, hypervisor, guest OS, and guest applications. Run daily work without unnecessary administrative privileges.
3. Start with NAT for ordinary Internet access or a host-only/internal network for an isolated lab. Use bridged mode only when the VM must appear directly on the LAN, and firewall it like a physical computer.
4. Disable shared clipboard, drag-and-drop, shared folders, USB passthrough, and remote display unless the lab requires them. Each feature creates another path between host and guest.
5. Use strong authentication and MFA for management accounts, encrypt sensitive VM disks, protect recovery keys, collect useful logs, and restrict inbound/outbound traffic to required services.
6. Maintain separate backups and test restoration. A snapshot, RAID array, or replicated VM is not by itself a backup.

### Cloud concepts

- IaaS provides infrastructure primitives; PaaS provides a managed application platform; SaaS provides a finished application.
- Public, private, hybrid, and community describe deployment models.
- Rapid elasticity, measured service, resource pooling, high availability, and shared responsibility are common concepts.
- Synchronization, data residency, latency, Internet dependence, cost, security, and vendor lock-in are practical tradeoffs.

### Cloud shared-responsibility review

| Model | Provider generally manages | Customer generally manages |
|---|---|---|
| On-premises | Nothing in the local stack | Physical servers, storage, networking, virtualization, operating systems, middleware, runtime, applications, data, and access. |
| IaaS | Physical facilities, servers, storage, networking, and the virtualization layer | Guest operating systems, middleware, runtime, applications, data, identities, and configuration. |
| PaaS | Infrastructure, operating systems, middleware, and runtime | Application code, data, identities, and application configuration. |
| SaaS | The application and its underlying platform and infrastructure | Users, data handling, access control, settings, endpoint security, and appropriate use. |

Exact boundaries vary by product. “The provider manages it” does not remove the customer's responsibility for identity, data classification, secure configuration, and account activity.

## 10. Printers

The Discord notes were light here, but the official objectives include printer deployment, maintenance, and troubleshooting. Review:

- Laser process: processing, charging, exposing, developing, transferring, fusing, and cleaning.
- Inkjet, thermal, impact, and 3D printer characteristics and consumables.
- Drivers, IP addressing, print servers, shared queues, duplexing, trays, orientation, and finishing options.
- Laser maintenance kits, toner, drums, transfer components, rollers, fusers, calibration, and cleaning.
- Symptom matching: streaks/lines, faded output, ghosting, smearing, jams, blank pages, wrong color, garbled jobs, and unreachable network printers.

## 11. OSHA and electrical safety

- The OSHA final was reported to reuse concepts from its quizzes; still review each quiz rather than relying on memory alone.
- Upload both required certificates and keep personal copies that remain accessible after the program.
- NFPA 70E focuses on electrical safety in the workplace; follow course instructions for the assigned certificate.
- De-energize equipment when possible, verify the absence of voltage, use appropriate PPE, control electrostatic discharge, and follow site lockout/tagout rules.
- Do not include shared credentials in personal notes. Change temporary passwords and use unique credentials where the service permits it.

## 12. Professional development

The three posted Google IT Support resume examples share a useful structure:

1. Name, phone, professional email, location, and LinkedIn.
2. A concise IT-focused summary aligned to the target role.
3. Experience bullets that show action, technology, scale, and measurable outcome.
4. Certifications and technical skills organized for quick scanning.
5. Projects or labs when professional IT experience is limited.
6. Education and relevant training.

Resume files:

- Resume example 1 *(course attachment; not redistributed)*
- Resume example 2 *(course attachment; not redistributed)*
- Resume example 3 *(course attachment; not redistributed)*
- Assignment grading rubric archive *(course attachment; not redistributed)*

Peer-review checklist:

- Does every bullet begin with a strong action and end with a result?
- Are technologies named accurately and spelled consistently?
- Is the target role obvious in the first third of the page?
- Are unrelated duties compressed while transferable skills remain visible?
- Are dates, punctuation, verb tense, and spacing consistent?
- Does the resume avoid unsupported claims and sensitive information?

Career-planning prompt adapted from `#pd-help`:

> For my target role, identify the technical, professional, communication, interview, networking, and AI-readiness skills I should build during this program. Turn the gaps into projects and measurable weekly actions.

## Practice labs and quizzes

See the [public practice index](../resources/practice.md).

These HTML files are self-contained peer-created study aids. Downloaded files may need to be opened in a web browser. Review their source before running them if your security policy requires it.

- 60-question Modules 1–4 practice exam *(course attachment; not redistributed)*: classic, timed, and shuffled modes; explanations and review.
- Modules 1–4 PBQ lab *(course attachment; not redistributed)*: five interactive tasks and 39 scored items.
- Earlier Modules 1–4 quiz *(course attachment; not redistributed)*.

PC simulator support:

- [Explore the CompTIA lab interface](https://www.youtube.com/watch?v=aMy8I3IsqOs)
- [Set up a desktop computer lab](https://www.youtube.com/watch?v=IZ_vAaqq6YI)
- The simulator installer is a Windows executable. A Windows PC is the least-friction option. Discord also mentioned [CrossOver on Mac](https://www.youtube.com/watch?v=L852z0dWsCU) and [Heroic Games Launcher](https://heroicgameslauncher.com/), but compatibility was not confirmed; use course-approved methods and do not bypass licensing or institutional policy.
- If a simulated lab fails to record completion after the correct steps, refresh the page and re-check the score before repeating the whole lab.

## Videos and online tutorials

See the [complete grouped video catalog](../resources/videos.md) and [website/tool catalog](../resources/websites.md).

### Core 1 review

- [Professor Messer: How to pass A+ in 2026](https://www.youtube.com/watch?v=AIfIA7hEgrw&list=PLG49S3nxzAnnes8ZGI-OBlKEukHCX46N8)
- [CompTIA 1201 mobile-device hardware](https://www.youtube.com/watch?v=FdkzOEUnLRQ)
- [USB port colors](https://www.youtube.com/watch?v=r2sBNRWcvTY)
- [Brainscape Core 1 flashcards](https://www.brainscape.com/flashcards/comptia-a-core-1-20373519/packs/23377270)
- [Quizlet 220-1201/220-1202 flashcards](https://quizlet.com/1024593451/comptia-a-1200-series-220-1201-220-1202-flash-cards/)

### Networking

- [TCP vs. UDP](https://www.youtube.com/watch?v=uwoD5YsGACg)
- [Cable vs. DSL vs. fiber](https://www.youtube.com/watch?v=qQYiwmamq38)
- [Wi-Fi standards](https://www.youtube.com/watch?v=hhks5xSpM-0)
- [Network connectors](https://www.youtube.com/watch?v=ktTtAQIvYkg)
- [Network ports](https://www.youtube.com/watch?v=g2fT-g9PX9o)

### Optional skills and projects

- [Microsoft Learn](https://learn.microsoft.com/en-us/training/)
- [Cisco Networking Academy](https://www.netacad.com/)
- [Per Scholas Coursera program](https://www.coursera.org/programs/per-scholas-it-support-dqcop)
- [Google IT Support Professional Certificate](https://www.coursera.org/google-certificates/google-it-support)
- [Self-hosted applications/home lab](https://www.youtube.com/watch?v=DlzkIjhJ18o)
- [Build a home cloud](https://www.youtube.com/watch?v=PF-vAvmP4_0)
- [ThinkNAS 6-bay Tiny-PC home-lab project](https://www.reddit.com/r/homelab/comments/1n24p9m/thinknas_6bay_version_available/)
- [Every Illegal Operating System](https://www.youtube.com/watch?v=2D2Z-eqK0YM)
- [Dangerous hacking gadgets](https://www.youtube.com/watch?v=W4-D49TgHK4) — for awareness only; use security tools only on systems you own or have explicit authorization to test.

## Books and longer references

- Learning Modern Linux *(course attachment; not redistributed)*: kernel and userspace, shells, access control, filesystems, packages, containers, networking, and observability.
- Python Crash Course, 3rd edition *(course attachment; not redistributed)*: Python basics, functions/classes, files/errors/tests, a game, data visualization/APIs, and Django.
- Inside the Machine *(course attachment; not redistributed)*: CPU and computer architecture.
- AI Fairness *(course attachment; not redistributed)*: responsible AI and bias concepts.
- Early-Career Professional's Guide to Generative AI *(course attachment; not redistributed)*.
- The Spirit of a Cyborg *(publisher listing; no authorized free full edition located)*: AI ethics, human-technology convergence, digital spirituality, and moral responsibility.
- Dion Core 1 study guide *(course attachment; not redistributed)*: detailed third-party review; use the official objectives to decide what is in scope.

Suggested route through the books:

- Immediate Core 1 need: objectives → beginner guide → Dion sections matching weak domains.
- Data-center foundation: Linux chapters on shells, access control, storage, networking, packages, containers, and observability.
- Automation foundation: Python chapters 1–11, then one small support script and its tests.

## Images and diagrams

The image set is organized in the [attachment manifest](../resources/attachments.md); extracted text is in [image and diagram index](../resources/images.md).

High-value groups:

- `Wifi Connection Slides` thread: Wi-Fi generations, bands, channels, interference, cellular/fixed wireless, Bluetooth/RFID/NFC, throughput, and troubleshooting.
- `Fiber Cable Connections` thread: copper/fiber media, connectors, transceivers, polish, structured cabling, tools, PoE, and network devices.
- `#personal-projects`: three full-resolution cable-termination photos covering pair arrangement, T568B checking, crimping, and a reported successful cable test.
- `#class-notes`: common ports, TCP/IP and IPv6 diagrams, CPU sockets, the CPU cycle, and supplemental networking charts.
- `#comptia-help`: motherboard and PSU planning, boot process, storage/RAM/CPU, RAID 0/1/5/6/10, and lab screenshots.
- `#announcements`: important dates and alternating-schedule images.

Treat model-specific socket charts and community infographics as memory aids. Verify compatibility against motherboard, CPU, and vendor documentation before buying hardware.

## Course schedule and important dates

See the [public schedule snapshot](../resources/schedule.md).

The latest posted workbook is the alternating schedule with assignments *(course attachment; not redistributed)*, updated August 28, 2026.

### Weekly pattern

- Monday: in person.
- Tuesday: remote.
- Wednesday: in person during A weeks; remote during B weeks.
- Thursday: Professional Development in person while PD is active; after PD ends, it becomes an in-person technical day.
- Friday: remote.

### A/B weeks shown in the workbook

- A: Aug 16–22, Aug 30–Sep 5, Sep 13–19, Sep 27–Oct 3, Oct 11–17, Oct 25–31, Nov 8–14.
- B: Aug 23–29, Sep 6–12, Sep 20–26, Oct 4–10, Oct 18–24, Nov 1–7, Nov 15–21.

### Dates marked in the workbook

- Sep 7: Labor Day — no school.
- Sep 20: mid-course survey shown on the calendar.
- Oct 12: Indigenous Peoples' Day — no school.
- Nov 9: end-of-course survey shown on the calendar.
- Nov 11: Veterans Day — no school.
- Nov 20: graduation.

### Assignment snapshot

The workbook records early assignments including OSHA and NFPA certificates, the first resume and Individual Career Plan drafts, PC-building simulator work, motherboard/power/storage/RAM/BIOS labs, and troubleshooting labs. September 7 Discord notes also pointed learners to three private Canvas virtualization assignments. Canvas remains the live source of truth. The Discord announcements specifically noted that several deadlines changed after the first calendar version.

## Seven-day review plan

### Day 1 — Baseline

- Read the exam objectives and write down the five domain weights.
- Take one untimed Modules 1–4 quiz.
- Create a miss log with topic, wrong assumption, correct rule, and next review date.

### Day 2 — Hardware

- Label a motherboard from memory.
- Compare CPU sockets, DIMM/SODIMM, SATA/M.2/NVMe, and PSU connectors.
- Practice wattage planning and component-compatibility checks.

### Day 3 — Networking

- Memorize the port table and TCP vs. UDP.
- Practice private/APIPA addresses, masks, gateways, DHCP, DNS, and IPv6 link-local.
- Use the two subnet calculators to verify hand-worked examples.

### Day 4 — Cabling and wireless

- Identify RJ45/RJ11/RJ48/BNC, SC/LC/ST/MT-RJ, UPC vs. APC, and T568A/B.
- Compare 2.4/5/6 GHz and Wi-Fi 4/5/6/6E/7.
- Troubleshoot three scenarios: weak signal, intermittent drops, and no DHCP address.

### Day 5 — Storage, RAID, boot, and security

- Rebuild the RAID table without looking.
- Trace power-on through login.
- Drill symptoms: no power, no display, boot device missing, drive noise, artifacts, dim LCD, CMOS reset.

### Day 6 — PBQs and labs

- Complete the PBQ lab and one simulator walkthrough.
- Re-do only missed items and explain why each distractor is wrong.
- Review safe sequencing, documentation, and verification.

### Day 7 — Timed simulation and PD

- Take the timed/shuffled practice exam.
- Review the miss log by domain weight.
- Proofread your resume with a partner and turn one lab into a project bullet.

## Channel-by-channel source map

| Server area | What was useful |
|---|---|
| `#notes-resources` | Channel reserved for links/files; no posted resources at capture time. |
| `#announcements` | Schedule workbooks, important dates, assignment reminders, Coursera access notice, deadline changes, and the September Google apprenticeship announcement. |
| Course Help `#general` | Subnet/CIDR tools, cloud service-model diagrams, and Mac simulator workaround discussion. |
| `#comptia-help` | Guides, official objectives, quizzes/PBQs, hardware and RAID diagrams, lab support, and September 7 virtualization notes. |
| `#osha-help` | Final-review advice, certificate reminder, account-support discussion. Credentials were intentionally excluded. |
| `#pd-help` | Resume examples, rubric archive, peer review, career-planning prompt. |
| `#homework-help` | Simulator walkthroughs, screenshot tip, Mac compatibility discussion, current-vs.-previous exam guidance, and BIOS/disassembly lab clarification. |
| `#class-notes` | Wi-Fi and fiber threads, networking/ports/IP diagrams, CPU notes, tutorials. |
| `#it-news` | Industry-awareness reading, a Raspberry Pi/Docker case study, and an AI-ethics book recommendation. |
| `#content-recommendations` | Training platforms, optional Coursera/AI resources, professional learning. |
| `#career-talk` | Career and certification discussion, including time-sensitive apprenticeship opportunities. |
| `#personal-projects` | Home-lab and self-hosting ideas, the ThinkNAS project, and Ethernet cable-termination photos. |
| `#industry-videos` | Security/OS awareness videos. |
| `#books` | Linux, Python, computer architecture, AI fairness, and generative-AI books. |
| Study rooms | Duplicate official objectives, peer study coordination, live mock-exam sessions, and a virtualization screen-share session. |
| Social/Watercooler channels | Reviewed by server-wide file/link search; unrelated entertainment content excluded from instructional sections. |


## Accuracy notes

- Official objectives outrank peer-created guides, quizzes, screenshots, and videos for exam scope.
- Instructor/Canvas directions outrank the copied calendar for deadlines.
- Hardware compatibility changes by generation; verify exact vendor documentation.
- RAID is not backup; snapshots are not backup.
- Wireless and storage headline speeds are theoretical maxima.
- Community-created study aids may contain errors. Use the miss log to verify disputed answers against official objectives or trusted vendor documentation.


---

This is an unofficial community resource. It is not affiliated with or endorsed by Per Scholas or CompTIA. Verify exam scope with the current official CompTIA objectives and verify assignments in Canvas.
