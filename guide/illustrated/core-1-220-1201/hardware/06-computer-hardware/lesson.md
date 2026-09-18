# Computer Hardware — Text Companion

[Guide overview and illustrated PDF](README.md) · [All illustrated guides](../../../README.md)

Searchable companion to Network City, Issue 06, edition 1.0.0. The PDF contains the finished comic illustrations. Reviewed September 18, 2026.

## Meet the hardware team

🎨 **Visual:** Draw a neon computer city: gold CPU captain, green RAM workers, purple storage vault, and orange power station.

> Different parts. One working computer!

- **Hardware.** The physical parts of a computer. You can touch a keyboard, circuit board, drive, or screen. Software is the set of instructions those parts run.

- **Motherboard.** The main circuit board. It connects the processor, memory, storage, power, and add-on devices. Think of the city roads and building sites.

- **CPU - Central Processing Unit.** The instruction worker. It carries out calculations and directs many computer tasks. Our gold captain needs the rest of the team to get work done.

- **RAM - Random-Access Memory.** The temporary worktable for active programs and data. Normal system RAM loses its contents when power is removed.

- **Storage.** The file cabinet for saved data. An SSD or HDD keeps files after shutdown. Save a document to storage; do not rely on its temporary copy in RAM.

- **Input / output.** Input brings information in, such as a keyboard press. Output sends information out, such as a screen image or printed page. Some devices do both.

- **Driver / OS.** A driver helps an operating system, or OS, work with a device. The OS manages resources and provides services for apps.

> **Remember:** SCOPE: Core 1, 220-1201, hardware objectives 3.1-3.8. Safety and fault clues support the lessons. This is a broad study guide, not a promise that every exam detail fits in one book. [1]

## Safe hands before fast hands

🎨 **Visual:** Draw a careful robot at a grounded antistatic bench. The desktop is unplugged, and the robot holds a board by its edges.

> Power down. Protect the parts. Read the manual!

- **ESD - Electrostatic Discharge.** A sudden flow of static electricity. A spark too small to feel can damage a chip. Use the approved grounding method for the service task. [2]

- **Before opening.** Shut down, disconnect external power, and isolate the battery when the service manual requires it. Follow the model’s steps for draining residual system power.

- **Wrist strap / mat.** An antistatic strap and mat help keep you and the parts at the same electrical potential. Use approved grounding equipment; never improvise a connection to a live electrical contact.

- **Hold the edges.** Avoid touching chips, gold contacts, and socket pins. Keep parts in antistatic packaging until needed. Keep drinks away and track every screw.

- **Stored energy.** A power supply or old CRT, a cathode-ray tube display, can hold dangerous voltage. Do not open these assemblies during routine computer service. [3]

- **Hot and damaged parts.** Let heatsinks and printer fusers cool. Stop if you find burning smells, leaking parts, or a swollen battery. Do not puncture or crush a battery.

> **Remember:** THE SAFETY RULE BEATS THE SPEED RULE. Follow the device manual and workplace procedure. A wrist strap protects parts from static; it does not make live electrical work safe.

## Motherboards: the city map

🎨 **Visual:** Draw a green motherboard city with a CPU socket, parallel RAM slots, long expansion slots, and glowing copper roads.

> Match the board, the case, and the parts!

| Board family | Typical maximum size | What changes |
| --- | --- | --- |
| ATX | 305 × 244 mm | More room for slots and connectors |
| microATX | 244 × 244 mm | Smaller board; often fewer slots |
| Mini-ITX | 170 × 170 mm | Compact; limited expansion space |

- **Form factor.** The size, shape, and mounting layout. ATX means Advanced Technology Extended. ITX means Information Technology eXtended. Actual boards can be smaller than a family’s maximum. [4]

- **Chipset / bus.** A chipset helps manage platform connections. A bus is a path for data. Modern CPUs also contain controllers once found in separate motherboard chips.

- **Standoff.** A small spacer between the board and case. Install only the standoffs that match its mounting holes; an extra one can cause a short circuit. [5]

> **Remember:** SIZE IS NOT COMPATIBILITY. Also check the CPU support list, firmware version, RAM type, power plugs, slots, case clearance, and cooler mount.

## CPU: the instruction captain

🎨 **Visual:** Draw a gold processor captain with several worker stations and a tiny cyan cache shelf in a purple command center.

> Fetch an instruction. Decode it. Do the work!

- **Instruction.** One operation the processor knows how to perform. Fetch means get the instruction. Decode means work out its meaning. Execute means carry it out.

- **Core.** A processing engine inside a CPU. Multiple cores can work on different tasks when the software can share out the work.

- **Thread.** A stream of instructions. Some cores support multiple hardware threads. Two threads on one core are not the same as two complete physical cores.

- **Clock / GHz.** The clock sets a timing rhythm. GHz means gigahertz: billions of cycles per second. Higher GHz alone does not prove one CPU is faster than another.

- **Cache.** Small, fast memory near or inside the CPU. It keeps useful data close so the CPU does not always have to wait for slower memory. [6]

- **Architecture.** The CPU’s instruction-set family. In common PC study use, x86 often means 32-bit and x64 means the 64-bit x86 extension. Arm is a different family; its historical name is Advanced RISC Machine.

- **RISC.** Reduced Instruction Set Computer. It describes an approach to instruction-set design. Apps and operating systems must support the processor architecture or suitable translation.

> **Remember:** PERFORMANCE IS TEAMWORK. Core count, architecture, clock rate, cache, cooling, memory, and the workload all matter. Do not choose a processor from one number alone.

## CPU fit: check more than the socket

🎨 **Visual:** Draw a robot matching a gold CPU to a motherboard using a blank compatibility checklist. Socket pins stay untouched.

> Fits the hole? Now check the support list!

- **Socket.** The motherboard connector that holds the CPU. Match the exact supported processor family, not just the Intel or AMD brand. AMD means Advanced Micro Devices.

- **LGA - Land Grid Array.** The CPU has flat contact pads; spring contacts are in the socket. PGA, Pin Grid Array, places pins on the processor package. Both need careful alignment.

- **BGA - Ball Grid Array.** A chip package soldered to the board. Common in compact systems. It is not a routine socket upgrade.

- **Firmware support.** The board may need a compatible BIOS/UEFI version before a particular CPU will start. A shared socket does not guarantee support. Check the manufacturer’s CPU list. [7]

- **Power and cooling.** Check board support, cooler capacity, mounting hardware, and space around the socket. TDP means Thermal Design Power; it is a cooling design figure, not always maximum electrical draw.

- **Multisocket.** A board with more than one CPU socket. It needs processors and a platform designed for that configuration. More cores in one CPU do not mean more sockets.

- **Install.** Use the model’s alignment marks, retention method, and torque instructions. Never force a CPU into place. Support and protect the board while fitting the cooler.

> **Remember:** COMPATIBILITY CHECK: socket + chipset/platform + CPU support list + firmware + power + cooler. A pin-count match is only one clue.

## Cooling: move the heat away

🎨 **Visual:** Draw copper cooling fins, a blue fan, and a sealed liquid loop carrying orange warmth to a radiator.

> Move heat from the chip into the room!

- **Heat sink.** A metal part that takes heat from a chip. Fins provide more surface area so air can carry the heat away.

- **Fan / airflow.** A fan moves air across hot parts. Intake brings cooler air in; exhaust pushes warmer air out. Check airflow arrows and the case plan instead of guessing.

- **Thermal paste.** A thin interface material that fills tiny gaps between the chip and cooler. It improves heat transfer; it is not glue. Use the cooler maker’s amount and method. [8]

- **Thermal pad.** A shaped heat-transfer material. Thickness matters. Do not swap a pad for paste unless the manufacturer allows it.

- **Liquid cooling.** A pump moves coolant between a cold plate and a radiator. The radiator still needs airflow. An AIO, or All-in-One cooler, arrives as a preassembled loop.

- **Throttling.** The processor slows down to manage heat or power limits. This can make a machine seem weak even when its CPU is powerful.

- **Maintain.** Keep vents clear, remove dust safely, and check fan/pump connections. Monitor temperatures using the model’s limits; there is no one safe temperature for every CPU.

> **Remember:** EXAM CLUE: Shutdowns under load, loud fans, and high temperatures suggest checking cooling. Never run a CPU without its required cooler just to see what happens.

## RAM: the temporary worktable

🎨 **Visual:** Draw green memory-stick workers sorting active task cards on a bright desk. A purple storage cabinet holds saved files.

> More workspace can help a crowded task!

- **RAM - Random-Access Memory.** Working memory for active data and programs. Random access means the system can reach a location directly; it does not mean the data is random.

- **Volatile.** Needs power to retain contents. Ordinary system RAM is volatile; SSD and HDD storage are nonvolatile. Save work to storage before shutdown.

- **Capacity.** How much data fits. GB means gigabytes. More RAM helps when the current amount is too small, but unused extra RAM does not automatically speed up every task.

- **DDR - Double Data Rate.** A memory design that transfers data on both edges of a clock cycle. DDR3, DDR4, and DDR5 are different generations, not interchangeable upgrades. [9]

- **MT/s - Megatransfers per second.** Millions of transfers each second. DDR4-3200 names 3200 MT/s; its underlying clock is 1600 MHz. MHz means millions of cycles per second.

- **Channel.** A memory data path between the controller and RAM. Dual-channel operation uses two channels and can increase available memory bandwidth. Follow the slot-population guide.

- **Paging.** The OS can move some memory contents to storage when managing memory. Storage is much slower than RAM for this job; heavy paging can slow a busy system.

> **Remember:** MEMORY HOOK: RAM = open worktable. SSD/HDD = saved-file cabinet. A larger cabinet does not automatically make the worktable larger.

## RAM fit, errors & installation

🎨 **Visual:** Draw a long green desktop memory module and a short laptop module beside matching slots. Gold contacts stay clean.

> Match the generation before clicking me in!

- **DIMM.** Dual In-line Memory Module: the familiar desktop/server memory module. SO-DIMM means Small Outline DIMM; it is shorter and common in laptops and small computers.

| Generation | Desktop DIMM pins | SO-DIMM pins |
| --- | --- | --- |
| DDR3 | 240 | 204 |
| DDR4 | 288 | 260 |
| DDR5 | 288 | 262 |

- **Pin count trap.** DDR4 and DDR5 desktop DIMMs both have 288 pins, but their electrical design and key notch differ. Never force one into the other generation’s slot. [9]

- **ECC - Error-Correcting Code.** Supported ECC memory can detect and correct certain memory errors. The CPU, board, and module must support the right ECC type. Registered and unbuffered memory are not freely interchangeable.

- **DDR5 on-die ECC.** Corrects certain errors inside the memory chip. It does not, by itself, provide the same system-level protection as a platform using ECC DIMMs. [10]

> **Remember:** INSTALL: Remove power, use ESD protection, align the notch, and seat the module as instructed. Match supported capacity, generation, module type, and slots; then verify detected memory.

## HDD & SSD: two file keepers

🎨 **Visual:** Draw a silver HDD with spinning platters beside a purple SSD vault full of flash chips in a neon archive.

> We keep saved files after the power stops!

- **HDD - Hard Disk Drive.** Stores data magnetically on spinning platters. A moving head reads and writes. Mechanical movement adds delay and makes shocks risky during operation.

- **RPM - Revolutions Per Minute.** How many turns the platters make each minute. Common desktop examples include 5400 and 7200 RPM. RPM alone does not describe overall drive speed.

- **Drive sizes.** 3.5-inch HDDs are common in desktops; 2.5-inch drives fit many portable or compact systems. Those names describe drive form-factor families, not storage capacity.

- **SSD - Solid-State Drive.** Stores data in flash memory with no spinning platter or moving head. It usually responds to small random requests much faster than an HDD.

- **Capacity versus performance.** TB means terabytes. A 2 TB drive holds more data than a 1 TB drive, but capacity does not directly tell you latency or transfer speed.

- **Latency / IOPS.** Latency is how long a request waits. IOPS means Input/Output Operations Per Second: how many read/write operations a device completes under stated conditions.

- **Use cases.** An SSD works well for responsive startup and apps. HDDs can offer economical bulk storage. Compare endurance, interface, capacity, and workload, not just the box label. [11]

> **Remember:** NO MOVING PARTS DOES NOT MEAN NO FAILURE. Back up important files from both HDDs and SSDs. A fast new drive is still only one copy.

## Storage: shape, path & protocol

🎨 **Visual:** Draw a slim M.2 board and a boxed SATA drive choosing matching sockets on a purple motherboard road map.

> My shape does not tell you my whole story!

- **SATA.** Serial Advanced Technology Attachment. A storage interface used by many HDDs and SSDs. SATA 6 Gb/s is a link rate; real file transfers are lower.

- **NVMe.** Non-Volatile Memory Express. A storage command protocol designed for fast nonvolatile memory. Local NVMe SSDs commonly use PCIe connections.

- **PCIe.** Peripheral Component Interconnect Express. A fast serial connection arranged in lanes. Generation and lane count both affect available bandwidth.

- **M.2.** A compact module/socket form factor. M.2 SSDs may use SATA or PCIe/NVMe. The slot must support the drive’s interface, keying, length, and boot requirements. [12]

- **2280.** An M.2 size: 22 mm wide and 80 mm long. It is not a speed rating. mSATA, mini-SATA, is an older small SATA form factor; it is not the same connector as M.2.

- **SAS.** Serial Attached SCSI. SCSI means Small Computer System Interface. SAS is common in enterprise storage. A normal SATA controller cannot operate a SAS drive.

- **Bandwidth units.** Gb/s means gigabits per second; GB/s means gigabytes per second. Eight bits equal one byte. Allow for protocol overhead before comparing a link rate with file-transfer speed.

> **Remember:** EXAM TRAP: M.2 = form factor; NVMe = protocol; PCIe = connection path. A drive can fit physically and still be unsupported electrically.

## Removable & optical storage

🎨 **Visual:** Draw pocket flash couriers, a memory card, and a shiny optical disc beside the purple archive vault.

> Portable files still need protection!

- **USB flash drive.** A small removable device using flash memory. USB means Universal Serial Bus. Its connector shape does not guarantee a particular data rate.

- **Memory card.** A removable flash format used in cameras and other devices. SD means Secure Digital; microSD is a smaller physical card format.

- **Reader compatibility.** Check both the card family and supported capacity standard. A physical adapter changes the fit; it cannot give an old reader unsupported capabilities.

- **Optical drive.** Uses a laser to read or write a disc. CD means Compact Disc. DVD means Digital Versatile Disc. Blu-ray is a name for another optical-disc technology.

- **R / RW.** R commonly means recordable: write once. RW means rewritable: erase and write again using a compatible format and drive. Blu-ray uses BD-R and BD-RE naming.

- **Typical capacities.** A common CD holds about 700 MB; a single-layer DVD, 4.7 GB; a single-layer Blu-ray Disc, 25 GB. Layers and formats change capacity. MB means megabytes. [13]

- **Use cases.** Move files, install approved software, or access older media. Follow the OS eject process before disconnecting removable storage when required; active writes must finish.

> **Remember:** A BACKUP MUST BE A SEPARATE RECOVERABLE COPY. A flash drive can fail or disappear. Test restores and protect sensitive data on portable media.

## RAID: the drive teamwork chart

🎨 **Visual:** Draw purple drive vaults sharing striped and mirrored folders. A separate gold box protects an independent backup.

> Teamwork helps availability. Keep a backup too!

| RAID | Typical minimum* | Usable capacity** | Drive failures tolerated |
| --- | --- | --- | --- |
| 0: striping | 2 | N × S | None |
| 1: mirroring | 2 | S (two-drive mirror) | 1 in a two-drive mirror |
| 5: single parity | 3 | (N - 1) × S | 1 |
| 6: double parity | 4 | (N - 2) × S | 2 |
| 10: striped mirrors | 4 | (N / 2) × S | 1 per mirror pair |

- **RAID.** Redundant Array of Independent Disks. Striping spreads data across drives. Mirroring keeps copies. Parity stores calculated recovery information. [14]

**N = number of drives; S = smallest drive capacity. These examples assume equal-size drives and ignore formatting/metadata. RAID 10 uses pairs; two failures in the same pair can destroy the array.

*Learn two drives for useful RAID 0 striping. Some controllers allow a one-disk RAID 0 virtual disk; that provides no striping benefit across drives.

> **Remember:** RAID IS NOT BACKUP. It does not undo deletion, ransomware, or a building disaster. Replace the correct failed drive and follow the controller’s rebuild procedure.

## PSU: the power translator

🎨 **Visual:** Draw an enclosed orange power station converting wavy wall power into steady blue paths for the computer team.

> Enough output, the right plugs, and room to grow!

- **PSU - Power Supply Unit.** Converts wall AC, alternating current, into regulated DC, direct current, used by computer parts. Keep the PSU enclosure closed. [3]

- **Input voltage.** Common mains ranges are 110-120 VAC and 220-240 VAC. VAC means volts AC. Many modern units automatically accept a wide range; verify the label. Set any manual selector correctly before connecting power.

- **Output rails.** Common PC outputs include +3.3 V, +5 V, and +12 V DC. A rail is a power output at a specified voltage. V means volts; W means watts.

- **Wattage rating.** The PSU’s supported output power under stated conditions. Add component needs, allow for load spikes and future upgrades, and check available connectors and rail limits.

- **Efficiency.** Useful output divided by power taken from the wall. If the PC needs 400 W and efficiency is 80%, wall input is about 500 W. About 100 W becomes heat. [15]

- **80 PLUS.** An efficiency certification with defined test conditions. The rating does not mean a 600 W PSU can supply only 480 W, and it does not promise the whole computer draws 600 W.

> **Remember:** EXAM CLUE: Choose the right form factor, input range, output capacity, connectors, and quality. A bigger watt number cannot fix an incompatible cable.

## Power plugs: never mix by looks

🎨 **Visual:** Draw orange power cables waiting at matching CPU, board, drive, and graphics-card gates. The station’s case stays shut.

> Similar plugs can carry different wiring!

- **20+4-pin main power.** A motherboard power plug that can form a 24-pin connector. Use the exact connection required by the board; some vendor systems use proprietary power arrangements.

- **CPU power.** A separate 4-pin or 8-pin connector near the CPU socket; an 8-pin cable is often split 4+4. EPS12V is the common CPU power-connector standard name.

- **Graphics power.** Some cards need PCIe 6-pin or 6+2-pin power. Newer cards may use a 16-pin connector such as 12V-2x6. Follow the exact card and PSU instructions, including full insertion and bend clearance.

- **SATA / Molex power.** SATA power commonly has 15 contacts. A legacy 4-pin peripheral plug is often called Molex. Molex is a manufacturer name used informally for that connector family.

- **Modular.** Some or all cables detach at the PSU. This helps cable management. The PSU-side wiring is not universal, even when plugs fit. Use only cables explicitly compatible with that model. [16]

- **Redundant.** Multiple power supplies help keep a supported system running after one unit fails. This requires the right chassis and power design; it is not simply adding an extra loose PSU.

> **Remember:** NEVER SWAP CPU 4+4 AND GPU 6+2 CABLES. Do not reuse modular cables just because the connectors look alike. Wrong wiring can destroy parts.

## Expansion cards: add a new skill

🎨 **Visual:** Draw a cyan graphics-card artist, a sound-card musician, and a network messenger beside purple expansion slots.

> Pick the card, the lane path, and the driver!

- **Expansion card.** A circuit board that adds a function. The motherboard slot, physical room, power, firmware, and OS driver all must support it.

- **PCI / PCIe.** PCI means Peripheral Component Interconnect, an older expansion bus. PCI Express is newer and uses serial lanes. Their slots are not interchangeable.

- **x1, x4, x8, x16.** PCIe lane counts. A long physical slot may have fewer electrically connected lanes. Check the motherboard manual and shared-lane rules.

- **GPU - Graphics Processing Unit.** A processor well suited to graphics and many parallel calculations. A discrete GPU is separate hardware; an integrated GPU is part of another chip package.

- **Video card / VRAM.** A graphics card includes a GPU and supporting parts. VRAM means Video RAM: memory for graphics data. Dedicated VRAM differs from system RAM shared with integrated graphics.

- **Other cards.** A sound card handles audio. A NIC, Network Interface Card, connects a network. A capture card accepts a video source for recording or streaming.

- **Use case.** Choose a card to solve a stated need, such as more network ports or video capture. Install it safely, connect required power, load the correct driver, and test its function.

> **Remember:** OUTPUT CLUE: With a discrete graphics card, connect the monitor to the intended graphics output. Motherboard video ports may not work if the CPU lacks integrated graphics.

## Firmware: the startup gatekeeper

🎨 **Visual:** Draw a purple firmware chip checking the computer team before opening a gate for the operating-system robot.

> Check the hardware. Find the boot program!

- **Firmware.** Low-level software stored in a device. It helps initialize and control hardware before and during normal use.

- **BIOS.** Basic Input/Output System, the traditional PC firmware system. People also say “BIOS setup” when they mean a modern firmware settings screen.

- **UEFI.** Unified Extensible Firmware Interface. A modern firmware interface with features such as richer boot management and Secure Boot support. [17]

- **POST.** Power-On Self-Test. Startup checks that help detect certain hardware problems. Beeps, lights, or codes must be read using the exact model’s documentation.

- **Boot order.** The preferred sequence of startup entries. Choose the intended OS boot manager or approved installation media. Detecting a drive is not the same as finding a working bootloader.

- **Settings.** Firmware may control USB permissions, fan curves, temperatures, and processor virtualization features. Record current settings before changing them.

- **Update safely.** Use firmware for the exact model/revision and the vendor’s update method. Keep power stable. Check encryption recovery requirements first; do not interrupt a flash update.

> **Remember:** A DEAD CLOCK BATTERY IS NOT A DELETED OS. Lost time/settings can suggest a weak coin cell. Modern firmware itself is stored in nonvolatile flash, not kept alive by that battery.

## Startup security & virtual machines

🎨 **Visual:** Draw the purple startup gate with a gold identity shield and a protected key vault beside the operating-system traveler.

> Check trusted startup. Protect the keys!

- **Secure Boot.** UEFI checks digital signatures of boot software against trusted or blocked entries. It helps stop unauthorized startup code. It does not encrypt all files. [17]

- **TPM.** Trusted Platform Module. Provides protected cryptographic operations and key handling. It can support device identity, measured startup, and disk-encryption protection. It may be discrete or integrated. [18]

- **Encryption.** Transforms readable data into protected form using keys. A TPM can help protect keys, but it is not the same thing as the full-disk encryption software.

- **HSM.** Hardware Security Module. A specialized device for protecting and using cryptographic keys, often in business systems. It is not another name for every TPM.

- **Firmware versus boot password.** A setup password restricts firmware changes. A boot/power-on password restricts starting the system. Neither replaces OS account security or drive encryption.

- **Virtualization support.** Lets a hypervisor, the software managing virtual machines, use hardware assistance. Intel VT-x and AMD-V are familiar feature names. Enable only the supported setting needed for the task.

- **VM - Virtual Machine.** A software-defined computer running on a host. CPU support helps, but enough RAM and storage are also needed.

> **Remember:** RECOVERY FIRST: Know your recovery keys and approved procedure before changing TPM or firmware settings. Clearing a TPM can affect access to protected data.

## Displays: where the light comes from

🎨 **Visual:** Draw a backlit blue LCD beside an OLED whose colored pixels glow on their own in a purple art studio.

> Backlight or glowing pixels? Know the difference!

- **LCD.** Liquid Crystal Display. Liquid crystals control how much backlight passes through. An “LED monitor” often means an LCD with an LED backlight.

- **LED.** Light-Emitting Diode. A small light source. Mini-LED uses many small LEDs for the backlight; it is not the same as self-emitting OLED pixels.

- **IPS.** In-Plane Switching, an LCD panel family often chosen for wide viewing angles and color consistency.

- **TN.** Twisted Nematic, another LCD family, often associated with fast response and narrower viewing angles. Actual performance depends on the model.

- **VA.** Vertical Alignment, an LCD family often associated with strong contrast. Contrast describes the difference between bright and dark areas. [19]

- **OLED.** Organic Light-Emitting Diode. Its pixels create their own light and can turn off for deep black. Repeated static images can cause uneven wear or burn-in.

- **Digitizer / inverter.** A digitizer senses touch or pen input. An inverter powered the fluorescent backlights in some older LCDs; modern LED backlights use different driver electronics.

> **Remember:** EXAM TRAP: MINI-LED IS A BACKLIGHT TECHNOLOGY. IPS, TN, and VA describe LCD panel operation. OLED makes light at the pixel level. [20]

## Pixels, refresh & color

🎨 **Visual:** Draw a gold magnifying glass over square pixels while a cyan monitor shows a smooth moving scene and a color rainbow.

> Sharper, smoother, and more colorful are different!

- **Pixel.** One small picture element. Resolution counts the pixel grid: 1920 × 1080 means 1920 across and 1080 down.

- **Native resolution.** The physical pixel grid of a fixed-pixel display. Other resolutions may need scaling, which can soften text or change image size.

- **Pixel density / PPI.** Pixels Per Inch describes how tightly pixels fit. Two screens with the same resolution can have different density if their sizes differ.

- **Refresh rate / Hz.** Hertz means cycles per second. A 144 Hz display can refresh up to 144 times each second in that mode. It does not force the computer to render 144 unique frames.

- **FPS / response time.** Frames Per Second measures rendered images. Pixel response time measures how quickly a pixel changes, often in milliseconds. Refresh rate, FPS, and response time are different measurements.

- **Color gamut.** The range of colors a display can reproduce. sRGB is a standard red-green-blue color space. Wide gamut alone does not guarantee accurate color; calibration also matters.

- **Choose the whole path.** The GPU, connector, cable, adapter, display, and settings must all support the requested resolution and refresh rate. Check model specifications. [21]

> **Remember:** SCENARIO: A high-refresh screen stuck at 60 Hz may have a settings, cable, adapter, or output limit. Do not assume the display is broken.

## USB: the shape is not the speed

🎨 **Visual:** Draw cyan USB-C and blue USB-A helpers guiding a keyboard, phone, camera, and flash drive into a neon hub.

> Read the connector AND the data-rate label!

| Specification naming | Maximum signaling rate | Memory hook |
| --- | --- | --- |
| USB 2.0 High-Speed | 480 Mb/s | The city bus |
| USB 3.0 / 3.2 Gen 1 | 5 Gb/s | The express train |
| USB 3.2 Gen 2 | 10 Gb/s | Two times the 5 Gb/s rate |
| USB 3.2 Gen 2×2 | 20 Gb/s | Two high-speed lanes |

- **USB - Universal Serial Bus.** Connects peripherals and can provide power. These are maximum link rates, not guaranteed file-copy speeds. All parts of the path must support the mode. [22]

- **Connector shapes.** Type-A is the familiar rectangle; Type-B is common on older printers; Mini/Micro are smaller legacy families. USB-C is reversible and oval. Its shape alone proves neither speed nor video support.

- **Power / distance.** USB Power Delivery can negotiate supported power. Check device, charger, and cable ratings. Classic USB 2.0 High-Speed passive segments are commonly limited to 5 m; faster modes have cable-specific limits.

> **Remember:** EXTRA CONTEXT: USB4 and Thunderbolt can add higher rates and other capabilities. A USB-C cable can still be limited to USB 2.0 data. Never guess from color alone.

## Video cables & Thunderbolt

🎨 **Visual:** Draw HDMI, DisplayPort, VGA, and USB-C characters checking matching screen sockets in a purple cable workshop.

> A matching shape still needs the right signal!

- **HDMI.** High-Definition Multimedia Interface. Carries digital video and audio. Supported resolutions, refresh rates, and features depend on the whole connection, not simply the HDMI name. [23]

- **DisplayPort.** A digital display interface that can carry video and audio. Some USB-C ports support DisplayPort Alternate Mode; others do not. Alternate Mode uses the connector for another supported signal.

- **DVI.** Digital Visual Interface. DVI-D is digital, DVI-A is analog, and DVI-I integrates both signal types. Single-link and dual-link variants have different capabilities.

- **VGA.** Video Graphics Array. An older analog video connection commonly using a 15-pin connector. Analog-to-digital conversion usually needs an active adapter.

- **Thunderbolt.** A connection technology for data, displays, and peripherals. Versions 3 and 4 use USB-C and support up to 40 Gb/s. Original Thunderbolt 1/2 used the Mini DisplayPort connector shape. [24]

- **Version context.** Thunderbolt 5 supports 80 Gb/s bidirectional operation and can allocate up to 120 Gb/s in one direction for heavy display use. That is extra context, not a promise for every USB-C port.

> **Remember:** ADAPTER CHECK: Confirm direction, signal conversion, power, resolution, refresh rate, and cable length. A passive shape adapter cannot invent an unsupported signal.

## Internal cables & older connectors

🎨 **Visual:** Draw neat SATA and legacy connectors choosing matching gates. Gold screw trays and purple socket outlines keep the workbench organized.

> Data, power, and control use different paths!

- **SATA data / power.** A typical SATA data connector has 7 contacts; SATA power has 15. A cabled SATA drive normally needs both. Internal SATA data cable length is commonly limited to 1 m. [25]

- **eSATA.** External SATA. Uses an external connector and cable system, commonly up to 2 m. Ordinary eSATA does not supply drive power; some powered variants do.

- **Headers.** Groups of motherboard pins or sockets for case switches, lights, USB, audio, or fans. Use the exact pinout: which signal belongs at each position.

- **Front panel.** The case power/reset switches and indicator lights connect to specified headers. LED polarity matters. A similar-looking header may carry a different voltage or function.

- **Serial / DB9.** A legacy serial port commonly uses a 9-pin D-sub connector, technically DE-9 but often called DB9. It can connect older instruments or console equipment. Match the electrical standard and settings.

- **Lightning.** Apple’s proprietary reversible connector used on many older Apple mobile devices. It is a connector name, not a synonym for USB-C or Thunderbolt.

- **Molex reminder.** The common legacy 4-pin peripheral power plug differs from SATA data and power. Use approved adapters only when the equipment and electrical ratings allow them.

> **Remember:** DO NOT FORCE A CONNECTOR. Keying helps alignment but is not a full wiring guarantee. Power off before making internal connections unless the system explicitly supports that hot-swap operation.

## Network cables: the hardware recap

🎨 **Visual:** Draw a clear RJ45 courier, a threaded coax helper, and a glowing fiber messenger beside bright neatly bundled cables.

> Choose the cable for the signal and the place!

- **Twisted pair.** Pairs of copper wires twist to help reduce interference. UTP means Unshielded Twisted Pair; STP means Shielded Twisted Pair. Cat means category, a performance classification.

- **Common reach.** A standard copper Ethernet channel is often 100 m total, typically 90 m permanent cable plus patch cords. Cat 5e commonly supports 1 Gb/s at 100 m; Cat 6A supports 10 Gb/s at 100 m. [26]

- **RJ45 / RJ11.** RJ means Registered Jack. Ethernet’s 8-position modular plug is commonly called RJ45. RJ11-style connectors are smaller and commonly used for telephone service.

- **T568A / T568B.** Two recognized wire-pair arrangements for terminating twisted-pair cabling. Use the correct scheme consistently for the intended cable and verify it with a tester.

- **Coax / F-type.** Coaxial cable has a center conductor, insulation, and surrounding shield. A threaded F-type connector is common for cable internet and television.

- **Fiber / connector names.** Single-mode fiber carries one light mode; multimode carries several. Common connectors include ST, Straight Tip; SC, Subscriber Connector; and LC, Lucent Connector. Reach depends on the optics and fiber.

> **Remember:** INSTALLATION RATINGS MATTER: Plenum cable meets specified fire/smoke requirements for air-handling spaces. Direct-burial cable handles underground conditions. Neither label alone tells you data speed. Never look into active fiber.

## Build mission: choose, fit, test

🎨 **Visual:** Draw a robot assembling a planned desktop from compatible parts. A gold checklist tracks fit, power, cooling, and testing.

> Start with the user’s job, then choose the parts!

- **1. Define the work.** Office tasks, editing, games, and virtual machines need different resources. Set capacity, performance, ports, space, and budget targets before choosing hardware.

- **2. Check the platform.** Confirm case and board form factors, CPU support, firmware, RAM generation/capacity, and storage interfaces. Read the manual for lane-sharing limits.

- **3. Check physical fit.** Measure GPU length/thickness, cooler height, radiator space, drive bays, and cable clearance. A case label alone does not guarantee every large part fits.

- **4. Plan power and cooling.** Match the PSU size, wattage, connectors, and cable compatibility. Route cables away from fans and avoid blocking airflow.

- **5. Install safely.** Back up any existing data, disconnect power, use ESD precautions, and follow component instructions. Account for screws and connect required board/CPU/GPU power.

- **6. Verify startup.** Check firmware detection of the CPU, RAM, drives, and fans. Confirm reasonable temperatures and the intended boot entry before loading the OS.

- **7. Test the actual job.** Install supported drivers and updates. Check memory, storage, display modes, network access, and a realistic workload. Document the finished configuration.

> **Remember:** UPGRADE CLUE: A nearly full drive calls for storage work; heavy paging may call for more RAM. Diagnose the bottleneck before buying a faster CPU.

## Printers: setup and first connection

🎨 **Visual:** Draw a purple multifunction printer being installed on a sturdy desk beside a cyan computer. Packing tabs sit in a nearby tray.

> Place me well. Connect me. Choose my driver!

- **MFD / MFP.** Multifunction Device / Multifunction Printer. Combines tasks such as printing, scanning, and copying. Some models also fax.

- **Unbox and place.** Follow lifting instructions, remove shipping restraints, and allow ventilation and service clearance. Check electrical needs and keep the device within rated temperature/humidity limits.

- **Connectivity.** USB can connect one nearby host. Ethernet or Wi-Fi can put the device on a network. Use approved network settings and verify the assigned IP address.

- **Driver.** Software that helps the OS send supported jobs. Choose the model, operating system, and required features; a driver that prints basic text may not expose every tray or finishing option.

- **PCL / PostScript.** PCL is Printer Command Language, also called Printer Control Language in some study lists. PostScript is another page-description language. Match the language supported by the printer and application needs. [27]

- **Firmware / first test.** Use approved firmware updates for the exact model. Print a device configuration page, then an OS test page. That helps separate printer operation from connection/driver issues.

> **Remember:** EXAM CLUE: A network-connected printer does not automatically have the right driver, address, permissions, or paper settings. Check each part of the print path.

## Print settings, scanning & security

🎨 **Visual:** Draw a gold page waiting inside the purple printer until a worker taps a badge. The feeder and flatbed scan different documents.

> Right paper. Right person. Right destination!

- **Duplex / orientation.** Duplex prints on both sides; simplex prints on one. Portrait is tall page orientation; landscape is wide. Match the job’s page size and layout.

- **Tray / quality.** Select the correct paper size and type. DPI means Dots Per Inch, a print-resolution measure. Higher quality can take longer and use more supplies.

- **Queue / spooler.** A print queue lists waiting jobs. A spooler manages stored print jobs for delivery. A print server can share printers and centralize management.

- **Secure print.** A job waits for a PIN, personal identification number, badge, or other authentication at the printer. Authentication checks the user; permissions control allowed actions.

- **Audit log.** A record of events such as who released a job. It can help an organization track use and investigate problems.

- **ADF / flatbed.** An Automatic Document Feeder moves a stack through a scanner. A flatbed holds the original on glass, useful for books or fragile material. Not every ADF scans both sides automatically.

- **Scan destinations.** Email, approved cloud services, or an SMB share can receive scans. SMB means Server Message Block. Verify the destination, account permissions, and network configuration. [28]

> **Remember:** USE CASE: For private documents on a shared printer, use supported held-job release. Do not leave sensitive pages sitting in an open output tray.

## Laser printing: the seven-step factory

🎨 **Visual:** Draw a neon laser-printer factory with a green drum, purple toner, traveling paper, and orange fuser rollers.

> Draw with charge. Add toner. Bond it to paper!

- **1. Processing.** The printer turns the job into a page image it can print. Think of preparing the factory’s work plan.

- **2. Charging.** A charge roller or other charging part gives the photosensitive drum a uniform electrical charge.

- **3. Exposing.** The laser changes charge on selected drum areas, creating an invisible image pattern.

- **4. Developing.** Toner, a fine printing powder, is attracted to the intended image areas. Toner is not liquid ink.

- **5. Transferring.** The toner image moves to the paper, directly or through a transfer system, depending on printer design.

- **6. Fusing.** Heat and pressure bond toner to the page. The fuser is hot; it is not the same part as the imaging drum. [29]

- **7. Cleaning.** Leftover toner is removed from the drum so it can be prepared for another image. Several stages occur continuously as the parts rotate.

> **Remember:** MEMORY CHAIN: Process → Charge → Expose → Develop → Transfer → Fuse → Clean. Toner that rubs off can suggest a fusing or paper-setting problem; diagnose before replacing parts.

## Inkjet, thermal & impact teams

🎨 **Visual:** Draw three stations: tiny colorful ink droplets, a thermal receipt roll, and pins striking a ribbon onto layered paper.

> Different print jobs need different methods!

- **Inkjet.** A printhead places tiny liquid-ink droplets on paper. Cartridges or tanks supply ink. Use cases include color documents and photos on suitable media.

- **Nozzles / alignment.** Nozzles are tiny ink openings. Clogged nozzles can leave missing lines. Alignment helps droplets land where they belong.

- **Direct thermal.** A heated printhead darkens specially coated paper. Common for receipts. It needs the correct thermal side facing the head and does not use a normal ink cartridge. [30]

- **Thermal transfer.** A related technology melts material from a ribbon onto media. Do not assume every printer called thermal uses no ribbon.

- **Impact / dot matrix.** Pins strike an inked ribbon against paper to form dots. Physical impact can make copies through multipart paper. It is useful for forms that need duplicate layers.

- **Multipart paper.** Stacked sheets designed to copy the impact onto lower layers. An ordinary inkjet or laser printer cannot make those copies by striking the stack.

- **Consumables.** Supplies used up during printing: ink, toner, ribbons, or media. Match the device and job; similar-looking cartridges or paper can be incompatible.

> **Remember:** MATCH THE CLUE: Photos → often inkjet. Receipts on coated paper → direct thermal. Multipart forms → impact. High-volume crisp office pages → often laser.

## Printer maintenance: clean with care

🎨 **Visual:** Draw the printer crews beside correct replacement supplies and a tidy cleaning kit. Hot heads cool before service.

> Follow my service steps, then print a test!

- **Laser.** Replace toner and scheduled maintenance-kit parts as directed. Kits may include rollers or a fuser. Use the printer’s cleaning and calibration routines. [31]

- **Toner safety.** Avoid spreading fine powder. Use the manufacturer’s spill procedure and only equipment rated for toner; do not use an ordinary household vacuum. Let hot parts cool before handling.

- **Inkjet.** Run a nozzle check first. Use the approved head-cleaning routine only as needed; repeated cleaning consumes ink. Replace the correct cartridge/tank supply and align when required. [32]

- **Thermal.** Remove power and let the head cool. Clean the heating element with the manufacturer-approved materials. Load the correct paper and remove debris from the feed path. [30]

- **Impact.** Replace the ribbon, paper, and printhead according to the manual. Set the correct paper path and head gap for the forms. Never work around moving parts.

- **Jams and rollers.** Use the designated access doors and pull paper as directed. Remove scraps without scratching delicate surfaces. Repeated jams may involve wrong media, worn rollers, or a feed problem.

- **Calibrate / verify.** Calibration adjusts output toward a known target. After maintenance, test the affected function and record what was changed.

> **Remember:** NO UNIVERSAL CLEANER: The safe liquid, swab, cloth, or vacuum depends on the component. Keep fingerprints off imaging surfaces and follow the exact model’s instructions.

## Fault clues: diagnose before replacing

🎨 **Visual:** Draw a robot detective using a gold checklist beside an open computer. A cool blue fan and purple drive wait for tests.

> A symptom is a clue, not a guilty verdict!

- **No power.** Start with the outlet, cable, switch, and connections. Check main and CPU power plugs. A fan that twitches is not proof that every PSU output is healthy.

- **No display.** Check the monitor’s power/input, cable, intended graphics output, and POST indicators. A black screen does not always mean a failed GPU.

- **POST code / memory fault.** Use the model’s code guide. With power removed, check supported RAM and seating. Change one thing at a time so the result means something.

- **Overheating / shutdown.** Check vents, dust, fan/pump operation, cooler contact, and temperature readings. Stop using a system that smells burned or shows electrical damage.

- **Drive warning.** S.M.A.R.T. means Self-Monitoring, Analysis and Reporting Technology. A warning deserves attention, but passing health data is not a guarantee. Protect important data before stressful tests.

- **Boot device missing.** Check detection, connections, firmware settings, and the boot entry. Do not format a drive merely because the OS does not start.

- **Print failure.** Check the device’s own test page, media, queue, driver, and connection. Separate a job problem from a feed or marking problem.

> **Remember:** WORKFLOW: Identify → form a theory → test → fix safely → verify → document. It is a useful support practice; the official objectives distinguish it from a separately tested methodology topic. [1]

## Quick recall: words and units

🎨 **Visual:** Draw the neon hardware team lining up with a gold checklist: processing, workspace, storage, power, and output.

> Say what it means, then say what it does!

| Clue | Term | Meaning / distinction |
| --- | --- | --- |
| Runs instructions | CPU | Central Processing Unit |
| Temporary work area | RAM | Random-Access Memory |
| Saved magnetic data | HDD | Hard Disk Drive |
| Saved flash data | SSD | Solid-State Drive |
| Graphics calculations | GPU | Graphics Processing Unit |
| Wall power conversion | PSU | Power Supply Unit |
| Million transfers/s | MT/s | Memory data rate; not MHz |
| Billions of cycles/s | GHz | Clock frequency; not total performance |
| Bits versus bytes | b / B | 8 bits = 1 byte |
| Screen refreshes/s | Hz | Refresh rate; not rendered FPS |

> **Remember:** FINAL MATCH: M.2 is a shape. NVMe is a protocol. PCIe is a connection path. RAID is an array strategy. Backup is a separate recoverable copy.

## Sources & exam alignment

🎨 **Visual:** Draw a neat neon reference desk with checked gold cards beside the hardware team.

> Check the facts behind the colorful story!

**Exam map:** 3.1 displays; 3.2 cables; 3.3 RAM; 3.4 storage; 3.5 boards/CPUs/cards; 3.6 power; 3.7 printer setup; 3.8 printer maintenance. [1]

[**1. CompTIA: Core 1 220-1201 objectives**](https://assets.ctfassets.net/82ripq7fjls2/1oSdlyujpaX3GrM0rir6Ge/91afb2be72785281e8fb4c0d9a70c6f4/CompTIA-A-220-1201-Exam-Objectives-3.0.pdf)

[**2. Dell: Electrical and ESD safety**](https://www.dell.com/support/kbdoc/en-us/000137973/safety-precautions-when-working-with-electrical-equipment)

[**3. Corsair: PSU manual and safety**](https://assets.corsair.com/image/upload/corsairmedia/sys_master/productcontent/49-000142_revAB_AX1200i.pdf)

[**4. ASUS: Motherboard dimensions**](https://www.asus-event.com/pdf/event/mb/300/pdf/ASUS_300_Series.pdf)

[**5. ASUS: Motherboard installation**](https://rog.asus.com/support/faq/1056516/)

[**6. Intel: CPU specifications and features**](https://download.intel.com/newsroom/2024/client-computing/Product-Brief-Intel-Core-Desktop-Processor.pdf)

[**7. Intel: CPU / chipset / firmware support**](https://www.intel.com/content/www/us/en/support/articles/000092149/processors.html)

[**8. Intel: Thermal interface material**](https://www.intel.com/content/www/us/en/gaming/resources/how-to-apply-thermal-paste.html)

[**9. Crucial: DDR memory generations**](https://www.crucial.com/articles/about-memory/everything-about-ddr5-ram)

[**10. Kingston: DDR5 memory standard**](https://media.kingston.com/kingston/articles/MKF_954-DDR5-Collateral_us.pdf)

[**11. Kingston: SSD and HDD differences**](https://www.kingston.com/en/blog/personal-storage/ssd-vs-hdd-differences)

[**12. Kingston: SATA / M.2 / NVMe FAQ**](https://www.kingston.com/en/ssd/ssd-faq)

[**13. Sony: Optical disc capacity**](https://www.sony.com/electronics/support/articles/00029645)

[**14. Dell: RAID levels and specifications**](https://www.dell.com/support/kbdoc/en-us/000128635/dell-servers-what-are-the-raid-levels-and-their-specifications)

[**15. Corsair: PSU efficiency ratings**](https://help.corsair.com/hc/en-us/articles/14641912717453-PSU-Efficiency-Ratings-Explained)

[**16. Corsair: Modular cable compatibility**](https://www.corsair.com/us/en/explorer/diy-builder/power-supply-units/are-psu-cables-universal/)

Reviewed September 18, 2026. Independent study material; not endorsed by CompTIA or Per Scholas. Technical labels are separate from the fictional artwork.

## Sources: displays, cables & printing

🎨 **Visual:** Draw a neat neon reference desk with checked gold cards beside the hardware team.

> Check the facts behind the colorful story!

**Reading note:** Source numbers in the lessons point to these clickable primary references. Model-specific manuals always govern installation and maintenance.

[**17. Microsoft: Secure Boot**](https://learn.microsoft.com/en-us/windows-hardware/drivers/bringup/secure-boot)

[**18. Microsoft: TPM fundamentals**](https://learn.microsoft.com/en-us/windows/security/hardware-security/tpm/tpm-fundamentals)

[**19. BenQ: LCD panel types**](https://zowie.benq.com/en-us/knowledge/monitor/zowie-breakdown-benefits-of-fast-tn-panel.html)

[**20. Display technology reference**](https://www.benq.com/en-us/knowledge-center/knowledge/oled-monitor.html)

[**21. Dell: Monitor specifications**](https://www.dell.com/en-us/shop/computer-monitors/ar/8605)

[**22. USB-IF: USB 3.2 data rates**](https://www.usb.org/usb-32-0)

[**23. HDMI: Cable types and capabilities**](https://www.hdmi.org/resource/cables)

[**24. Intel: Thunderbolt technology**](https://www.intel.com/content/www/us/en/architecture-and-technology/thunderbolt/overview.html)

[**25. StarTech: SATA cable specifications**](https://www.startech.com/en-us/cables/sata36)

[**26. CommScope: Category 6A cabling**](https://www.commscope.com/cat-6a/)

[**27. HP: Choosing printer drivers**](https://support.hp.com/id-en/document/ish_6020460-6020503-16)

[**28. HP: Scan to network folder**](https://support.hp.com/nz-en/document/ish_6878499-7528220-16)

[**29. HP: How laser printers work**](https://www.hp.com/sg-en/tech-takes/printing/explainer/how-laser-jet-printers-work-science-mechanics.html)

[**30. Epson: Thermal printhead cleaning**](https://download4.epson.biz/sec_pubs/bs/html/m001487/en/chap05_2.html)

[**31. HP: Laser print-quality maintenance**](https://support.hp.com/us-en/document/ish_6893172-6893216-16)

[**32. Epson: Inkjet maintenance**](https://files.support.epson.com/docid/cpd5/cpd50696.pdf)

Original illustrations created with the built-in image-generation tool. Characters, glowing paths, and factory scenes are memory aids, not literal wiring or service diagrams.

## STAR QUIZ TIME

🎨 **Visual:** Draw the CPU, RAM, storage, and printer heroes cheering under three bright gold stars in the neon computer city.

> Your turn. Pick the part and explain why!

**1. The crowded worktable:** A computer slows while many apps run. Memory use is high and the OS keeps moving data to storage. Which resource might need an upgrade: RAM or drive capacity? What must you check before installing it?

**2. The tiny drive trap:** A new M.2 NVMe SSD fits a slot that supports only M.2 SATA. Will it work just because it fits? Explain M.2, NVMe, and PCIe.

**3. The rubbing toner:** A laser-printed image rubs off the paper. Which printing stage normally bonds the toner? Name a setting to check and one service-safety step.

ANSWERS

**1. RAM may be the bottleneck.** Nice diagnosis! Check supported generation, capacity, module type, and slot arrangement. Confirm the cause first; adding storage capacity does not increase RAM.

**2. No.** Great catch! M.2 describes the form factor; NVMe is a storage protocol commonly carried over PCIe, the connection path. A SATA-only M.2 slot does not support that NVMe drive.

**3. Fusing.** You found the right stage! Check the paper type/weight setting and media, then follow diagnostics. Let the fuser cool and follow the manual before service. A symptom alone does not prove the fuser must be replaced.
