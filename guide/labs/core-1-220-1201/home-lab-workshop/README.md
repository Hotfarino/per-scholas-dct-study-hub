# Home Lab Workshop

An interactive 3D networking and hardware lab for beginners. Build on the workbench, configure through the laptop, and use simulated tests to explain why a connection succeeds or fails.

**[Open the live demo](https://core-1-reviewed-flashcards.bigdawgroof812178.chatgpt.site/home-lab.html?edition=44#learningBar)** · [Development notes](CHANGELOG.md) · [Validation notes](test-results/home-lab-workshop-44.md)

## Start here

1. Keep the default **Home network → rack server → VMs** lab.
2. Follow the task card: add the laptop, connect power, and switch it on.
3. Press **Continue** after each successful action. The progress bar shows your place.
4. Use **Open laptop → Lab console** for configuration and network tests.

**Equipment** opens a horizontal tray of parts. **Choose lab** selects a new exercise. **Save & files** contains browser saves, export and import. **Guide options** changes the help level, voice and animation. Extra camera controls, connection details and the course outline expand on demand.

A desktop or laptop browser with WebGL 2 is recommended. Small screens use a stacked layout; the simulated OS is easier to use in landscape orientation.

## What you can practice

| Lab | Focus | Guided tasks |
| --- | --- | ---: |
| Home network from zero | Power, cabling, DHCP, rack server and first VM | 42 |
| Rack storage & RAID | Shared storage, failure tolerance and recovery | 35 |
| Virtualization server | Hardware readiness, guest resources and networking | 42 |
| Wireless home office | Access point, Wi-Fi security and client connection | 29 |
| Two isolated networks | IPv4 subnets, gateways and routing | 31 |
| Hybrid cloud & backup | Local infrastructure, cloud model and recovery copy | 40 |
| Find and repair faults | Cable, DHCP and DNS diagnosis | 5 |
| Free build | Open-ended work with an optional orientation | 23 |

Guided mode provides explanations and hints. Practice mode reduces help. Free mode hides the checklist. All three use the same connection and configuration rules.

- Drag devices and cables; mount compatible equipment in an 18U rack.
- Watch power and link status, inspect sockets, and diagnose failed connections.
- Configure Windows-style or Ubuntu-style desktops, router pages, Device Manager, services and a restricted terminal.
- Practice RAID 0/1/5/6/10, virtual-switch isolation, cloud models and backup.
- Save in the current browser or export a portable JSON build. Browser storage does not sync between devices or site addresses.

## Run locally

Clone this repository, then run:

```sh
cd guide/labs/core-1-220-1201/home-lab-workshop
python3 -m http.server 8768 --bind 127.0.0.1
```

Open **http://127.0.0.1:8768/home-lab.html**. The lab is static and requires no API key or backend. Serve it over HTTP; opening the HTML as a local file will block module loading in many browsers. The navigation link to the wider study hub is not part of this standalone folder; use the live demo to browse the full hub.

## Run the tests

Use Node.js 24 and npm:

```sh
npm ci
npm test
```

The suite covers engine constraints, all 247 guided tasks, laptop configuration and browser behavior, save-file validation, and workshop navigation/state preservation. DOM tests use LinkeDOM and replace WebGL with a stub; they do not prove rendered geometry or pointer behavior. Visual and interaction checks are recorded in the validation notes. GitHub Actions runs the same command when this lab changes.

## How it works

| Files | Responsibility |
| --- | --- |
| `lab-engine.js` | Device, cable, power, IPv4, RAID and VM rules |
| `lab-app.js` | State changes, configuration handlers and saves |
| `lab-courses.js`, `lab-learning.js` | Courses, explanations and completion checks |
| `lab-world*.js`, `lab-blender-assets.js` | Three.js scene, models and physical interaction |
| `lab-desktop.js`, `lab-os*.js` | Restricted OS, applications and command simulation |
| `lab-management.js`, `lab-control-center.js` | Management access checks and laptop tool panels |
| `lab-presentation.js`, `lab-presentation.css` | Workshop layout, navigation and disclosures |

Bundled Three.js and GLB assets let this folder run without a front-end build. The larger hosted study site has its own build and progress service; those are not needed for this lab.

## Boundaries and educational accuracy

This is an independent educational simulation aligned with selected CompTIA A+ 220-1201 and 220-1202 fundamentals. It is not official CompTIA material or a copy of CertMaster. Windows, Ubuntu, Chrome and Firefox are restricted teaching interfaces; no real OS, shell, VM, packets or cloud resources run. Numeric readings derive from the model rather than measurements of your computer.

The in-app **Lab manual** documents simplifications and links to CompTIA, Microsoft, Cisco, Dell and NIST references. IPv6 routing, tagged trunks, STP, dynamic routing and radio propagation are outside this model. Animated pulses show power/link readiness, not measured data throughput. Rack placement and VLAN practice extend the A+ foundations.

Artwork and interface references: [desktop credits](lab-os-artwork-credits.txt). Keep existing asset attribution when sharing. Third-party marks belong to their owners; this project does not imply endorsement.

## Reporting a problem

[Open an issue](https://github.com/Hotfarino/per-scholas-dct-study-hub/issues) with the lab, task number, browser, expected result and actual result. Include an exported build if useful, after checking its device names and settings for information you do not want to share.
