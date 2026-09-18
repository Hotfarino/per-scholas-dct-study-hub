# Wi-Fi Standards and Wireless — Text Companion

[PDF and interactive flashcard downloads](README.md) · [All illustrated guides](../../../README.md)

Network City, Issue 04, edition 1.0.0. Reviewed September 18, 2026. The PDF contains the finished illustrations.

## Meet the wireless crew

🎨 **Visual:** Draw a cyan access point sending radio arcs to a laptop, tablet, and phone across a neon city.

> WOOSH! Our messages travel through the air!

- **Wireless.** A connection that sends information without a cable between the communicating devices. This guide focuses on radio links.

- **Wi-Fi.** A brand name for wireless networking based on the IEEE 802.11 family. Learn Wi-Fi as a name, rather than an acronym to expand.

- **IEEE.** Institute of Electrical and Electronics Engineers. This organization develops standards, including the 802.11 family for wireless local networks.

- **WLAN / LAN.** Wireless Local Area Network / Local Area Network. A local network connects nearby devices, such as those in a home or school.

- **AP / client.** An Access Point connects Wi-Fi clients to a network. A client is a device using that connection. A home wireless router often combines an AP, router, and Ethernet switch.

- **Internet access.** Wi-Fi supplies a local link. An ISP, or Internet Service Provider, supplies an internet connection. You can have working Wi-Fi while the internet connection is down.

> **Remember:** EXAM MAP: Core 1 (220-1201), objective 2.2: bands, channels, regulations, 802.11, Bluetooth, NFC, and RFID. Setup and troubleshooting chapters add related context. [1]

## Radio words: frequency, band & channel

🎨 **Visual:** Draw orange, blue, and purple radio couriers moving through different rooms in a bright cutaway building.

> Pick the band. Find the channel!

- **RF - Radio Frequency.** The part of the electromagnetic spectrum used for radio communication. Wi-Fi radios turn digital data into changing radio signals.

- **Frequency.** How often a wave repeats each second. Hz means hertz: cycles per second. MHz means millions of cycles. GHz means billions of cycles.

- **Band.** A range of radio frequencies. Picture a neighborhood. Common Wi-Fi band names are 2.4 GHz, 5 GHz, and 6 GHz.

- **Channel.** A smaller slice of a band. Picture a street inside that neighborhood. Nearby networks share the available radio space.

- **Channel width.** How much frequency space a channel uses, measured in MHz. Picture the street’s width. Wider channels can carry more data when conditions and devices support them.

- **Data rate.** How quickly bits travel. Mb/s means megabits per second. Gb/s means gigabits per second. These units describe data, while GHz describes a radio frequency.

> **Remember:** NUMBER TRAP: 5 GHz is a radio band. Wi-Fi 5 is a generation name. Cellular 5G is a mobile-network generation. The shared number does not make them the same thing.

## Three bands: different tradeoffs

🎨 **Visual:** Draw orange waves crossing a doorway, blue waves in a hallway, and purple waves in a clear room.

> Walls, neighbors, and devices change the ride!

| Band | Useful strengths | Watch for |
| --- | --- | --- |
| 2.4 GHz | Often better reach through walls; many older and IoT devices | Crowded spectrum; fewer separate channels |
| 5 GHz | More channel choices; often useful for faster nearby links | Walls and distance can weaken the link |
| 6 GHz | Additional spectrum for compatible Wi-Fi 6E/7 devices | Needs supported hardware, software, security, and local permission |

- **IoT - Internet of Things.** Connected objects such as sensors, lights, and smart plugs. Many simple devices support only 2.4 GHz.

- **Reach is conditional.** At similar power and other conditions, lower frequencies often handle walls better. Building materials, antennas, rules, and receiver quality also matter.

- **Use case.** A nearby fast laptop may suit 5 or 6 GHz. A basic sensor farther away may suit 2.4 GHz. Test at the actual location. [2,3]

> **Remember:** CHECK BOTH ENDS: A tri-band access point does not add a 6 GHz radio to an older laptop. The AP and client must share a supported band and mode.

## Channels: the 1, 6, 11 memory hook

🎨 **Visual:** Draw a radio traffic marshal separating orange, cyan, and purple lanes. Overlapping lanes cause a small jam.

> Three clear lanes beat a tangled pile!

- **The common U.S. plan.** For 2.4 GHz Wi-Fi using 20 MHz channels, remember channels **1, 6, and 11**. They form the familiar nonoverlapping plan. [4]

- **Overlap.** Nearby channel numbers can occupy some of the same frequency space. Choosing channel 2 beside channel 1 does not create a clean extra lane.

- **Same-channel sharing.** Nearby networks on the same channel compete for airtime. They may hear each other and take turns. A shared channel can still become busy.

- **Adjacent-channel interference.** Overlapping radio activity can disrupt transmissions. Devices may need to retry data, which uses more airtime.

- **Channel selection.** Use approved automatic channel planning or survey the area. Pick a suitable channel and width, then test performance. A quiet-looking channel can change later.

- **Regional rules.** The permitted channel list depends on location. This guide uses U.S. examples. Keep the device’s country or region setting correct.

> **Remember:** ROTE MEMORY: Say “2.4, twenty wide, one-six-eleven.” This hook describes the common U.S. 2.4 GHz plan, not every band or every country.

## Widths, radar & radio rules

🎨 **Visual:** Draw wide and narrow neon lanes beside a careful radio marshal holding a blank permission card.

> More lanes help only when the road is clear!

- **Common widths.** Wi-Fi modes may use 20, 40, 80, or 160 MHz channels. Wi-Fi 7 adds support for 320 MHz in 6 GHz where allowed. Both endpoints must support the chosen mode. [3,5]

- **The tradeoff.** A wider channel occupies more spectrum. In a crowded building, a narrower channel may leave more usable channels and perform better overall.

- **DFS - Dynamic Frequency Selection.** Some 5 GHz channels share spectrum with radar. On DFS channels, equipment must detect radar and follow required channel-avoidance procedures. A channel change can interrupt service. [2]

- **FCC.** Federal Communications Commission, the U.S. radio regulator. Unlicensed spectrum still has rules for power, equipment, location, and use.

- **6 GHz example.** U.S. standard-power operation uses AFC, Automated Frequency Coordination, to help protect existing licensed links. LPI means Low Power Indoor. Device classes have different rules. [6]

- **Safe setup.** Use approved equipment, the correct regional settings, and the manufacturer’s placement and exposure guidance. Do not defeat radio limits or use an indoor-only unit outdoors.

> **Remember:** EXAM CLUE: Frequency, channel number, and channel width describe different things. Local rules determine which combinations your equipment may use.

## The classic crew: 802.11a, b & g

🎨 **Visual:** Draw a gold bicycle courier beside blue and green sedan couriers in a neon wireless museum.

> Old names still show up in exam clues!

| Standard | Band | Maximum PHY rate | Memory hook |
| --- | --- | --- | --- |
| 802.11a | 5 GHz | 54 Mb/s | A takes the 5 GHz road |
| 802.11b | 2.4 GHz | 11 Mb/s | B is the bicycle: 11 |
| 802.11g | 2.4 GHz | 54 Mb/s | G stays at 2.4, goes 54 |

- **PHY - Physical layer.** The radio link’s signaling layer. These are theoretical maximum link rates under supported conditions. Actual file transfers run slower. [2,7]

- **The same-speed trap.** 802.11a and 802.11g share a 54 Mb/s maximum but use different bands. 802.11b and g share 2.4 GHz but have different maximum rates.

- **Use cases.** Recognize legacy devices and compatibility clues. Old clients can add airtime overhead. Support depends on the AP’s enabled modes and security.

> **Remember:** SAY IT: A = 5 / 54. B = 2.4 / 11. G = 2.4 / 54. Band first, rate second. We use the standard names rather than unofficial retroactive Wi-Fi 1/2/3 labels.

## Wi-Fi 4: 802.11n adds more paths

🎨 **Visual:** Draw a green access point and laptop exchanging several separate colored streams across a neon courtyard.

> N brings multiple paths to the team!

- **Name and bands.** Wi-Fi 4 means 802.11n. The standard supports 2.4 GHz and 5 GHz. A specific product may implement only one band.

- **Top rate.** Up to 600 Mb/s under the maximum four-stream, 40 MHz, short-guard-interval configuration. Smaller client configurations have lower ceilings. [7]

- **MIMO.** Multiple Input, Multiple Output. Several transmit and receive paths can improve wireless performance. Compatible devices can carry separate spatial streams.

- **Spatial stream.** An independent data stream sent through the radio channel. More streams require support at both ends. Count supported streams, not just visible antennas.

- **Width.** 802.11n supports 20 and 40 MHz operation. A 40 MHz channel uses more spectrum. The 2.4 GHz band can become crowded quickly. [4]

- **Use case.** Identify older dual-band equipment and devices that need basic wireless access. Check the actual adapter, AP, channel width, and security support.

> **Remember:** MEMORY HOOK: N = Wi-Fi 4. Two possible bands. Up to 600 Mb/s. A 600 Mb/s standard ceiling does not make every Wi-Fi 4 device a 600 Mb/s device.

## Wi-Fi 5: 802.11ac takes the fast road

🎨 **Visual:** Draw a blue sports-car courier on a wide elevated radio road leading to a laptop terminal.

> AC cruises on the 5 GHz road!

- **Name and band.** Wi-Fi 5 means 802.11ac. Its radio operation uses the 5 GHz band. A dual-band router labeled AC usually uses another standard on its 2.4 GHz radio.

- **Top rate.** About 6.9 Gb/s at the standard’s theoretical maximum configuration. Ordinary phones and laptops support fewer streams and much lower link ceilings. [2,8]

- **Wider channels.** The standard supports widths up to 160 MHz, including supported 80+80 MHz arrangements. Product and deployment support varies.

- **MU-MIMO.** Multi-User Multiple Input, Multiple Output. Supported equipment can send separate spatial streams to multiple compatible clients at once. Wi-Fi 5 introduced downlink MU-MIMO.

- **Beamforming.** A transmitter adjusts signals across antennas to improve delivery toward a receiver. Picture a focused voice. It cannot make solid walls disappear.

- **Use case.** Recognize common 5 GHz equipment and fast local-network links. Check the client’s stream count and channel support before predicting performance.

> **Remember:** MEMORY HOOK: AC = Wi-Fi 5 = 5 GHz. Maximum standard rate about 6.9 Gb/s. Product labels often add several radios together; they are not one client’s speed.

## Wi-Fi 6: 802.11ax shares airtime

🎨 **Visual:** Draw a gold dispatcher putting small parcels for several device characters into sections of one shuttle.

> One planned trip can serve several devices!

- **Name and bands.** Wi-Fi 6 means 802.11ax in 2.4 and 5 GHz. Its biggest benefits include more efficient service when many devices share the air.

- **Top rate.** About 9.6 Gb/s at the standard’s maximum configuration. This is a theoretical PHY ceiling, not a promised internet download rate. [2]

- **OFDMA.** Orthogonal Frequency Division Multiple Access. The AP can assign small portions of a channel to different users within one transmission. Think of separate seats on a shared shuttle.

- **Resource unit.** An assigned group of radio subcarriers inside the channel. OFDMA uses these smaller pieces to serve compatible devices efficiently.

- **TWT - Target Wake Time.** Devices can arrange wake times for communication. Compatible clients may save battery power by sleeping between scheduled activity.

- **Use case.** Busy classrooms, offices, or homes with many active clients. Wi-Fi 6 also supports uplink and downlink multi-user features. Benefits depend on device support and traffic. [9]

> **Remember:** MEMORY HOOK: AX = Wi-Fi 6. OFDMA helps share channel space. MIMO uses multiple spatial paths. The two ideas can work together.

## Wi-Fi 6E: the extra 6 GHz neighborhood

🎨 **Visual:** Draw the purple radio courier entering a spacious new room while orange and blue couriers use older rooms.

> E extends Wi-Fi 6 into extra spectrum!

- **6E meaning.** Wi-Fi 6E extends Wi-Fi 6 technology into the 6 GHz band. It still uses 802.11ax. E is not a separate IEEE amendment. [3]

- **Why it matters.** Extra spectrum can provide more room for wide channels. Older 2.4/5 GHz-only clients cannot transmit on this band, which changes the mix of competing devices.

- **Same ceiling family.** Wi-Fi 6E does not change the 802.11ax maximum PHY ceiling of about 9.6 Gb/s. Cleaner spectrum can still improve real results.

- **Compatibility chain.** Check the client radio, AP, operating-system support, driver, security mode, and local 6 GHz rules. A Wi-Fi 6 label alone does not promise 6 GHz support.

- **Security.** 6 GHz Wi-Fi uses newer security requirements. WPA3 protects authenticated networks; Enhanced Open uses OWE, Opportunistic Wireless Encryption, for encrypted open access. Legacy WPA2/open modes do not carry over unchanged. [10]

> **Remember:** EXAM TRAP: Wi-Fi 6 = generation. 6 GHz = band. Wi-Fi 6E = Wi-Fi 6 technology extended into 6 GHz. Match the full name before choosing an answer.

## Wi-Fi 7: extra context for newer gear

🎨 **Visual:** Draw a purple express courier using two glowing paths between the same access point and laptop.

> Two supported links can work as a team!

- **Name and bands.** Wi-Fi 7 means 802.11be. The technology spans 2.4, 5, and 6 GHz, subject to the device and local rules.

- **Top rate.** About 46.1 Gb/s is the standard’s theoretical maximum using its largest supported configuration. Most devices support far fewer streams. This number is not a normal laptop download speed. [2]

- **320 MHz.** A new wide-channel option in 6 GHz where permitted. A device with Wi-Fi 7 branding may still have a narrower maximum channel width.

- **MLO - Multi-Link Operation.** Compatible devices can coordinate multiple links. Supported modes can improve throughput, reliability, or delay. Implementation details matter. [5]

- **QAM.** Quadrature Amplitude Modulation. It encodes information using changes in a signal’s amplitude and phase. Wi-Fi 7 supports 4096-QAM; higher-order modes need good signal conditions.

- **Use case.** Recognize newer equipment and naming. Master the common A+ band/channel concepts before memorizing advanced feature details.

> **Remember:** SCOPE NOTE: Objective 2.2 names 802.11 standards broadly. Wi-Fi 7 detail is included as clearly marked supporting context, not a prediction of a specific exam question.

## The standards memory map

🎨 **Visual:** Draw the classic vehicle couriers beside the green multi-path team and purple express courier in a neon parade.

> Name it. Band it. Rate it!

| Standard | Generation | Band(s), GHz | Max PHY rate* |
| --- | --- | --- | --- |
| 802.11a | Legacy | 5 | 54 Mb/s |
| 802.11b | Legacy | 2.4 | 11 Mb/s |
| 802.11g | Legacy | 2.4 | 54 Mb/s |
| 802.11n | Wi-Fi 4 | 2.4 / 5 | 600 Mb/s |
| 802.11ac | Wi-Fi 5 | 5 | About 6.9 Gb/s |
| 802.11ax | Wi-Fi 6 | 2.4 / 5 | About 9.6 Gb/s |
| 802.11ax | Wi-Fi 6E | Adds 6 | About 9.6 Gb/s |
| 802.11be | Wi-Fi 7 | 2.4 / 5 / 6 | About 46.1 Gb/s |

***Read the ceiling correctly:** These are theoretical standard maximums, using the maximum supported streams, width, and other settings. Actual products, negotiated links, and useful throughput are lower or different. [2,7,8]

> **Remember:** REPEAT FROM MEMORY: a, b, g, n, ac, ax. Then say the band and maximum rate. Add 6E as the 6 GHz extension and be as Wi-Fi 7 context.

## Speed labels versus actual downloads

🎨 **Visual:** Draw the blue courier waiting at a narrow delivery gate after leaving a wide fast radio road.

> The narrowest busy part slows the trip!

- **Link rate.** The radio speed that the AP and client negotiate. It changes with the signal and supported settings. It includes more than the useful file data.

- **Throughput.** Useful data delivered over time. Headers, acknowledgments, waiting, retries, and other users reduce the useful result.

- **Bottleneck.** The part limiting the whole trip. Your internet plan, AP uplink, server, VPN, storage, or client can limit a download even when the radio link is fast. VPN means Virtual Private Network.

- **Mb/s versus MB/s.** A lowercase b means bits. An uppercase B means bytes. Eight bits make one byte. A 100 Mb/s connection has a raw arithmetic ceiling of 12.5 MB/s before overhead.

- **Latency.** Delay, often measured in milliseconds (ms). Low delay helps calls and games. A high maximum data rate does not guarantee low delay.

- **Test fairly.** Compare a local transfer with an internet test. Check the negotiated band, width, and rate. Test near the AP and at the problem spot. [11]

> **Remember:** EXAM CLUE: A router’s combined marketing number may add multiple radios. It does not describe one client’s usable speed. Read the per-radio and per-client specifications.

## Airtime: taking turns and sharing

🎨 **Visual:** Draw a radio dispatcher loading a shared shuttle while nearby device characters wait for their turn.

> Listen first. Take a turn. Retry when needed!

- **Airtime.** Time spent using the radio channel. Many devices can share a network, but they compete for finite radio resources.

- **CSMA/CA.** Carrier Sense Multiple Access with Collision Avoidance. Wi-Fi devices listen and use waiting rules to reduce collisions. Wireless collisions and lost frames can still happen.

- **Acknowledgment / retry.** A receiver can confirm delivery. If confirmation fails, the sender may try again. Repeated retries use time that could carry new data.

- **MIMO versus OFDMA.** MIMO uses multiple spatial paths. OFDMA divides channel resources among users. Think parallel delivery paths versus assigned seats in a shuttle.

- **MU-MIMO.** Multi-user MIMO sends different spatial streams for multiple clients. Ordinary MIMO does not automatically mean several users receive at once.

- **Why busy rooms slow down.** Many active clients, weak links, interference, and management traffic all consume airtime. A strong signal alone does not prove the channel is quiet. [9,11]

> **Remember:** MEMORY HOOK: MIMO = paths. MU-MIMO = paths for multiple users. OFDMA = pieces of a channel for multiple users. All need compatible equipment and suitable conditions.

## Range: a site survey beats a promise

🎨 **Visual:** Draw a robot checking a tablet in several rooms while radio light fades behind brick walls and furniture.

> A distance number needs a real-world test!

- **No universal Wi-Fi range.** A standard name does not promise one fixed distance in feet. Power, antennas, walls, interference, band, and required data rate change usable coverage.

- **Attenuation.** Loss of signal strength. Distance and obstacles weaken signals. Concrete, metal, and water can cause large losses.

- **Signal and noise.** RSSI means Received Signal Strength Indicator. SNR means Signal-to-Noise Ratio. A receiver needs the wanted signal to stand out from unwanted radio energy.

- **dBm.** Decibels referenced to one milliwatt. On common Wi-Fi readings, -50 dBm is stronger than -75 dBm. These are example readings, not universal pass/fail thresholds.

- **Site survey.** Check coverage, interference, and performance where devices actually operate. Test both directions because a small client may transmit less strongly than the AP. [12]

- **Feet-based practice.** Test at 10 ft, 30 ft, and 60 ft, then behind a wall. These are suggested test locations, not guaranteed range ratings. Record the results and the room layout.

> **Remember:** DISTANCE RULE: Use inches or feet for physical measurements. Keep GHz and MHz for radio frequencies. No fixed “Wi-Fi 6 reaches exactly ___ ft” claim is reliable everywhere.

## Placement, antennas & interference

🎨 **Visual:** Draw a robot moving an access point away from metal furniture and a microwave toward an open central position.

> A better spot can beat a louder signal!

- **Placement.** Put an AP where it can cover the intended users. Follow the mounting instructions. Avoid burying it in a metal cabinet or behind dense obstacles.

- **Omnidirectional antenna.** Spreads energy around an axis. The pattern is not a perfect ball. Orientation and the antenna design affect coverage.

- **Directional antenna.** Concentrates energy toward a chosen area. Useful for planned links or specific coverage zones. It needs correct alignment and an approved design.

- **Interference.** Unwanted radio activity. Nearby Wi-Fi, Bluetooth, and some appliances can compete with or disrupt 2.4 GHz operation. A Wi-Fi scanner does not detect every non-Wi-Fi source.

- **Power balance.** Turning AP power to maximum may create a one-way-looking link or more interference. Plan AP placement, channel use, and power together.

- **Use case.** A call works near the AP but fails in a back room. Compare the same device in both places, check obstacles and noise, then retest after one change. [11,12]

> **Remember:** SAFE INSTALL: Follow mounting, cable, electrical, and RF-exposure instructions. Use outdoor-rated equipment where needed. Check coverage after furniture or walls change.

## Network names, radios & roaming

🎨 **Visual:** Draw a laptop walking between rooms served by friendly access points with a continuous soft radio glow.

> The network name stays familiar as I move!

- **SSID.** Service Set Identifier. The network name users select. Several APs may advertise the same SSID as part of one planned network.

- **BSSID.** Basic Service Set Identifier. An identifier for a particular basic service set, commonly based on an AP radio interface’s MAC address.

- **MAC address.** Media Access Control address. A link-layer identifier. Many client systems use private or changing Wi-Fi MAC addresses to reduce tracking.

- **Roaming.** A client changes from one AP to another. The client generally decides when to move; network features can assist. A shared name alone does not guarantee seamless calls.

- **Band steering.** An AP system can encourage a suitable client to use another band. The client must support that band, and actual behavior varies.

- **Hidden SSID.** Hiding the name does not make the network invisible or secure. Use supported authentication and encryption. [13,14]

> **Remember:** EXAM HOOK: SSID = network name. BSSID = a particular wireless service set. Password = a credential. These three items do different jobs.

## Mesh, hotspots & direct connections

🎨 **Visual:** Draw three access-point friends joining separate rooms through backhaul paths while one links to a wired hub.

> Every wireless hop still needs a path home!

- **Mesh Wi-Fi.** Several nodes cooperate to extend network coverage. A node needs a reliable route to the rest of the network.

- **Backhaul.** The connection carrying traffic between an AP or mesh node and the upstream network. It may use Ethernet or a wireless link.

- **Repeater / extender.** Receives and forwards wireless traffic to extend coverage. A shared-radio repeating hop can consume extra airtime. Results depend on the design.

- **Hotspot.** An access point offering network access. A phone hotspot usually shares cellular data over a local Wi-Fi link. Carrier limits and battery use still apply.

- **Tethering.** Sharing one device’s internet connection with another device. Depending on support, the connection may use Wi-Fi, USB, or Bluetooth. USB means Universal Serial Bus.

- **Wi-Fi Direct.** Compatible devices form a direct Wi-Fi connection without joining a conventional AP-based WLAN. Support, discovery, and security depend on the devices. [15]

> **Remember:** PLACEMENT CLUE: An extender in a dead zone may repeat a poor link. It needs a usable upstream connection. A stronger Wi-Fi icon does not fix a broken internet uplink.

## Wireless security: keys and shields

🎨 **Visual:** Draw a purple shield gatekeeper checking devices at a city entrance with a separate guest gate and locked parcels.

> Join the right network. Protect the message!

- **Authentication.** Checks whether a device or user may join. Encryption scrambles data so an unauthorized listener cannot simply read it.

- **WPA2 / WPA3.** Wi-Fi Protected Access 2 / 3. Use supported modern security. WPA2 with AES may support older devices; WPA3 provides newer protections. AES means Advanced Encryption Standard. [13]

- **Personal.** Common home mode. WPA2-Personal uses a PSK, Pre-Shared Key. WPA3-Personal uses SAE, Simultaneous Authentication of Equals, for password-based authentication.

- **Enterprise.** Typically uses individual credentials or certificates with 802.1X authentication. A RADIUS server commonly supports it. RADIUS means Remote Authentication Dial-In User Service.

- **Legacy traps.** WEP means Wired Equivalent Privacy. Original WPA and TKIP, Temporal Key Integrity Protocol, are also outdated. Recognize them in study questions, but avoid them in a new secure setup.

- **Guest access.** A guest network can isolate visitors from internal devices when configured correctly. A captive portal is a sign-in or terms page; the page alone does not prove radio encryption. [16]

> **Remember:** SUPPORTING CONTEXT: Detailed security configuration extends beyond objective 2.2. Never treat a hidden name, MAC filter, or padlock-looking website as proof of a trustworthy wireless network.

## Connection mission: join and verify

🎨 **Visual:** Draw a phone and laptop greeting a cyan access point while a technician checks a gold card.

> Connected is the start. Working is the test!

- **1. Match support.** Confirm the band, Wi-Fi mode, security, and driver support. Turn on the Wi-Fi radio and check airplane-mode settings.

- **2. Choose the right SSID.** Confirm the expected network name with the owner or approved setup instructions. A familiar-looking name can be copied.

- **3. Authenticate.** Enter the correct passphrase or required enterprise credentials. Check certificates according to the organization’s instructions.

- **4. Check IP settings.** DHCP means Dynamic Host Configuration Protocol. It commonly supplies IP settings automatically. Verify the address, gateway, and DNS settings.

- **5. Test the path.** Test the local network, then internet access and name lookup. DNS means Domain Name System. It translates names into addresses and other records.

- **6. Verify the real job.** Try the needed call, website, print job, or transfer. Record the settings and result. Restore only approved settings if a change fails.

> **Remember:** LAYER CLUE: A Wi-Fi authentication failure differs from a DHCP failure, a DNS failure, or an ISP outage. Find the failing step before replacing hardware.

## Bluetooth: the nearby-device team

🎨 **Visual:** Draw blue headphones, a mouse, keyboard, fitness sensor, and phone trading tiny signals around a bright desk.

> Small devices can make a useful local team!

- **Bluetooth.** A wireless technology often used for nearby accessories, audio, sensors, and data links. The name is not an acronym.

- **Band.** Bluetooth operates in 2.4 GHz. It shares spectrum with other users, including 2.4 GHz Wi-Fi. It uses frequency hopping to move among channels. [17]

- **Classic / LE.** Bluetooth Classic includes BR/EDR: Basic Rate / Enhanced Data Rate. LE means Low Energy, often used for sensors and modern low-power features. LE also supports audio in compatible products.

- **PAN.** Personal Area Network. A network around a person and their devices, such as a phone and nearby accessories.

- **Range.** About 33 ft is a familiar short-range classroom example, not a universal limit. Bluetooth range varies greatly with the PHY, power, antennas, environment, and product. [18]

- **Profiles and roles.** A profile defines behavior for a job, such as audio or a keyboard. Two devices need compatible features and roles, not just a Bluetooth logo.

> **Remember:** USE-CASE HOOK: Keyboard, headset, and wearable nearby? Think Bluetooth. Internet over a local wireless LAN? Think Wi-Fi. Their radios may share a band, but the technologies differ.

## Bluetooth pairing: trust before use

🎨 **Visual:** Draw a phone and headphone character comparing matching glowing symbols before exchanging sound notes.

> Match the code. Then test the sound!

- **Pairing.** The process used to establish a trusted relationship and keys between devices. The steps depend on the accessory and operating system.

- **Discovery.** A device makes itself findable as required. Some accessories need a pairing-button press and a limited pairing window.

- **PIN / passkey.** PIN means Personal Identification Number. Enter or confirm the displayed code when the method requires it. Check that the intended devices show matching information.

- **Pairing versus connecting.** A remembered pairing can exist while the device is disconnected. The accessory may be off, out of range, or connected to another host.

- **Troubleshoot.** Check power, charge, radio settings, distance, pairing mode, and existing connections. Remove and recreate the pairing when appropriate, then test the needed function.

- **Secure behavior.** Reject unexpected pairing requests. Leave discovery enabled only as needed, and keep device software current. Follow workplace policy. [1,19]

> **Remember:** A+ SEQUENCE: Enable Bluetooth, enable pairing, find the device, enter or confirm the appropriate code, and test connectivity. The exact screens vary by device.

## NFC & RFID: taps and tagged objects

🎨 **Visual:** Draw a phone almost touching a payment reader beside a separate warehouse arch reading a tagged package.

> TAP! A tiny gap can carry useful data!

- **NFC.** Near Field Communication. A radio technology at 13.56 MHz for very close communication. Common uses include contactless payments, tags, and quick device interactions. [20]

- **NFC distance.** Think a tap or near touch. The NFC Forum describes typical operation up to about 0.8 inches. Hardware and use case affect reach; this is not an exact universal cutoff.

- **RFID.** Radio-Frequency Identification. Readers communicate with tags to identify or track objects. Examples include inventory, badges, and tagged equipment. [21]

- **Passive tag.** A typical passive tag gets operating energy from the reader’s field and returns information. It does not need its own battery for that basic job.

- **Active tag.** Uses a transmitter and usually its own power source. RFID also includes battery-assisted passive designs. Range depends on the tag family and system. [22]

- **Relationship.** NFC is related to high-frequency RFID, but not every RFID reader or tag supports NFC. RFID can use different frequency bands and much longer distances.

> **Remember:** MEMORY HOOK: NFC = near-touch interaction. RFID = identify tagged objects. Bluetooth = nearby device links. Wi-Fi = local wireless networking. Match the job before the buzzword.

## Wireless fault detective

🎨 **Visual:** Draw a robot detective comparing a tablet’s readings in a clear room and behind a thick wall.

> One clue. One test. Then the next clue!

- **Network missing.** Check Wi-Fi radio state, distance, SSID settings, supported band, country settings, and AP status. A 2.4-only client cannot discover a 6 GHz-only network.

- **Password rejected.** Check the intended SSID, passphrase, authentication mode, credentials, and saved profile. Strong signal cannot fix the wrong password.

- **Connected, no internet.** Separate local Wi-Fi from IP addressing, DNS, gateway, and ISP problems. Compare another device and test the local connection first.

- **Slow or unstable.** Check signal, congestion, retries, interference, channel width, client capability, and upstream limits. Compare near-AP and problem-location tests.

- **Drops while walking.** Check coverage gaps, roaming behavior, consistent configuration, and the client driver. More APs help only when planned and connected properly.

- **One accessory fails.** For Bluetooth, check charge, pairing, supported profile, and whether another host holds the connection. Test the actual audio or input function.

> **Remember:** EXAM APPROACH: Use the scenario’s evidence. A symptom can have several causes. Change one thing, verify the result, and document the fix. [1,11]

## Flashcard training: say it before flipping

🎨 **Visual:** Draw a cyan AP teacher and purple headphone student using blank gold flashcards at a neon study desk.

> Recall first. Reveal second. Repeat later!

- **The interactive companion.** Open the PowerPoint in Slide Show mode. Choose a card from its menu. Say your answer aloud, then select **REVEAL ANSWER**.

- **Built-in controls.** Use **TRY AGAIN** to return to the same question, **NEXT CARD** to continue, and **CARD MENU** to choose a topic. The deck uses internal links, with no macros.

- **Honest recall.** Answer before looking. “I recognize that” feels easier than producing the answer yourself. Say the standard, band, and rate in the same order each time.

- **A repeatable routine.** Do a short round now. Revisit missed cards tomorrow, then again a few days later. Adjust the pace to your recall rather than rushing through every card.

- **Paper option.** The next six pages contain the same 24 question-and-answer pairs. Cover the answer column with paper. Reveal one answer after each attempt.

- **Progress.** Keep a tally on paper or in your notes. The PowerPoint provides navigation and answer reveals; it does not save scores or automatically schedule reviews.

> **Remember:** HOW TO OPEN: Use PowerPoint Slide Show for the clickable deck. Editing mode or some preview apps may handle links differently. The PDF remains the complete reading and printable study guide.

## Flashcards 01-04: cover, recall, reveal

🎨 **Visual:** Draw the wireless team practicing with blank gold and blue cards under three bright stars.

> Cover the right column. Say it. Check it!

| QUESTION - recall first | ANSWER - reveal after trying |
| --- | --- |
| **01. 802.11a**

Name its band and maximum PHY rate. | **5 GHz; 54 Mb/s.**

A takes the 5 GHz road. |
| **02. 802.11b**

Name its band and maximum PHY rate. | **2.4 GHz; 11 Mb/s.**

B is the bicycle: 11. |
| **03. 802.11g**

Name its band and maximum PHY rate. | **2.4 GHz; 54 Mb/s.**

G shares B’s band but A’s top rate. |
| **04. 802.11n**

Give the Wi-Fi generation, bands, and maximum PHY rate. | **Wi-Fi 4; 2.4 and 5 GHz; up to 600 Mb/s.**

The maximum needs the top supported stream and width configuration. |

> **Remember:** SELF-CHECK: Mark each answer “got it” or “again” in your own notes. Revisit missed cards before your next full round. All speed ceilings are theoretical PHY rates.

## Flashcards 05-08: cover, recall, reveal

🎨 **Visual:** Draw the wireless team practicing with blank gold and blue cards under three bright stars.

> Cover the right column. Say it. Check it!

| QUESTION - recall first | ANSWER - reveal after trying |
| --- | --- |
| **05. 802.11ac**

Give the Wi-Fi generation, band, and maximum PHY rate. | **Wi-Fi 5; 5 GHz; about 6.9 Gb/s.**

AC operation is 5 GHz. Dual-band AC routers use another mode at 2.4 GHz. |
| **06. 802.11ax**

Give the Wi-Fi generation, usual Wi-Fi 6 bands, and maximum PHY rate. | **Wi-Fi 6; 2.4 and 5 GHz; about 9.6 Gb/s.**

6E extends this technology into 6 GHz. |
| **07. Wi-Fi 6E**

What does 6E add, and which IEEE standard does it use? | **It adds 6 GHz operation using 802.11ax.**

Wi-Fi 6 alone does not promise a 6 GHz radio. |
| **08. Wi-Fi 7**

Name its IEEE standard and expand MLO. | **802.11be; Multi-Link Operation.**

Extra context: up to 320 MHz in allowed 6 GHz operation. |

> **Remember:** SELF-CHECK: Mark each answer “got it” or “again” in your own notes. Revisit missed cards before your next full round. All speed ceilings are theoretical PHY rates.

## Flashcards 09-12: cover, recall, reveal

🎨 **Visual:** Draw the wireless team practicing with blank gold and blue cards under three bright stars.

> Cover the right column. Say it. Check it!

| QUESTION - recall first | ANSWER - reveal after trying |
| --- | --- |
| **09. Band, channel, width**

Which is the neighborhood, street, and street width? | **Band = neighborhood. Channel = street. Channel width = how much spectrum the street occupies.**

GHz labels common bands. MHz measures channel width. |
| **10. 1, 6, 11**

What does this memory hook describe? | **The common U.S. nonoverlapping 2.4 GHz channel plan with 20 MHz channels.**

It is not a universal channel plan for 5 or 6 GHz. |
| **11. Wider channels**

Why can 20 MHz work better than 40 MHz in a crowded 2.4 GHz area? | **It occupies less spectrum, leaving more room for channel reuse and reducing overlap.**

A wider channel can raise the ceiling while worsening a crowded deployment. |
| **12. DFS**

Expand DFS and name the signal that triggers avoidance. | **Dynamic Frequency Selection; radar.**

Some 5 GHz channels require radar detection and channel-avoidance behavior. |

> **Remember:** SELF-CHECK: Mark each answer “got it” or “again” in your own notes. Revisit missed cards before your next full round. All speed ceilings are theoretical PHY rates.

## Flashcards 13-16: cover, recall, reveal

🎨 **Visual:** Draw the wireless team practicing with blank gold and blue cards under three bright stars.

> Cover the right column. Say it. Check it!

| QUESTION - recall first | ANSWER - reveal after trying |
| --- | --- |
| **13. MIMO**

Expand MIMO. What does it add? | **Multiple Input, Multiple Output; multiple transmit/receive paths that can support spatial streams.**

Both endpoints and the channel conditions affect the benefit. |
| **14. OFDMA**

Expand OFDMA and explain its job. | **Orthogonal Frequency Division Multiple Access; assigns channel resources to multiple users in one transmission.**

Picture different seats in one shared shuttle. |
| **15. Speed versus frequency**

Does 5 GHz mean a 5 Gb/s download? | **No. GHz measures radio frequency; Gb/s measures data rate.**

Useful throughput is also lower than the ideal PHY ceiling. |
| **16. Wi-Fi range**

Does each Wi-Fi standard guarantee one maximum distance in feet? | **No. Usable range depends on equipment, walls, interference, band, and the needed performance.**

Measure at the real site and test both directions. |

> **Remember:** SELF-CHECK: Mark each answer “got it” or “again” in your own notes. Revisit missed cards before your next full round. All speed ceilings are theoretical PHY rates.

## Flashcards 17-20: cover, recall, reveal

🎨 **Visual:** Draw the wireless team practicing with blank gold and blue cards under three bright stars.

> Cover the right column. Say it. Check it!

| QUESTION - recall first | ANSWER - reveal after trying |
| --- | --- |
| **17. SSID**

Expand SSID and explain its job. | **Service Set Identifier; the wireless network name.**

A hidden name does not provide meaningful access security. |
| **18. Backhaul**

What does a mesh node’s backhaul carry? | **Traffic between the node and the upstream network.**

It can use Ethernet or a wireless link. |
| **19. Wireless security**

Expand WPA3 and SAE. | **Wi-Fi Protected Access 3; Simultaneous Authentication of Equals.**

WPA3-Personal uses SAE for password-based authentication. |
| **20. Bluetooth**

Name its band and two common jobs. | **2.4 GHz; examples include headphones, keyboards, mice, and sensors.**

About 33 ft is only a short-range example, not a universal limit. |

> **Remember:** SELF-CHECK: Mark each answer “got it” or “again” in your own notes. Revisit missed cards before your next full round. All speed ceilings are theoretical PHY rates.

## Flashcards 21-24: cover, recall, reveal

🎨 **Visual:** Draw the wireless team practicing with blank gold and blue cards under three bright stars.

> Cover the right column. Say it. Check it!

| QUESTION - recall first | ANSWER - reveal after trying |
| --- | --- |
| **21. Bluetooth pairing**

What should you check before accepting a displayed pairing code? | **Confirm it belongs to the intended devices and matches when the method requires it.**

Then test the actual function. A saved pairing does not prove an active connection. |
| **22. NFC**

Expand NFC and give its frequency and typical distance idea. | **Near Field Communication; 13.56 MHz; a tap or near touch, typically up to about 0.8 inches.**

Think contactless payment or a nearby tag. |
| **23. RFID**

Expand RFID. How does a typical passive tag get power? | **Radio-Frequency Identification; from the reader’s radio field.**

Active tags use a transmitter and usually their own power source. |
| **24. Connected, no internet**

Does a strong Wi-Fi icon prove the ISP connection works? | **No. Test local connectivity, IP settings, DNS, gateway, and the ISP path separately.**

Wi-Fi is the local radio link. The internet path has more parts. |

> **Remember:** SELF-CHECK: Mark each answer “got it” or “again” in your own notes. Revisit missed cards before your next full round. All speed ceilings are theoretical PHY rates.

## Sources & exam alignment

🎨 **Visual:** Draw the wireless team checking gold reference cards at a neat neon desk.

> Facts first. Memory hooks help them stick!

**Scope:** Primary objective 2.2. Related support: mobile connectivity 1.2/1.3, network setup, and network troubleshooting. Security and advanced Wi-Fi 7 features are supporting context. [1]

[**1. CompTIA: Core 1 exam objectives**](https://assets.ctfassets.net/82ripq7fjls2/1oSdlyujpaX3GrM0rir6Ge/91afb2be72785281e8fb4c0d9a70c6f4/CompTIA-A-220-1201-Exam-Objectives-3.0.pdf)

[**2. Cisco: Wireless RF reference**](https://www.cisco.com/c/en/us/td/docs/wireless/controller/9800/technical-reference/wireless-rf-reference-guide.html)

[**3. Intel: Wi-Fi generation comparison**](https://www.intel.com/content/www/us/en/products/details/wireless/wi-fi-6-series.html)

[**4. Cisco: Radio channel configuration**](https://www.cisco.com/c/en/us/td/docs/routers/access/1900/software/configuration/guide/Software_Configuration/radio_config.html)

[**5. Intel: Wi-Fi 7 features and products**](https://www.intel.com/content/www/us/en/products/details/wireless/wi-fi-7-series.html)

[**6. FCC: 6 GHz device classes and rules**](https://docs.fcc.gov/public/attachments/FCC-26-1A1.pdf)

[**7. Cisco: 802.11n rates and capabilities**](https://www.cisco.com/c/en/us/products/collateral/wireless/aironet-1850-series-access-points/datasheet-c78-734256.html)

[**8. Cisco: The move to 802.11ac**](https://www.cisco.com/c/dam/global/hr_hr/assets/ciscoconnect/2013/pdfs/Cisco_Small_Cell_Architecture_Patrice_Nivaggioli_Consulting_System_Engineer_SP_EMEAR.pdf)

[**9. Intel: Wi-Fi technical tutorial**](https://www.intel.com/content/dam/www/central-libraries/us/en/documents/2022-06/wi-fi-tutorial-long.pdf)

[**10. Cisco: Wi-Fi 6E and client connectivity**](https://www.cisco.com/c/en/us/support/docs/wireless/catalyst-9166-series-access-points/220526-configure-and-verify-wi-fi-6e-band-opera.pdf)

[**11. Cisco: Wireless speed troubleshooting**](https://www.cisco.com/c/en/us/support/docs/wireless/wireless-lan-controller-software/220877-troubleshoot-wireless-speed-issues.pdf)

Reviewed September 18, 2026. Independent study material, not an official or endorsed CompTIA or Per Scholas publication. Speeds are theoretical maximums unless stated otherwise.

## Sources: setup and short-range wireless

🎨 **Visual:** Draw the wireless team checking gold reference cards at a neat neon desk.

> Facts first. Memory hooks help them stick!

**Source note:** Numbered references in the lessons lead to these primary sources. Follow current local rules and exact device manuals for real installations.

[**12. Apple: Wireless network planning**](https://support.apple.com/guide/deployment/optimize-your-wi-fi-networks-dep2af1caf35/1/web/1.0)

[**13. Apple: Router and AP settings**](https://support.apple.com/en-au/102766)

[**14. Apple: Wi-Fi privacy and identifiers**](https://support.apple.com/en-ca/guide/security/sec31e483abf/web)

[**15. Microsoft: Wi-Fi Direct**](https://learn.microsoft.com/en-us/windows/win32/nativewifi/about-the-wi-fi-direct-api)

[**16. Cisco: Wireless security**](https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-10/config-guide/b_cg810/wlan_security.html)

[**17. Bluetooth SIG: Technology overview**](https://www.bluetooth.com/learn-about-bluetooth/tech-overview/)

[**18. Bluetooth SIG: Understanding range**](https://www.bluetooth.com/learn-about-bluetooth/key-attributes/range/)

[**19. Microsoft: Pair a Bluetooth device**](https://support.microsoft.com/en-us/windows/pair-a-bluetooth-device-in-windows-2be7b51f-6ae9-b757-a3b9-95ee40c3e242)

[**20. NFC Forum: NFC technology**](https://nfc-forum.org/learn/nfc-technology/)

[**21. GS1: RFID standards and uses**](https://www.gs1.org/standards/rfid)

[**22. GS1: Passive and active RFID tags**](https://support.gs1.org/support/solutions/articles/43000733398-what-is-the-difference-between-passive-and-active-tags-)

Original comic artwork created with built-in image generation. Characters and glowing radio paths are memory aids. Physical distances use inches and feet. The flashcard PowerPoint uses clickable links, not macros.

## STAR QUIZ TIME

🎨 **Visual:** Draw the wireless team celebrating under three gold stars with blank flashcards on a bright desk.

> Three missions. You have the clues!

**1. The missing new band:** A laptop supports Wi-Fi 6 on 2.4 and 5 GHz. Can it join a 6 GHz-only network just because both names contain “6”? What extra support does it need?

**2. The crowded classroom:** Three nearby APs use 20 MHz channels in the U.S. 2.4 GHz band. Which familiar three-channel plan avoids their channels overlapping? Does that guarantee zero interference?

**3. The tap station:** A phone sits less than an inch from a payment reader. Which technology best fits: Wi-Fi, Bluetooth, or NFC? Expand its name and give its frequency.

ANSWERS

**1. No. Great catch!** It needs a client radio and software supporting 6 GHz, such as a suitable Wi-Fi 6E or Wi-Fi 7 device, plus compatible security and local permission.

**2. Channels 1, 6, and 11. Nice recall!** They are the common nonoverlapping plan for this setting. Other networks and non-Wi-Fi devices can still cause contention or interference.

**3. NFC. You matched the job!** Near Field Communication operates at 13.56 MHz. Think a tap or near touch; actual range depends on the hardware and use case.
