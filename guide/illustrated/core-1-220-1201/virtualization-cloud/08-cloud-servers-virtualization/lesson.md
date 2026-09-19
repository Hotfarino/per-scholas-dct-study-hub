# Cloud, Servers, and Virtualization — Text Companion

[PDF and interactive flashcard downloads](README.md) · [All illustrated guides](../../../README.md)

Network City, Issue 08, edition 1.0.0. Reviewed September 19, 2026. The PDF contains the finished illustrations.

## Three heroes, one connected world

🎨 **Visual:** Draw a smiling cloud above a real data center. Neon cyan server heroes and a purple VM wizard help a student.

> Serve a job. Share the hardware. Rent a service!

- **Server.** A computer or program that provides a service to other devices. A client asks for that service. Your browser is a client when it asks a web server for a page.

- **Virtualization.** Software creates separate computing environments from physical resources. One real computer can run several virtual computers, each with its own work.

- **Cloud computing.** Computing resources become services you can request through a network. Real machines in real buildings still do the work. The cloud is not floating storage in the sky.

- **How they connect.** A cloud provider may use virtual machines on physical servers to run your app. A server can also run at your school without being a cloud service.

- **Our comic rule.** The characters help memory. The bold definitions explain the real technology. Extra lab tips build understanding but are not a promise of an exact exam question.

> **Remember:** EXAM MAP: 220-1201 objective 2.3 covers host services; 4.1 covers virtualization; 4.2 covers cloud concepts. Related port details support 2.1. Independent study material. [1,2]

## Servers: the service crew

🎨 **Visual:** Draw a googly-eyed server librarian in a glowing rack. Add gold CPU and memory helpers, vents, rails, and blue lights.

> Ask for help. The server does its job!

- **Client-server.** A client sends a request. A server responds. One server can help many clients. A computer can act as a client for one task and a server for another.

- **Role / service.** A role is a job, such as sharing files. A service is a program that performs work, often in the background. One machine can run several roles if its resources and security plan allow it.

- **Host / endpoint.** A host is a network-connected system. An endpoint is a device at an end of communication. In virtualization, host also means the system that supplies a VM’s physical resources.

- **Physical versus virtual server.** A physical server is hardware. A virtual server runs in a software-created computer. Both can offer DNS, web pages, files, or other services.

- **On-premises / data center.** On-premises means at an organization’s own site. A data center is a facility for computing equipment, power, cooling, and networking.

> **Remember:** SCENARIO: A tiny office computer shares a folder with five coworkers. It performs a server role even if it looks like a desktop. “Server” describes the job as well as a hardware category. [1]

## Server hardware & safe rack space

🎨 **Visual:** Draw a googly-eyed server librarian in a glowing rack. Add gold CPU and memory helpers, vents, rails, and blue lights.

> Strong parts need air, power, and room!

- **CPU / RAM.** Central Processing Unit does calculations. Random Access Memory holds active work. More users can need more CPU time and RAM. RAM is not long-term file storage.

- **Storage / NIC.** An SSD, Solid-State Drive, stores data without spinning platters. An HDD, Hard Disk Drive, uses spinning platters. A NIC, Network Interface Card, connects the server to a network.

- **Rack unit: U.** One U equals 1.75 inches of vertical rack space. A 2U device uses 3.5 inches. Rack depth, rails, weight, and cooling space still must match the hardware. [15]

- **UPS / redundant power.** An Uninterruptible Power Supply provides temporary battery power. Redundant power supplies can reduce failures when correctly connected. Neither gives unlimited runtime.

- **Safe handling.** Follow the maker’s rack and lifting instructions. Keep heavy gear low, stabilize the rack, and protect airflow. Shut down and unplug before service unless a supported hot-swap procedure says otherwise.

> **Remember:** EXTRA HARDWARE CONTEXT: Use ESD (Electrostatic Discharge) precautions for sensitive parts. Never open a power supply. A server’s safe capacity depends on its exact model and workload; there is no universal speed or clearance. [1,15]

## DNS: the name-finding librarian

🎨 **Visual:** Draw a neon service hall. A DNS librarian, address-lease clerk, file robot, and web-page helper welcome laptops.

> Give me a name. I help find its address!

- **DNS - Domain Name System.** A distributed naming system. One common job maps a host name to an IP address. IP means Internet Protocol. A name is easier to remember than a long address.

- **Query / resolver.** A query is a question. A resolver finds an answer for the client. It may use a saved answer or ask other DNS servers.

- **Record / cache.** A record stores a piece of DNS information. A cache keeps an answer for reuse. An A record holds an Internet Protocol version 4 (IPv4) address. An AAAA record holds a version 6 (IPv6) address.

- **Other records.** CNAME means Canonical Name: an alias points to another name. MX means Mail Exchanger: it identifies mail servers for a domain. These are useful naming terms, beyond the basic role.

- **Port clue.** DNS commonly uses UDP or TCP port 53. UDP means User Datagram Protocol. TCP means Transmission Control Protocol. A port number identifies a service endpoint in network traffic.

> **Remember:** EXAM CLUE: A resource works by IP address but fails by name? Investigate DNS settings and name resolution. This clue suggests a cause; it does not prove one. DNS does not lease client IP settings. [1,6]

## DHCP: the address-lease clerk

🎨 **Visual:** Draw a neon service hall. A DNS librarian, address-lease clerk, file robot, and web-page helper welcome laptops.

> Here is your address—and the rules to use it!

- **DHCP - Dynamic Host Configuration Protocol.** Automatically gives clients network settings. A lease lets a client use an address for a period of time. A client normally renews its lease.

- **Scope / pool.** The range of addresses and settings a DHCP server can offer for a network. It must not hand the same active address to two clients.

- **Options.** Extra settings can include subnet mask, default gateway, and DNS server addresses. The mask helps identify the local network. The gateway leads toward other networks.

- **Reservation / static address.** A reservation makes DHCP offer a chosen address to a matching client. A static address is manually configured. Plan both to avoid conflicts.

- **IPv4 exchange.** Discover, Offer, Request, Acknowledge: DORA. The client looks for help, the server offers, the client requests, and the server confirms. DHCPv4 uses UDP server port 67 and client port 68.

> **Remember:** MEMORY HOOK: DHCP = settings desk. DNS = name desk. A Windows IPv4 address beginning 169.254 can suggest automatic link-local addressing after DHCP fails. Check the link and DHCP path. [1,7]

## File & print servers: shared helpers

🎨 **Visual:** Draw a neon service hall. A DNS librarian, address-lease clerk, file robot, and web-page helper welcome laptops.

> One shared place. Clear rules for every user!

- **File server.** Stores files and offers network access. A shared folder is a named location that allowed users can open. Central storage helps teams work from a common location.

- **SMB - Server Message Block.** A network protocol for sharing files and other resources. Modern direct-hosted SMB commonly uses TCP port 445. A protocol is a set of communication rules. [1,8]

- **Permissions.** Rules decide who can read, change, or remove data. A network connection alone does not grant access. Check both sharing rules and file-system permissions.

- **Print server.** Accepts jobs for shared printers. A queue is the waiting line. A spooler stores and schedules print data. One stuck job can delay others.

- **NAS - Network-Attached Storage.** A network device built mainly to provide storage services. It often offers file shares. A NAS can still fail, so important files need backups.

> **Remember:** SCENARIO: Everyone can reach the file server, but one user cannot open a folder. Check the user’s permissions before replacing a network cable. A shared drive is not automatically a backup. [1,8]

## Web & database: show it, store it

🎨 **Visual:** Draw a neon service hall. A DNS librarian, address-lease clerk, file robot, and web-page helper welcome laptops.

> The web counter serves pages. The database keeps records!

- **Web server.** Handles requests for web content. A browser may request a page, image, or data for an app. Static content is already stored; dynamic content can be built when requested.

- **HTTP / HTTPS.** Hypertext Transfer Protocol carries web requests and responses. HTTPS is HTTP protected with TLS, Transport Layer Security. Learn ports 80 for HTTP and 443 for HTTPS. [1]

- **Database server.** Stores organized data and answers requests to find or change it. An online store might keep product names, prices, and stock counts in a database.

- **Query / SQL.** A query asks for data or an action. SQL means Structured Query Language. Many relational databases use it. A table groups data into rows and columns.

- **Separate jobs.** The web app handles the visitor’s request and may ask the database for results. A database need not be directly open to visitors on the internet.

> **Remember:** MEMORY HOOK: Web = the service counter. Database = the organized records behind it. HTTPS protects a connection; the padlock alone does not prove that a website is honest. [1,16]

## Mail servers: the message route

🎨 **Visual:** Draw a neon traffic marshal sending request carts to two servers. Add a proxy desk and a shield-shaped mail gate.

> Send, store, and read are different jobs!

- **Mail server.** Receives, routes, and stores electronic mail. A mailbox is a user’s message store. A client app or webmail page lets the user work with it.

- **SMTP - Simple Mail Transfer Protocol.** Moves outgoing mail and relays mail between servers. Core 1 names TCP port 25. Authenticated client submission often uses other ports configured by the provider.

- **IMAP - Internet Message Access Protocol.** Lets a client work with mail kept on a server. Folders and message state can stay in step across devices. Core port: 143.

- **POP3 - Post Office Protocol version 3.** Retrieves messages from a server. Whether copies remain there depends on settings. Core port: 110. POP3 does not always mean “delete every server copy.”

- **Secure connections.** Encryption settings must match the service. Ports 993 for IMAP over TLS and 995 for POP3 over TLS are useful extra context. A port number alone does not prove encryption.

> **Remember:** SCENARIO: A user can read old messages but cannot send new ones. Check the outgoing-mail service, authentication, connection, and settings. Knowing the server’s job helps narrow the problem. [1,17]

## AAA: three guards at the gate

🎨 **Visual:** Draw three bright purple and cyan guards checking identity, opening an allowed door, and writing a record.

> Who are you? What may you do? What happened?

- **AAA.** Authentication, Authorization, and Accounting. The three words describe related but different security jobs. [9]

- **Authentication.** Checks a claimed identity. A password or another approved sign-in method helps show who the user is. MFA means Multifactor Authentication: more than one factor type.

- **Authorization.** Decides what an identified user may do. A student may read a class folder. An instructor may also edit it. Successful sign-in does not mean unlimited access.

- **Accounting.** Records activity or resource use. Logs can show when someone connected or how long a session lasted. This is recordkeeping, not only money bookkeeping.

- **Least privilege.** Give people and services only the access needed for their work. Use a normal account for routine tasks and approved admin access for special changes.

> **Remember:** MEMORY HOOK: Identity badge = authentication. Allowed door = authorization. Activity notebook = accounting. Do not swap the three A words on an exam scenario. [1,9]

## Syslog & NTP: records need time

🎨 **Visual:** Draw three bright purple and cyan guards checking identity, opening an allowed door, and writing a record.

> Write the event. Keep the clocks together!

- **Syslog.** A standard way for systems to send event messages. A syslog server collects records from devices. “Syslog” is a name tied to system logging, not a three-letter acronym. [10]

- **Log / severity.** A log is a record of events. Severity describes how serious an event is. A central collector helps compare clues from several systems.

- **NTP - Network Time Protocol.** Helps synchronize device clocks over a network. “Synchronize” means keep things in step. NTP normally uses UDP port 123. [11]

- **Why time matters.** Accurate timestamps help place events in order. Large clock errors can also break some sign-in and certificate checks. Correct time does not fix the event itself.

- **Transport clue.** Traditional syslog often uses UDP 514. Other transports exist, including protected syslog over TLS. These port details add context; do not assume all logs travel the same way.

> **Remember:** SCENARIO: Two logs seem to show a reply before its request. Compare clock settings and time zones before trusting the timeline. NTP sets the time; syslog carries the event messages. [1,10,11]

## Network appliances: helpful middle stops

🎨 **Visual:** Draw a neon traffic marshal sending request carts to two servers. Add a proxy desk and a shield-shaped mail gate.

> Sort the traffic. Share the work. Block the junk!

- **Appliance.** A device or packaged virtual system built for a focused job. The same kinds of functions can also be offered as software or cloud services.

- **Spam gateway.** Filters unwanted or suspicious mail before it reaches users. Filtering reduces junk and threats, but users still need good judgment.

- **UTM - Unified Threat Management.** Combines security functions in one system. A product may combine a firewall, intrusion prevention, malware scanning, and content filtering. Features depend on the product.

- **Load balancer.** Spreads requests among available servers. Health checks can avoid sending work to a failed server. It needs suitable configuration and enough healthy capacity. [12]

- **Proxy server.** An intermediary that makes or handles requests on behalf of another system. A forward proxy helps clients; a reverse proxy sits in front of servers. It may filter, cache, or relay traffic.

> **Remember:** MEMORY HOOK: Load balancer = traffic marshal. Proxy = middle desk. Spam gateway = mail sorter. UTM = combined security checkpoint. These roles can overlap in a product. [1,12]

## Embedded systems: small, focused jobs

🎨 **Visual:** Draw a googly-eyed server librarian in a glowing rack. Add gold CPU and memory helpers, vents, rails, and blue lights.

> Tiny computer. Big real-world job!

- **Embedded system.** A computer built into another product for a focused purpose. It may have a small processor, limited memory, and special software.

- **IoT - Internet of Things.** Connected physical devices that sense, report, or act. Smart thermostats, sensors, and connected cameras are examples. They may use a gateway instead of talking straight to the internet.

- **SCADA.** Supervisory Control and Data Acquisition. A system gathers information from industrial equipment and supports monitoring and control. Think of water-pump or power-system operations. [18]

- **Legacy.** Older technology that remains in use. It may need old interfaces or unsupported software. Age alone does not tell you which changes are safe.

- **Safe support.** Inventory the devices, change default credentials, and separate access as policy requires. Use vendor-approved updates and maintenance windows. Ask the responsible operations team before disrupting control equipment.

> **Remember:** EXAM CLUE: SCADA relates to monitoring and controlling physical processes. IoT relates to connected things. They can overlap, but the terms do not mean exactly the same thing. [1,18]

## Cloud: a service, not a magic place

🎨 **Visual:** Draw three colorful rental workshops: computer building blocks, a ready tool bench, and a finished app counter.

> Request what you need. Real hardware does the rest!

- **On-demand self-service.** Users can request resources through an approved portal or tool without a person manually building every request. Access and spending rules still apply.

- **Broad network access.** Services can be reached through a network from supported devices. A private cloud may use a private network, not the public internet.

- **Resource pooling.** The provider combines resources and assigns them where needed. Like a shared fleet of rental cars, each customer does not need to buy the whole fleet.

- **Rapid elasticity.** Capacity can grow and shrink as demand changes. Cloud systems can make this fast. It is not a promise of unlimited capacity.

- **Measured service.** Usage is tracked, reported, or controlled. Some services charge by measured use; others use subscriptions or bundled plans.

> **Remember:** NIST = National Institute of Standards and Technology. These five traits form its cloud definition. A remote file server alone does not automatically provide every cloud trait. [2]

## IaaS, PaaS & SaaS: choose your job

🎨 **Visual:** Draw three colorful rental workshops: computer building blocks, a ready tool bench, and a finished app counter.

> How much of the stack will your team manage?

| Model | Full name | Typical customer work |
| --- | --- | --- |
| IaaS | Infrastructure as a Service | Guest OS, installed apps, data, and access |
| PaaS | Platform as a Service | App code, data, and app configuration |
| SaaS | Software as a Service | Using/configuring the app; data and access |

- **Stack.** The layers that make an app work: hardware, operating system, runtime, and application. OS means Operating System. A runtime is software that runs an application’s code.

- **Control versus effort.** IaaS usually gives more system control and more management work. SaaS gives a finished app with less control of the underlying system.

> **Remember:** MEMORY HOOK: IaaS = rent building blocks. PaaS = rent a ready workshop. SaaS = use the finished shop. Exact responsibilities depend on the service and agreement. [2,3,4]

## IaaS: rent the computing blocks

🎨 **Visual:** Draw three colorful rental workshops: computer building blocks, a ready tool bench, and a finished app counter.

> You manage the guest. We run the building!

- **What you get.** Infrastructure as a Service supplies resources such as virtual compute, network, and storage. You can build your own software environment on top.

- **Your work.** For a rented VM, you usually install and patch the guest OS, configure apps, control access, and protect your data. The provider manages the underlying physical infrastructure.

- **Why choose it.** Use it when an app needs OS-level control or a familiar server setup. An organization can move a server workload without buying a new physical machine.

- **Example mission.** A school rents a VM, installs a supported OS, patches it, and runs a practice website. Renting a VM does not make those guest-software tasks disappear.

- **Watch the whole bill.** Compute is only one item. Disks, backup, network transfer, and other services may add cost. Stopping a VM may leave billable storage behind.

> **Remember:** EXAM CLUE: “We need control over the operating system” points toward IaaS. It does not mean the customer repairs the provider’s physical server. [2,3,5]

## PaaS: bring your app to the workshop

🎨 **Visual:** Draw three colorful rental workshops: computer building blocks, a ready tool bench, and a finished app counter.

> The tools are ready. Bring your code!

- **What you get.** Platform as a Service offers an environment for building or running applications. The provider handles the underlying infrastructure and supported platform pieces.

- **Your work.** You manage your app code, data, access choices, and settings within the service. You still fix bugs and protect secrets such as private access keys.

- **Runtime / framework.** A runtime executes code. A framework supplies reusable tools and patterns for building an app. A platform supports particular languages and versions.

- **Use case.** A development team deploys a web app to a managed app platform. It can focus on features instead of patching the platform’s underlying OS.

- **Tradeoff.** The platform’s supported features and limits matter. Moving an app to another platform can require changes. Do not assume every PaaS runs every program.

> **Remember:** EXAM CLUE: “We will deploy our code while the provider manages the platform” points toward PaaS. The customer still owns app-level decisions and data responsibilities. [2,3,4]

## SaaS: use the finished application

🎨 **Visual:** Draw three colorful rental workshops: computer building blocks, a ready tool bench, and a finished app counter.

> Sign in and do the job!

- **What you get.** Software as a Service delivers a provider-run application. Users access it through supported software, often a web browser or mobile app.

- **Your work.** Set up users and allowed access. Choose sharing settings. Protect accounts and handle your organization’s data. The provider runs the application and its underlying systems.

- **Use cases.** Hosted email, online document editing, and customer-management apps can be SaaS. Buying a downloadable desktop app alone does not automatically make it SaaS.

- **Subscription / tenant.** A subscription is an agreement for service use. A tenant is a customer’s logically separated service environment. Several tenants may share underlying resources.

- **Check the service.** Ask about supported devices, offline use, data export, recovery, and account controls. A browser-based app can still have outages or require a license.

> **Remember:** EXAM CLUE: “Users need a ready-made app with no server management” suggests SaaS. Security is still shared: protect identities, data, devices, and the settings you control. [2,4,5]

## Four places a cloud can belong

🎨 **Visual:** Draw a cyan public plaza, purple private garden, shared school garden, and gold bridge joining two cloud spaces.

> Who uses this cloud—and how do clouds connect?

| Model | Who or what it serves | Memory picture |
| --- | --- | --- |
| Public | Provider offers cloud services to many customers | Public rental plaza |
| Private | Exclusive use by one organization | One organization’s garden |
| Community | Organizations with shared needs or concerns | Shared school garden |
| Hybrid | Distinct clouds connected to work together | Bridge between cloud spaces |

- **Private can be elsewhere.** A private cloud may be on-premises or hosted off-site. Ownership, management, and location can vary.

- **Public does not mean open data.** Public cloud describes service availability. Customer data still needs access controls; it is not meant to be readable by everyone.

> **Remember:** EXAM TRAP: A private network alone is not a private cloud. A public cloud plus a private cloud linked for data or app use is a typical hybrid example. Community cloud serves shared organizational concerns. [2]

## Shared, dedicated & multitenant

🎨 **Visual:** Draw a cyan public plaza, purple private garden, shared school garden, and gold bridge joining two cloud spaces.

> Share the building. Keep the apartments separate!

- **Shared resources.** Several customers use a common pool of capacity. Logical controls keep their work separated. Sharing hardware does not mean users can freely read each other’s files.

- **Dedicated resources.** Capacity or hardware is reserved for a customer under the service’s terms. It can give isolation or control but often costs more. Check what is actually dedicated.

- **Multitenancy.** A system serves multiple tenants with separation between them. Tenants may share an application, platform, or infrastructure while keeping distinct settings and data.

- **Private is a different question.** Private cloud describes exclusive organizational use. Dedicated hardware describes resource allocation. A public-cloud provider can offer dedicated resources.

- **Noisy neighbor.** Extra context: another workload can compete for shared capacity. Limits and resource controls help manage this. Sharing is useful, but it requires careful design.

> **Remember:** MEMORY HOOK: Deployment model = who the cloud serves. Service model = what you manage. Resource model = what is shared or reserved. Ask each question separately. [2,4]

## Scale & elasticity: handle the crowd

🎨 **Visual:** Draw a cheerful cloud manager adding server carts for a busy line. Park spare carts beside a glowing usage meter.

> Add help for the rush. Give it back when quiet!

- **Scalability.** The ability to handle more work by adding resources. Think of a store that can expand when its customer count grows.

- **Vertical scaling: up or down.** Change the resources in one system, such as adding RAM or CPU capacity. A bigger truck carries more in one trip.

- **Horizontal scaling: out or in.** Add or remove systems. More delivery trucks share the work. The application must be designed to use them well.

- **Elasticity.** Adjust capacity to match changing demand, including shrinking afterward. Cloud services may automate this with rules. Scaling once does not by itself prove elasticity.

- **Limits.** Quotas, budgets, start-up time, and app design still matter. A quota is an allowed limit. Extra servers cannot fix every database lock or slow network path.

> **Remember:** SCENARIO: A site adds instances for a ticket sale, then removes them after the rush. That is elasticity. The load balancer can direct requests across the active servers. [2,12]

## Metered use, speed & transfer

🎨 **Visual:** Draw a cheerful cloud manager adding server carts for a busy line. Park spare carts beside a glowing usage meter.

> Watch the meter—and the road!

- **Metered utilization.** The provider measures resources consumed. Billing may include compute time, stored data, requests, and transfer. A subscription may also have included allowances.

- **Ingress / egress.** Ingress means data enters the named service or network. Egress means data leaves it. State the viewpoint. Downloading from a cloud service is usually egress from that service.

- **Costs vary.** Do not memorize “all ingress is free” or one price per gigabyte. Region, destination, service, and plan affect charges. Check the current rate card and billing units.

- **Bandwidth / latency.** Bandwidth is link capacity. Throughput is the useful transfer rate actually achieved. Latency is delay, often in ms: milliseconds. A fast link can still have a long wait.

- **Mbps / Gbps.** Megabits per second and gigabits per second measure bit rate. A byte has eight bits. Cloud service models have no fixed speed or cable-distance rating.

> **Remember:** MEMORY HOOK: Bandwidth = road width. Throughput = cars that get through. Latency = travel delay. Watch budget alerts and unused resources as well as performance. [2,19]

## Availability: keep the service reachable

🎨 **Visual:** Draw a snapshot camera beside a server and a separate backup vault. Add heroes practicing with bright blank flashcards.

> A spare part helps only when the plan works!

- **Availability.** How often a service can be used when needed. High availability uses design choices to reduce downtime. No design makes every possible failure disappear.

- **Redundancy / failover.** Redundancy adds extra components or copies. Failover moves work to another working resource after a failure. Test the process instead of assuming it works.

- **Region / zone.** A region is a geographic service area. An availability zone is a separate failure area within a region in providers that use this model. Exact designs differ.

- **SLA - Service Level Agreement.** Defines service commitments and conditions. An uptime target is not a promise that your whole application will never fail. Read the covered service, exclusions, and remedies.

- **Availability versus backup.** Live replicas can repeat accidental deletion or corruption. Backups preserve recoverable copies. A backup also needs a tested restore process.

> **Remember:** EXAM CLUE: Several servers can improve availability when traffic, data, and failover are designed for it. One shared power source or one failed database can still stop the service. [2,20]

## File sync: keep copies in step

🎨 **Visual:** Draw a snapshot camera beside a server and a separate backup vault. Add heroes practicing with bright blank flashcards.

> Sync follows changes. Recovery needs a plan!

- **File synchronization.** Keeps selected files aligned across locations or devices. A sync client watches changes and exchanges them with the service.

- **Online-only / offline.** An online-only item may show a name without a full local copy. Download it or mark it for offline use as supported before losing internet access.

- **Conflict.** Two people or devices may change a file before syncing. The service may merge changes, ask for a choice, or keep conflict copies. Check which version is correct.

- **Deletion travels too.** A deleted or damaged file can sync to other locations. Recycle bins and version history may help, but retention periods and coverage vary.

- **Backup.** A recoverable copy kept under a recovery plan. Sync, sharing, and backup can be features of one product, but their jobs differ. Test restoration of important data.

> **Remember:** SCENARIO: A file vanishes from the laptop and cloud after a deletion. Sync may be working exactly as configured. Look for supported recovery options and separate backup copies. [21]

## Shared responsibility: protect your part

🎨 **Visual:** Draw three bright purple and cyan guards checking identity, opening an allowed door, and writing a record.

> The provider has jobs. Your team has jobs too!

- **Provider responsibilities.** The provider protects and operates the service layers it controls. Physical buildings, hardware, and managed software layers depend on the chosen service.

- **Customer responsibilities.** Protect identities and data. Choose safe access and sharing settings. Manage the devices and software layers assigned to your team.

- **IaaS versus SaaS.** With an IaaS VM, the customer normally patches the guest OS. With SaaS, the provider manages the application stack, but customer accounts and data choices still matter.

- **Encryption.** Transforms readable data so it needs the right key to read. In transit means moving between systems. At rest means stored. Use the service’s supported protections and protect its keys.

- **Policy / access.** Use approved sign-in methods, least privilege, and review logs. Know which data may enter the service and which recovery features your organization needs.

> **Remember:** EXAM TRAP: “It is in the cloud” does not remove customer security duties. Match the responsibility to the service model and actual agreement. [4,5]

## Virtual machines: computers inside a computer

🎨 **Visual:** Draw one physical server as an apartment house. A purple hypervisor wizard gives resources to three separate OS rooms.

> One real machine. Several separate guests!

- **VM - Virtual Machine.** A software-created computer with virtual hardware. It runs a guest operating system and applications while using physical resources supplied by a host.

- **Host / guest.** The host provides the physical resources. A guest is an OS running in a VM. Multiple guests may share a host, but each VM has its own OS environment.

- **Hypervisor.** Software that creates and runs virtual machines and manages their access to resources. Picture a fair apartment manager dividing space and utilities.

- **Virtual hardware.** A VM can have virtual CPUs, memory, disks, and network adapters. They represent resources; they do not add unlimited real computing power.

- **Use cases.** Run separate services, build practice labs, test software, or support a compatible legacy environment. A broken host can affect many guests at once.

> **Remember:** MEMORY HOOK: Physical host = apartment building. Hypervisor = manager. VMs = separate apartments, each with its own OS. Virtualization can exist without cloud computing. [1,22]

## Type 1 & Type 2 hypervisors

🎨 **Visual:** Draw one physical server as an apartment house. A purple hypervisor wizard gives resources to three separate OS rooms.

> Look beneath the guests to name the type!

| Type | Typical layer order | Common use |
| --- | --- | --- |
| Type 1: bare-metal | Hardware → hypervisor → guest VMs | Server consolidation; managed virtual hosts |
| Type 2: hosted | Hardware → host OS → hypervisor app → guests | Desktop labs and software testing |

- **Type 1.** Runs directly on the hardware layer. It may still have a management OS or special management partition. Microsoft Hyper-V is Type 1 even when Windows provides its familiar interface. [22]

- **Type 2.** Runs as an application supported by a host operating system. Oracle VirtualBox is a common hosted example. Features and supported guests depend on the version.

> **Remember:** EXAM TRAP: A desktop-looking screen does not prove Type 2. Classify where the hypervisor runs. The management screen is not the whole architecture. [1,22,28]

## VM requirements: budget real resources

🎨 **Visual:** Draw one physical server as an apartment house. A purple hypervisor wizard gives resources to three separate OS rooms.

> Do not give away RAM the host still needs!

- **CPU support.** Check the hypervisor’s processor and hardware-virtualization requirements. Intel VT-x means Virtualization Technology for x86; AMD-V means AMD Virtualization. A setting in BIOS or UEFI may need to be enabled.

- **Firmware terms.** BIOS means Basic Input/Output System. UEFI means Unified Extensible Firmware Interface. They initialize hardware before the OS starts. Change settings only as the system guide directs.

- **SLAT.** Second Level Address Translation. Hardware help for translating guest memory addresses. Some hypervisors require it. Check the product rather than assuming all computers qualify.

- **RAM and CPU budget.** Leave capacity for the host and every active guest. A vCPU is a virtual CPU assigned to a VM. Assigning many vCPUs does not create more physical CPU cores.

- **Storage / network / license.** Allow space for guest disks, growth, and snapshots. Provide suitable network access and security controls. Guest OS and app licenses still apply.

> **Remember:** EXTRA LAB EXAMPLE: GB means gigabytes. A 16 GB RAM host needs 4 GB for its own work. Two 4 GB guests leave 4 GB of nominal headroom. Overhead and workloads still matter; this is arithmetic practice, not a universal sizing rule. [24]

## Virtual disks, snapshots & backups

🎨 **Visual:** Draw a snapshot camera beside a server and a separate backup vault. Add heroes practicing with bright blank flashcards.

> A quick rewind is useful. Keep a real rescue copy!

- **Virtual disk.** Storage presented to a VM as a disk. It is often backed by files on host storage. If that storage fills up or fails, the guest can fail too.

- **Thin / dynamic allocation.** A disk file can grow as data is written, up to its configured limit. The advertised virtual capacity is not a promise that the host has enough free physical space.

- **Snapshot / checkpoint.** Records a VM’s state at a point in time so supported changes can be rolled back. It may involve disk differences and, depending on type, memory state.

- **Why it is not enough.** A checkpoint may depend on the original disk files. Losing the host storage can destroy both. Keep separate backups and test restores. Standard checkpoints can also have app-consistency limits.

- **Safe use.** Use snapshots for short-term change testing under the product’s guidance. Watch growth. Reverting can discard newer work. Never manually delete needed disk-chain files.

> **Remember:** EXAM CLUE: “Undo a test change quickly” suggests a snapshot or checkpoint. “Recover after losing the original storage” needs an independent backup. Details and names vary by hypervisor. [25,28]

## Virtual networking: choose the path

🎨 **Visual:** Draw three neon paths: a translator gate, a bridge to the LAN, and an enclosed host-only circle.

> Private lab, shared LAN, or translated exit?

- **vNIC / virtual switch.** A virtual Network Interface Card connects a VM. A virtual switch moves traffic among connected virtual ports and, when configured, a physical network.

- **NAT - Network Address Translation.** A typical NAT mode lets a guest reach outward through translated addresses. Unsolicited inbound access commonly needs extra configuration, such as port forwarding.

- **Bridged mode.** Connects the guest to the host’s physical network as a network participant. It needs suitable addressing and follows that network’s access rules.

- **Host-only mode.** In VirtualBox, guests can talk to each other and the host on a private virtual network. Outside access is not provided by that mode alone.

- **Internal network.** In VirtualBox, selected guests can share a private network without the host on that network. Product names differ. Added adapters or routing can change the isolation.

> **Remember:** LAB RULE: Choose only the access your lab needs. NAT is not a complete security boundary. A VM with another bridged adapter may still reach the real LAN. LAN = Local Area Network. [23]

## Sandboxes, legacy apps & test labs

🎨 **Visual:** Draw one physical server as an apartment house. A purple hypervisor wizard gives resources to three separate OS rooms.

> Try the change in a controlled room first!

- **Sandbox.** An isolated place to test behavior with limited effect on other systems. Isolation depends on configuration. Shared folders, clipboards, USB (Universal Serial Bus) devices, and networks can create paths out.

- **Development / testing.** Development builds software. Testing checks its behavior. VMs let a team try different supported OS or app versions without changing each physical computer.

- **Legacy compatibility.** A VM may keep an older OS and app working when the hypervisor supports them. It does not make unsupported software safe, licensed, or compatible with every new CPU.

- **Cross-platform work.** Use another supported OS environment on one computer. CPU architecture matters. Emulation can imitate different hardware; ordinary virtualization does not promise every architecture will run.

- **Application virtualization.** Separates an app from some local system details through packaging, isolation, or remote delivery. It differs from running an entire separate guest OS for every app.

> **Remember:** SAFE PRACTICE: Use known, harmless test software and an approved lab. A sandbox is not a reason to run unknown malware on a personal computer. Patch the host and supported guests. [1,22,28]

## Containers: apps sharing a kernel

🎨 **Visual:** Draw two complete VM capsules with their own engines. Beside them, three app containers share one kernel platform.

> Separate app boxes. One shared kernel underneath!

- **Container.** An isolated process environment that packages an app with what it needs to run. Containers share the kernel of their host environment.

- **Kernel.** The core part of an OS that manages resources and connects software to hardware. VMs normally have separate guest kernels. Containers on the same container host share one.

- **Image / runtime.** A container image is the template used to create containers. A container runtime starts and manages them. The image is not the same as a running container.

- **Why use them.** They can start quickly and use less overhead than a full guest OS per app. They help teams run consistent app packages across compatible environments.

- **Limits and storage.** Compatibility, security, and persistent data still need planning. Replacing a container must not erase needed records; use appropriate persistent storage. Containers often run inside VMs.

> **Remember:** EXAM TRAP: VM = virtual computer with its own guest OS. Container = isolated app environment sharing a kernel. Neither automatically makes an app secure or compatible with every system. [26]

## VDI: your desktop runs elsewhere

🎨 **Visual:** Draw one physical server as an apartment house. A purple hypervisor wizard gives resources to three separate OS rooms.

> Your screen is here. The desktop work is there!

- **VDI - Virtual Desktop Infrastructure.** Hosts virtual desktop environments centrally. Users connect from endpoint devices to work in those remote desktops.

- **What travels.** The connection carries display updates and user input. The remote system runs the desktop apps. Performance depends on server capacity, connection quality, and the workload.

- **Thin client.** A device built mainly to access remote computing. A full laptop or desktop can also act as the client. The endpoint still needs protection.

- **Use cases.** A school lab, shared workplace, or remote team can use centrally managed desktops. IT can manage images and access from a common service.

- **Tradeoffs.** Network outages or service problems can interrupt work. Peripheral support, licensing, user profiles, storage, and app needs must fit the solution.

> **Remember:** MEMORY HOOK: Local VM = guest runs on your local host. VDI = desktop runs on a remote host and reaches you through a client. DaaS, Desktop as a Service, is a cloud-delivered desktop offering. [1,27]

## Troubleshoot the whole chain

🎨 **Visual:** Draw three neon paths: a translator gate, a bridge to the LAN, and an enclosed host-only circle.

> Follow the clue from the client to the service!

- **1. Identify the problem.** Ask who is affected, when it began, and what changed. Record errors. Protect important work before disruptive tests.

- **2. Test the right layer.** Check the client link and IP settings, DNS, service status, sign-in, and permissions. A server that responds to a ping can still have a broken application.

- **3. Check VM resources.** Confirm the guest is running. Check free host storage, RAM pressure, CPU demand, virtual adapter mode, and guest addressing. Compare healthy guests.

- **4. Check cloud context.** Check service health, region, quotas, billing state, role permissions, and recent changes. Reachable internet does not prove a particular cloud app is healthy.

- **5. Verify and document.** Use a tested plan, make the approved change, confirm the user’s actual task works, and record the cause and fix. Escalate when the evidence points outside your access or skill.

> **Remember:** SCENARIO: Every guest is slow while the host disk is full. Investigate shared host storage first. Adding cloud capacity or reinstalling every guest would not address the evidence. Extra lab reasoning; use the full CompTIA troubleshooting method in practice. [1]

## Your recall mission

🎨 **Visual:** Draw a snapshot camera beside a server and a separate backup vault. Add heroes practicing with bright blank flashcards.

> Say it. Explain it. Use it in a scenario!

- **First pass.** Read the lesson, study the illustration, and say the bold terms aloud. For an acronym, say every word before explaining the job.

- **PowerPoint practice.** Open the matching deck in Slide Show mode. Pick a card. Speak your answer before selecting REVEAL ANSWER. Use TRY AGAIN for missed cards.

- **Spaced practice.** Try again later today, tomorrow, and a few days later. Spend extra time on missed cards. Mix server, cloud, and virtualization questions.

- **Printable practice.** The next six pages contain the same 24 cards. Cover the right column. Recall the answer, then uncover it.

- **What the deck does.** Native buttons jump between question and answer slides. No macros are required. It does not save scores or automatically schedule reviews.

> **Remember:** MAKE IT STICK: Do more than recite “IaaS.” Say “Infrastructure as a Service,” then explain who patches the guest OS. A short reason turns rote memory into usable understanding.

## Flashcards 01-04: cover & recall

🎨 **Visual:** Draw a snapshot camera beside a server and a separate backup vault. Add heroes practicing with bright blank flashcards.

> Cover the answer. Speak. Check. Repeat!

| Card / question | Answer to recall |
| --- | --- |
| 01. What does a server do? What does a client do? | A server provides a service. A client requests or uses that service. |
| 02. Expand DNS and name its common job. | Domain Name System. It resolves names, commonly to IP addresses. |
| 03. Expand DHCP. What does it give clients? | Dynamic Host Configuration Protocol. It leases IP settings, including options such as gateway and DNS servers. |
| 04. What do file servers and print servers share? | File servers offer network file access. Print servers manage access and queued jobs for shared printers. |

> **Remember:** Use the matching PowerPoint for clickable answer reveals. Cover the right column for print practice. Revisit the full lesson behind each missed answer.

## Flashcards 05-08: cover & recall

🎨 **Visual:** Draw a snapshot camera beside a server and a separate backup vault. Add heroes practicing with bright blank flashcards.

> Cover the answer. Speak. Check. Repeat!

| Card / question | Answer to recall |
| --- | --- |
| 05. Which role serves web requests? Which stores organized records? | A web server serves web requests. A database server stores and queries organized data. |
| 06. Which protocol sends mail? Which two retrieve or access it? | SMTP sends or relays mail. IMAP and POP3 let clients access or retrieve mail. |
| 07. Name all three A words and their jobs. | Authentication checks identity. Authorization allows actions. Accounting records activity or use. |
| 08. What does syslog collect? Expand NTP. | Syslog collects event messages. Network Time Protocol keeps clocks in step. |

> **Remember:** Use the matching PowerPoint for clickable answer reveals. Cover the right column for print practice. Revisit the full lesson behind each missed answer.

## Flashcards 09-12: cover & recall

🎨 **Visual:** Draw a snapshot camera beside a server and a separate backup vault. Add heroes practicing with bright blank flashcards.

> Cover the answer. Speak. Check. Repeat!

| Card / question | Answer to recall |
| --- | --- |
| 09. Expand IaaS. Who normally patches a rented VM’s guest OS? | Infrastructure as a Service. The customer normally patches the guest OS. |
| 10. Expand PaaS. What does the customer mainly bring? | Platform as a Service. The customer brings app code and data to a provider-managed platform. |
| 11. Expand SaaS and give a use case. | Software as a Service. A provider-run email or online document app is an example. |
| 12. Name the four Core 1 cloud deployment models. | Public, private, community, and hybrid. |

> **Remember:** Use the matching PowerPoint for clickable answer reveals. Cover the right column for print practice. Revisit the full lesson behind each missed answer.

## Flashcards 13-16: cover & recall

🎨 **Visual:** Draw a snapshot camera beside a server and a separate backup vault. Add heroes practicing with bright blank flashcards.

> Cover the answer. Speak. Check. Repeat!

| Card / question | Answer to recall |
| --- | --- |
| 13. Must a private cloud be on-site? Is public-cloud data public? | No to both. Private clouds can be off-site. Public-cloud data still needs access controls. |
| 14. A service adds capacity for a rush, then removes it. What is this? | Elasticity: capacity adjusts to demand, including shrinking afterward. |
| 15. From a cloud service’s view, what are ingress and egress? | Ingress is data entering. Egress is data leaving that service. |
| 16. Why is file sync alone not a complete backup plan? | Deletions or corruption can sync too. Recovery needs retained, recoverable copies and tested restores. |

> **Remember:** Use the matching PowerPoint for clickable answer reveals. Cover the right column for print practice. Revisit the full lesson behind each missed answer.

## Flashcards 17-20: cover & recall

🎨 **Visual:** Draw a snapshot camera beside a server and a separate backup vault. Add heroes practicing with bright blank flashcards.

> Cover the answer. Speak. Check. Repeat!

| Card / question | Answer to recall |
| --- | --- |
| 17. Who provides resources? Who runs inside? Who manages VMs? | The host provides resources. The guest OS runs inside a VM. The hypervisor manages virtual machines. |
| 18. How do Type 1 and Type 2 hypervisors differ? | Type 1 runs at the hardware layer. Type 2 runs as an app on a host operating system. |
| 19. Name four resources or requirements to check before adding VMs. | CPU support and capacity, RAM, storage, and network access. Check security and licenses too. |
| 20. Why is a snapshot not a substitute for an independent backup? | It may depend on the original disk files. Losing that storage can lose the snapshot too. |

> **Remember:** Use the matching PowerPoint for clickable answer reveals. Cover the right column for print practice. Revisit the full lesson behind each missed answer.

## Flashcards 21-24: cover & recall

🎨 **Visual:** Draw a snapshot camera beside a server and a separate backup vault. Add heroes practicing with bright blank flashcards.

> Cover the answer. Speak. Check. Repeat!

| Card / question | Answer to recall |
| --- | --- |
| 21. Which mode translates outbound traffic? Which joins the physical LAN? | Typical NAT mode translates outbound guest traffic. Bridged mode connects the guest to the physical LAN. |
| 22. In VirtualBox, who can communicate in a host-only network? | The host and connected guests. That mode alone does not provide outside-network access. |
| 23. Which normally has its own guest kernel? Which shares a kernel? | A VM has its own guest kernel. Containers share their host environment’s kernel. |
| 24. Expand VDI. Where does the desktop run? | Virtual Desktop Infrastructure. The desktop runs on a remote host; the user connects through a client. |

> **Remember:** Use the matching PowerPoint for clickable answer reveals. Cover the right column for print practice. Revisit the full lesson behind each missed answer.

## Sources: servers & cloud models

🎨 **Visual:** Draw a smiling cloud above a real data center. Neon cyan server heroes and a purple VM wizard help a student.

> Check the facts. Then practice the clues!

**1. CompTIA: 220-1201 exam objectives**

[Open primary reference](https://assets.ctfassets.net/82ripq7fjls2/1oSdlyujpaX3GrM0rir6Ge/91afb2be72785281e8fb4c0d9a70c6f4/CompTIA-A-220-1201-Exam-Objectives-3.0.pdf)

**2. NIST: Definition of cloud computing**

[Open primary reference](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf)

**3. Microsoft: IaaS, PaaS, and SaaS**

[Open primary reference](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-are-iaas-paas-and-saas)

**4. Microsoft: Shared cloud responsibility**

[Open primary reference](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility)

**5. AWS: Shared responsibility model**

[Open primary reference](https://aws.amazon.com/compliance/shared-responsibility-model/)

**6. Microsoft: DNS overview**

[Open primary reference](https://learn.microsoft.com/en-us/windows-server/networking/dns/dns-overview)

**7. Microsoft: DHCP overview**

[Open primary reference](https://learn.microsoft.com/en-us/windows-server/networking/technologies/dhcp/dhcp-top)

**8. Microsoft: SMB file sharing**

[Open primary reference](https://learn.microsoft.com/en-us/windows-server/storage/file-server/file-server-smb-overview)

**9. Cisco: Authentication, authorization, accounting**

[Open primary reference](https://www.cisco.com/c/en/us/td/docs/wireless/controller/ewc/17-1/olh/Content/topics/c_sec_aaa_about.html)

**10. IETF: Syslog, RFC 5424**

[Open primary reference](https://www.rfc-editor.org/rfc/rfc5424)

> **Remember:** Reviewed September 19, 2026. Vendor examples explain concepts; exact features and responsibilities depend on the product and agreement. Independent material; no CompTIA or Per Scholas endorsement.

## Sources: standards & operations

🎨 **Visual:** Draw a smiling cloud above a real data center. Neon cyan server heroes and a purple VM wizard help a student.

> Check the facts. Then practice the clues!

**11. IETF: Network Time Protocol, RFC 5905**

[Open primary reference](https://www.rfc-editor.org/rfc/rfc5905)

**12. AWS: Load balancing**

[Open primary reference](https://aws.amazon.com/what-is/load-balancing/)

**13. CompTIA: Core 1 certification scope**

[Open primary reference](https://www.comptia.org/en-us/certifications/a/)

**14. NIST: Cloud definition publication record**

[Open primary reference](https://csrc.nist.gov/pubs/sp/800/145/final)

**15. StarTech: Rack units and mounting**

[Open primary reference](https://www.startech.com/en-us/server-management/cabshelf116v)

**16. PostgreSQL: Relational database concepts**

[Open primary reference](https://www.postgresql.org/docs/current/tutorial-concepts.html)

**17. IETF: Email TLS, RFC 8314**

[Open primary reference](https://www.rfc-editor.org/rfc/rfc8314)

**18. NIST: SCADA definition**

[Open primary reference](https://csrc.nist.gov/glossary/term/Supervisory_Control_and_Data_Acquisition)

**19. AWS: How pricing works**

[Open primary reference](https://aws.amazon.com/pricing/)

**20. Microsoft: Reliability and availability**

[Open primary reference](https://learn.microsoft.com/en-us/azure/well-architected/reliability/)

> **Remember:** Reviewed September 19, 2026. Vendor examples explain concepts; exact features and responsibilities depend on the product and agreement. Independent material; no CompTIA or Per Scholas endorsement.

## Sources: virtualization & recovery

🎨 **Visual:** Draw a smiling cloud above a real data center. Neon cyan server heroes and a purple VM wizard help a student.

> Check the facts. Then practice the clues!

**21. Microsoft: OneDrive file synchronization**

[Open primary reference](https://support.microsoft.com/en-us/onedrive/sync-your-computer-s-files-and-folders-with-onedrive)

**22. Microsoft: Hyper-V overview**

[Open primary reference](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/overview)

**23. Oracle: VirtualBox virtual networking**

[Open primary reference](https://docs.oracle.com/en/virtualization/virtualbox/7.1/user/networkingdetails.html)

**24. Microsoft: Hyper-V hardware requirements**

[Open primary reference](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/host-hardware-requirements)

**25. Microsoft: Hyper-V checkpoints**

[Open primary reference](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/checkpoints)

**26. Docker: Containers and virtual machines**

[Open primary reference](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/)

**27. Microsoft: Azure Virtual Desktop overview**

[Open primary reference](https://learn.microsoft.com/en-us/azure/virtual-desktop/overview)

**28. Oracle: VirtualBox basics and snapshots**

[Open primary reference](https://docs.oracle.com/en/virtualization/virtualbox/7.1/user/Introduction.html)

> **Remember:** Reviewed September 19, 2026. Vendor examples explain concepts; exact features and responsibilities depend on the product and agreement. Independent material; no CompTIA or Per Scholas endorsement.

## ⭐ QUIZ TIME

🎨 **Visual:** Draw a snapshot camera beside a server and a separate backup vault. Add heroes practicing with bright blank flashcards.

> Three missions. You have the tools!

**1.** A laptop needs automatic IP settings. Later, it must find a website by name. Which two server roles help, in that order? Expand both acronyms.

**2.** Your team rents a VM and controls its guest OS. Which cloud service model is this? Who normally patches that guest OS?

**3.** A host drive fails. The VM and its checkpoints were on that same drive. Why might the checkpoints fail to rescue the VM, and what should the recovery plan include?

ANSWERS

**1. DHCP, then DNS.** Dynamic Host Configuration Protocol leases settings. Domain Name System resolves names. Nice work separating the two service desks!

**2. IaaS: Infrastructure as a Service.** The customer normally patches the guest OS. Great job matching control with responsibility!

**3. They may depend on the lost original storage.** Keep independent backups and test restores. You spotted the difference between a quick rewind and a rescue copy!
