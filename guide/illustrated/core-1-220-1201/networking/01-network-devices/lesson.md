# Network Devices — Text Companion

[Guide overview and illustrated PDF](README.md) · [All illustrated guides](../../../README.md)

Searchable companion to Network City, Issue 01, edition 1.0.0. The PDF contains the comic illustrations and finished visual layout. Technical review: September 17, 2026.

## Welcome to Network City

> Welcome! Every device has a different job.

**Your mission:** Follow a message from your computer to the internet. Meet each device, learn its job, and spot the clues in an exam question.

Learn the picture, read the short definitions, then use the exam clue. Characters and glowing signals are memory aids; the technical notes explain the real behavior.

- **Exam focus.** Core 1 (220-1201), objective 2.5: networking hardware. Cable, service, and configuration notes support nearby objectives. Legacy devices are background, not extra promises about exam questions. [1]

- **Network.** Connected devices that share information. A computer, phone, and printer can all join a network.

- **Data.** Information a device stores or sends: a picture, a message, or your homework.

- **Protocol.** A shared set of communication rules. Devices need the same rules to understand each other.

- **LAN - Local Area Network.** A network in a limited area, such as a home, school, or office. Think: your neighborhood.

- **WAN - Wide Area Network.** A network that reaches across a large area and can connect faraway networks. Think: highways between cities.

- **Internet.** A worldwide network of connected networks.

- **ISP - Internet Service Provider.** The company that provides your internet connection.

> **Remember:** THE BIG THREE: A switch connects local devices. A router connects networks. An access point lets wireless devices join.

## Packets, frames & addresses

> Pack it, label it, send it!

- **Ethernet.** A family of wired networking technologies. It commonly uses copper cables, but it can also use fiber.

- **Packet.** A package used for delivery across networks. An IP packet includes a source and destination IP address.

- **Frame.** A package used on a local network link. An Ethernet frame includes source and destination MAC addresses. It can carry an IP packet inside.

- **IP - Internet Protocol.** Rules for addressing and moving packets between networks.

- **IP address.** A logical network address, such as 192.168.1.25. Logical means software assigns or configures it. IPv4 means Internet Protocol version 4; IPv6 means version 6.

- **MAC - Media Access Control.** A MAC address identifies a network interface for local communication. Example: 3C:52:82:1A:7B:09.

- **Network interface.** A device connection point to a network. A laptop can have separate wired and wireless interfaces.

- **Hexadecimal.** A counting system that uses 0-9 and A-F. MAC addresses commonly use six pairs of these digits. Each pair represents eight bits.

**Computer:** "Which faraway IP destination needs this packet?"

**Frame van:** "First, I need the MAC address for the next local stop!"

> **Remember:** IP = network destination. MAC = interface on the local link. A router can put the packet into a new frame for the next link.

- **Exam trap.** A MAC address is often assigned by the manufacturer, but software can change or randomize the address in use. It is not an unchangeable identity badge.

## Your network doorway

> I give this computer a way onto the network!

- **NIC - Network Interface Card.** Hardware that lets a device send and receive network data. Also called a network adapter. It does not have to be a separate card.

- **What it does.** A wired NIC sends and receives cable signals. A wireless adapter sends and receives radio signals.

- **Where it lives.** It may be built into the motherboard, installed as an expansion card, or connected through USB.

- **USB - Universal Serial Bus.** A common connection system for computer accessories. A USB-to-Ethernet adapter can add a wired network interface.

- **Driver.** Software that lets the operating system control hardware. A missing or broken driver can stop a healthy NIC from working properly.

- **Common wired speeds.** 100 Mbps, 1 Gbps, 2.5 Gbps, 5 Gbps, and 10 Gbps. A particular adapter may support only some speeds.

- **Link light.** A light near an Ethernet jack often shows a physical connection. Blinking may show activity. Colors and meanings vary by model.

**Real-life mission:** A laptop has no Ethernet jack. Add a compatible USB-to-Ethernet adapter, connect the cable, and install a driver if required.

> **Remember:** EXAM TRAP: A glowing link light does not prove the internet works. It is only a clue about the local connection.

- **Troubleshooting clue.** No connection? Check the cable, port, adapter status, and driver before assuming the internet provider has failed.

## The local delivery expert

> I learn sources. I forward toward destinations!

- **Switch.** Connects wired devices within a local network. Its main job is to forward Ethernet frames toward the correct destination. [2]

- **Physical port.** A socket for a cable. A numbered software port is different: it helps identify a network service or conversation.

- **MAC address table.** A list linking learned MAC addresses to switch ports within a VLAN. One port can lead to several devices, so it may have several learned addresses.

- **How it learns.** The switch reads the source MAC address of an arriving frame and remembers which port it arrived through.

- **How it delivers.** It checks the destination MAC address. For a known destination, it forwards through the matching port.

**Delivery scene:** Your computer uses port 1. Your printer uses port 7. Once the switch learns their locations, it can send the printer frame toward port 7.

- **Flooding.** For an unknown destination, the switch copies the frame to other eligible ports in the same VLAN, excluding the arrival port. This is normal learning behavior. [8]

- **Broadcast.** A local "everybody listen!" message. Switches forward broadcasts within the same VLAN.

- **Unmanaged switch.** A plug-and-play switch with little or no user configuration. Use it to add simple wired connections.

- **Managed switch.** Provides controls for settings, monitoring, and supported features. Useful in schools and offices.

- **VLAN - Virtual Local Area Network.** A separate logical LAN on shared switching hardware. Think: colored rooms inside the same building.

- **QoS - Quality of Service.** Rules that prioritize selected traffic when links are busy. A voice call may get priority over a large download.

> **Remember:** Managed does not mean automatically faster. Different VLANs generally need a router or routing-capable switch to communicate.

## The guide between networks

> Going to another network? I choose the next hop!

- **Router.** Forwards IP packets between different networks. It checks the destination IP address and chooses the next step. [3]

- **Routing table.** A list of known networks and paths used to reach them.

- **Next hop.** The next stop on a route, often another router.

- **Default gateway.** The usual exit to other networks. In a home, this is commonly the local IP address of the router.

**Example:** Your computer is 192.168.1.25. Your router is 192.168.1.1. A website lives outside your local network. Your computer sends toward its default gateway.

**Router:** "I do not need the whole trip written on my hat. I need a suitable next road!"

- **DHCP - Dynamic Host Configuration Protocol.** A service that automatically supplies IP settings, usually including an address, gateway, and DNS server information.

- **DNS - Domain Name System.** Helps turn names such as example.com into IP addresses. A home router may forward requests to another DNS server.

- **NAT - Network Address Translation.** Changes IP addresses as traffic passes through. Common in home networks using private IPv4 addresses.

- **PAT - Port Address Translation.** Often used with NAT so many private devices can share one public IPv4 address. It tracks numbered communication ports to keep conversations separate.

- **Public and private addresses.** Public addresses are intended to be routable on the internet. Private addresses are used inside private networks and are not normally routed across the public internet.

> **Remember:** Routing is the core job. DHCP, Wi-Fi, NAT, and other functions are added features. Not every router provides all of them.

## The wireless entrance

> Join wirelessly. My cable reaches the wired LAN!

- **AP - Access Point.** Also called WAP, Wireless Access Point. Lets wireless devices join a network.

- **How it works.** In a common setup, the AP connects Wi-Fi devices to a wired LAN through Ethernet. [4]

- **Why use it?** Phones and tablets need to move around. An AP adds wireless access to a room, floor, or building.

- **WLAN - Wireless Local Area Network.** A local network that uses wireless connections. The AP is the entry point for wireless clients.

- **SSID - Service Set Identifier.** The name identifying a wireless network, such as School-Guest.

- **Wi-Fi.** The brand name for wireless networking based on IEEE 802.11 standards. IEEE means Institute of Electrical and Electronics Engineers. Wi-Fi is not a technical acronym to expand. [9]

- **Frequency band.** A range of radio frequencies. Depending on the model and local rules, an AP may support 2.4 GHz, 5 GHz, or 6 GHz.

- **GHz - gigahertz.** Billions of cycles per second. This measures frequency, not data speed in gigabits per second.

- **Range.** Walls, distance, interference, antennas, and the client device affect coverage. No single indoor range fits every AP.

> **Remember:** EXAM TRAP: An AP provides wireless access to a network. It does not automatically provide an internet connection.

- **SOHO - Small Office/Home Office.** A SOHO wireless router often combines a router, Ethernet switch, AP, firewall, and DHCP service in one box.

**One box. Several jobs!** A modem may also be included, but do not assume it is. Read the device description.

## The rule enforcer

> Permission granted ... or BLOCK!

- **Firewall.** Hardware or software that allows or blocks traffic according to rules.

- **What rules can check.** Source and destination addresses, protocols, and numbered service ports. Some firewalls also inspect application details. Not all allowed traffic is safe.

- **Inbound.** Traffic entering the protected network or device.

- **Outbound.** Traffic leaving it.

- **Stateful inspection.** Tracking active connections so the firewall can recognize expected replies.

**Scene 1:** Your computer starts an allowed website connection.

**Firewall:** "I recognize the returning traffic from this conversation."

**Scene 2:** An outside device starts an unwanted connection.

**Firewall:** "No matching permission. BLOCK!"

- **Network firewall.** Protects traffic passing through a network boundary or between network sections.

- **Host-based firewall.** Runs on an individual computer and protects that device.

- **Host.** A network-connected device, such as a computer or server.

> **Remember:** Router = choose a path. Firewall = enforce traffic rules. One physical device may do both jobs.

- **Exam traps.** A firewall does not guarantee every permitted file is safe. NAT translates addresses; it is not a complete replacement for firewall protection.

## Cable modem: coax translator

> Different service lines need the right translator!

- **MODEM - modulator-demodulator.** To modulate is to put information onto a signal. To demodulate is to recover information from that signal.

- **Cable modem.** Connects customer network equipment to cable internet service. Its provider-side connection commonly uses coaxial cable.

- **Coaxial cable.** Cable with a center conductor surrounded by insulation and shielding.

- **F-type connector.** The screw-on connector commonly used on cable-modem coax connections.

- **DOCSIS - Data Over Cable Service Interface Specification.** The standards used for data over cable-service networks.

**Typical cable path:** ISP cable service > cable modem > router > local devices.

- **Speed clue.** DOCSIS version, modem hardware, service plan, network use, and Ethernet-port speed all matter. Cable modem does not mean one fixed speed.

> **Remember:** Cable internet uses a cable modem. A standalone modem does not automatically provide routing or Wi-Fi.

## DSL: the telephone-line rider

> Phone-line copper can carry data, too!

- **DSL - Digital Subscriber Line.** A family of technologies that carries data over copper telephone lines. A DSL modem connects to that service.

- **RJ11 - Registered Jack 11.** The common telephone-style connection associated with DSL equipment.

- **Filter or splitter.** Separates signals where required. Common shared voice-and-DSL setups use different frequency ranges; voice devices may need filters. Follow provider instructions.

- **ADSL - Asymmetric Digital Subscriber Line.** Asymmetric means the two directions have different capacities. Download capacity is usually higher than upload capacity.

- **Download / upload.** Download brings data to your device. Upload sends data away from it.

- **Why DSL distance matters.** Copper signals weaken over distance. Line quality and distance to the provider equipment affect performance.

> **Remember:** Neither cable nor DSL names one fixed speed. A standalone modem also does not automatically provide Wi-Fi.

- **Use case.** Connect a home to a provider DSL service. Unlike old dial-up, common DSL setups can carry voice and data at the same time.

- **Typical path.** Provider telephone line → DSL modem → router → local devices.

## The fiber connection specialist

> Fiber service ends here. Your router connects next!

- **ONT - Optical Network Terminal.** Equipment at the customer end of a provider fiber connection. In this lesson, ONT is the provider-service endpoint, not a generic Ethernet fiber adapter.

- **Optical.** Related to light.

- **Terminal.** An endpoint.

- **Fiber-optic cable.** Cable that carries information using light through thin strands of glass or plastic.

- **How it works.** The ONT handles the provider optical connection and commonly supplies Ethernet for the customer router. [5]

**Typical path:** ISP fiber > ONT > router > your network.

- **Power.** An ONT needs electrical power even though incoming fiber carries light.

- **Use case.** A home or office receives fiber internet service.

> **Remember:** CABLE = cable modem. DSL = DSL modem. FIBER SERVICE WITH AN ONT = optical network terminal.

- **Safety.** Never look into an active fiber connector. Some light is invisible and can harm your eyes. Avoid sharp bends and follow the cable bend limits.

- **Exam trap.** The ONT handles the provider fiber connection. The router moves packets between networks. A provider can combine functions, but the jobs remain separate.

## The cable organizer

> I organize connections. The switch forwards frames!

- **Patch panel.** A panel where permanent cable runs end in organized connections.

- **Main job.** Make cables easier to label, connect, move, and troubleshoot.

- **Terminate.** Finish a cable at a connector or terminal. Here, it means connect the cable end properly.

- **Patch cable.** A short connection cable, often linking a patch-panel socket to a switch port.

- **Passive.** A typical patch panel has no active forwarding electronics. It does not learn addresses or decide where frames go.

> **Remember:** Computer > patch cable > wall jack > permanent building cable > patch panel > patch cable > switch

**Why use it?** Long building cables stay organized. A technician changes short patch cables instead of disturbing permanent wiring.

- **Exam trap 1.** A patch panel does not replace a switch and does not assign IP addresses.

- **Exam trap 2.** It does not regenerate signals or restart the cable-distance allowance.

- **Exam trap 3.** A compatible passive panel may pass PoE through its connections, but it does not create that power.

## One cable, two jobs

> One Ethernet cable. Data AND power!

- **PoE - Power over Ethernet.** Sends electrical power and network data through compatible Ethernet cabling. Useful for devices far from an outlet.

- **Common devices.** Access points, network cameras, and VoIP phones. VoIP means Voice over Internet Protocol: voice calls carried over IP networks.

- **PoE switch.** A switch with ports that supply compatible devices with power.

- **PoE injector.** Adds power to Ethernet when the existing switch does not supply PoE.

- **Injector path.** Non-PoE switch → injector → powered device. The injector also connects to electrical power. Use its data-in and power/data-out ports as labeled.

- **PSE / PD.** Power Sourcing Equipment sends power. A Powered Device receives it.

- **IEEE.** Institute of Electrical and Electronics Engineers, an organization that develops technical standards. W means watt, a unit of power.

- **Power budget.** The total power the switch can supply. Six ports allocated 25 W each require 150 W at the source. A 120 W switch budget is not enough.

- **Safety.** Standard PoE detects a compatible device before normal operating power. Some passive PoE products skip that detection. Match voltage, wiring, and standards; use suitable undamaged cable.

> **Remember:** PoE names power delivery, not Ethernet data speed.

## PoE standards: read both ends

> Source power is not the same as device power!

| IEEE standard | Name / type | Max. source (PSE) | Available at device (PD)* |
| --- | --- | --- | --- |
| 802.3af | PoE / Type 1 | 15.4 W | 12.95 W |
| 802.3at | PoE+ / Type 2 | 30 W | 25.5 W |
| 802.3bt | PoE++ / Type 3 | 60 W | 51 W |
| 802.3bt | PoE++ / Type 4 | 90 W | 71.3 W |

*At the maximum standard class, allowing for specified cable losses. Actual devices may request less. PoE++ is a marketing label; check the IEEE type. [6, 10]

- **Why the difference?** Copper has electrical resistance. Some energy becomes heat on the way to the powered device.

- **Choose by requirements.** Check the device standard, per-port power, whole-switch budget, and cable requirements. Enough sockets does not mean enough watts.

> **Remember:** EXAM CLUE: An AP requiring 802.3at needs compatible PoE+ power. Basic 802.3af may not meet its needs.

## Read the race-car labels

> More capacity helps, but watch the narrow gate!

- **Bit / byte.** A bit is a 0 or 1. Eight bits make one byte. Lowercase b means bits; uppercase B means bytes.

- **Mbps / Gbps.** Megabits per second / gigabits per second. 1 Gbps = 1,000 Mbps.

- **MB/s.** Megabytes per second. A 1 Gbps link has a raw rate of 125 MB/s before overhead and other limits.

- **Bandwidth / throughput / latency.** Capacity / achieved transfer rate / delay. Overhead means extra communication information, such as addresses and control messages.

| Label | Common name | Rated speed |
| --- | --- | --- |
| 10BASE-T | 10-megabit Ethernet | 10 Mbps |
| 100BASE-TX | Fast Ethernet | 100 Mbps |
| 1000BASE-T | Gigabit Ethernet | 1 Gbps |
| 10GBASE-T | 10-gigabit Ethernet | 10 Gbps |

- **BASE / T.** BASE means baseband, a signaling method. T refers to twisted-pair copper. In 100BASE-TX, the 100 names 100 Mbps; TX belongs to that standard name.

- **Auto-negotiation / full duplex.** Devices select a mutually supported link mode / a link sends and receives at the same time.

- **Bottleneck.** The limiting part of the trip. A 100 Mbps switch port limits traffic through it even if the computer supports 1 Gbps.

> **Remember:** The vehicles compare data capacity. A faster Ethernet rating does not mean each electrical signal travels that many times faster.

## Cable reach & safe connections

> Measure the whole channel. Use the right cable!

- **100-meter channel.** Common structured twisted-pair installations allow 90 m of permanent cable plus 10 m total of cords: about 328 feet overall. Suitable cable is required for the speed. [7]

- **Cat - Category.** A cable performance class. Cat 5e commonly supports 1 Gbps at 100 m; Cat 6A supports 10 Gbps at 100 m. Fiber reach depends on fiber, optics, and standard.

- **RJ45 - Registered Jack 45.** The common exam name for the Ethernet connector. More precisely, typical twisted-pair Ethernet uses 8P8C: eight-position, eight-contact modular connectors.

- **Plenum-rated cable.** Cable designed for air-handling spaces with required flame and smoke characteristics. Use the correct cable rating for the location.

- **Installation safety.** Keep vents clear, protect cables from foot traffic, and follow electrical and building requirements.

- **100 m example.** 90 m of permanent cable + 5 m at the desk + 5 m at the rack = 100 m total. A passive patch panel does not reset that total.

- **Fiber safety.** Never look into an active optical connector. Follow bend limits. Fiber reach depends on the fiber and optical equipment.

- **Installation.** Do not block air vents or leave trip hazards. Follow cable ratings and local electrical/building rules.

> **Remember:** Cat 5e: commonly 1 Gbps at 100 m. Cat 6A: 10 Gbps at 100 m. Not every cable supports every Ethernet speed for 100 m. [7, 11]

## Hubs, repeaters & bridges

> Same network family. Different jobs!

- **Hub.** A multiport repeater. It repeats incoming signals out its other ports and does not choose a destination using a MAC table.

- **Collision.** Transmissions overlap on a shared Ethernet medium. Devices using a hub share that medium.

- **Half duplex.** Communication travels both ways, but not at the same time on the shared connection.

- **Repeater.** Receives and regenerates a signal. A basic repeater does not route IP packets.

- **Wireless range extender.** Relays wireless traffic to extend coverage. Some designs reduce available throughput because receiving and retransmitting share airtime.

- **Bridge.** Connects network segments and forwards frames using MAC addresses. A segment is a network section. A basic switch is essentially a multiport bridge.

- **OSI - Open Systems Interconnection.** A seven-layer model for describing network communication. These three layers help identify device jobs:

| Layer | Job | Typical examples |
| --- | --- | --- |
| 1 - Physical | Moves signals | Hub, basic repeater |
| 2 - Data Link | Handles local frames | Basic switch, bridge |
| 3 - Network | Moves packets between networks | Router |

A Layer 3 switch can route. Firewall functions can span layers. One box may perform several jobs.

## From laptop to website

> Follow the packet, one job at a time!

Typical wired path: **Laptop/NIC → Switch → Router → Modem/ONT → ISP/Internet**.

**1. Join.** The NIC connects; wireless devices join through an AP. DHCP often provides IP settings.

**2. Find.** DNS helps find the website IP address. The computer checks whether that destination is local.

**3. Send locally.** For an outside destination, the frame goes toward the gateway MAC. The switch forwards locally.

**4. Route.** The router chooses the next network hop. A home router may also apply NAT and firewall rules.

**5. Reach the provider.** The modem or ONT handles the access connection. The reply comes back and the page loads.

> **Remember:** Local printing on the same LAN can work without the internet. The switch can deliver locally without sending the traffic through a router.

## Choose the right hero

> Pick the device that solves the stated problem!

| Need or problem | Device to recognize |
| --- | --- |
| A computer needs a network interface | NIC |
| Several wired devices need local connections | Switch |
| Separate IP networks must communicate | Router or routing-capable switch |
| Wireless devices need network access | Access point |
| Traffic must follow allow/block rules | Firewall |
| Permanent building cables need organization | Patch panel |
| A compatible device needs Ethernet power | PoE switch or injector |
| Internet service arrives through cable coax | Cable modem |
| Internet service uses a DSL telephone line | DSL modem |
| Provider fiber ends at customer premises | ONT |

> **Remember:** Read the job in the question. A familiar plastic box can hide several separate networking functions.

## Sources & exam alignment

> Check the facts behind the story.

Primary references used for the lesson. The official exam objectives define the scope; supporting sources explain device behavior. This is an independent study guide, not an official CompTIA publication.

**1. CompTIA A+ 220-1201 objectives, version 3.0**

[Open source reference](https://assets.ctfassets.net/82ripq7fjls2/1oSdlyujpaX3GrM0rir6Ge/91afb2be72785281e8fb4c0d9a70c6f4/CompTIA-A-220-1201-Exam-Objectives-3.0.pdf)

**2. Cisco: What is network switching?**

[Open source reference](https://www-cloud.cisco.com/site/us/en/learn/topics/networking/what-is-network-switching.html)

**3. Cisco: Switch vs. router**

[Open source reference](https://www.cisco.com/site/us/en/learn/topics/small-business/network-switch-vs-router.html)

**4. Cisco: What is an access point?**

[Open source reference](https://www.cisco.com/site/us/en/learn/topics/small-business/what-is-an-access-point.html)

**5. Verizon: Fios internet and ONT equipment**

[Open source reference](https://www.verizon.com/business/support/equipment-devices-services/internet-services/fios-internet/)

**6. Cisco: What is Power over Ethernet?**

[Open source reference](https://www-cloud.cisco.com/site/us/en/learn/topics/networking/what-is-power-over-ethernet.html)

**7. Fluke Networks: Channel testing and permanent links**

[Open source reference](https://regression.flukenetworks.com/blog/cabling-chronicles/dumb-thing-1-specifying-channel-testing-when-installing-permanent-links)

**8. Cisco: Unknown-unicast flooding**

[Open primary reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-6000-series-switches/23563-143.html)

**9. TP-Link: Wi-Fi definition**

[Open primary reference](https://www.tp-link.com/us/wifi/)

**10. Cisco Meraki: PoE device-side power**

[Open primary reference](https://documentation.meraki.com/Switching/MS_-_Switches/Operate_and_Maintain/How-Tos/PoE_Support_on_MS_Switches)

**11. CommScope: Cat 6A cabling**

[Open primary reference](https://www.commscope.com/cat-6a/)

Technical review: September 17, 2026. Artwork generated with the built-in image tool. Independent study guide; not an official or endorsed CompTIA publication.

## STAR QUIZ TIME

> Your turn, network hero!

**1. The local delivery challenge**

A computer sends a document to a printer on the same local network. Which device normally uses a MAC address table to forward the frame?

**A.** Router   **B.** Switch   **C.** Cable modem

**2. The fiber mystery**

A home receives internet through fiber. Which device commonly handles the optical connection and provides Ethernet toward the router?

**A.** ONT   **B.** Patch panel   **C.** DSL modem

**3. The ceiling-power challenge**

An AP requires IEEE 802.3at PoE+. The existing switch has no PoE. What can add suitable power while keeping the switch?

**A.** Compatible 802.3at injector

**B.** Passive patch panel

**C.** Basic Ethernet hub

> **Remember:** PAUSE HERE. Choose your answers before reading below!

**ANSWERS - CHECK YOUR HERO SKILLS!**

**1. B - Switch.** Correct! A basic switch uses MAC addresses for local frame delivery.

**2. A - ONT, Optical Network Terminal.** You spotted it! The ONT handles the provider fiber connection.

**3. A - Compatible 802.3at injector.** ZAP! It adds suitable power to Ethernet. PoE+ supports up to 30 W at the source, with less available at the powered device.
