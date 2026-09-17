# Ports and Protocols — Text Companion

[Guide overview and illustrated PDF](README.md) · [All illustrated guides](../../../README.md)

Searchable companion to Network City, Issue 02, edition 1.0.0. The PDF contains the finished comic illustrations. Reviewed September 17, 2026.

## Ports: find the right door

🎨 **Visual:** Draw a neon-blue server city. Gold couriers choose glowing service doors beside a purple router officer.

> Right building. Right door. Right service!

- **Protocol.** A shared set of rules for sending and reading data. Think of a game: both sides must know the rules.

- **IP - Internet Protocol.** IP helps move packets, or labeled data parcels, between networks. An IP address identifies a network interface. In our story, it is the building address.

- **Port number.** A number used by TCP or UDP to help deliver data to the right program or conversation. It is a software door, not a cable socket.

- **Client / server.** A client asks for a service. A server provides it. One computer can run several services, each listening for traffic at its own endpoint.

- **Two door lists.** TCP port 53 and UDP port 53 are separate endpoints. Always name the transport as well as the number.

- **Number ranges.** Each transport has ports 0-65535. IANA, the Internet Assigned Numbers Authority, groups 0-1023 as system ports, 1024-49151 as user ports, and 49152-65535 as dynamic/private ports. Port 0 is reserved. [2]

- **Default / ephemeral.** Default means the usual setting; it can change. Ephemeral means temporary: clients often use temporary source ports. The exact client range depends on the operating system.

> **Remember:** EXAM TARGET: Core 1, 220-1201, objective 2.1. Learn each service’s purpose, default port, and TCP/UDP behavior. A port number alone does not prove which program is using it. [1, 2]

## TCP: the careful delivery team

🎨 **Visual:** Draw a cyan delivery robot with a checklist and receipt. Its truck carries ordered parcels along orange roads.

> I track the bytes and put them in order!

- **TCP - Transmission Control Protocol.** A transport protocol that gives applications a reliable, ordered stream of bytes. A byte is a small unit of data, usually eight bits. [3]

- **Connection-oriented.** The two endpoints set up a connection before normal data exchange. Like two callers saying hello before they talk.

- **Three-way handshake.** Client: SYN. Server: SYN-ACK. Client: ACK. SYN means synchronize; ACK means acknowledgment. They agree on starting sequence numbers.

- **Sequence number.** A position marker for bytes. TCP can put received data in the correct order even when pieces take different paths.

- **Acknowledgment / retransmission.** The receiver reports progress. The sender can resend missing data. Retransmission means sending again.

- **Flow / congestion control.** Flow control helps avoid overwhelming the receiver. Congestion control adjusts sending when the network path is crowded.

- **Use cases.** File transfers, email, and remote commands benefit from ordered delivery. TCP can still time out when a connection fails; it cannot fix a broken cable by magic.

> **Remember:** RELIABLE DOES NOT MEAN SECRET. TCP does not encrypt data by itself. Reliability costs extra tracking and may add delay when data must be resent.

## UDP: send the message now

🎨 **Visual:** Draw a purple rocket courier racing toward a live video screen. One late parcel falls behind the glowing road.

> Each message gets its own quick launch!

- **UDP - User Datagram Protocol.** A transport protocol that sends separate messages called datagrams. UDP itself does not set up a TCP-style connection. [4]

- **Connectionless.** Each datagram can be sent without a transport handshake. There is no built-in promise of delivery, order, or protection from duplicate messages.

- **Why use it?** Less built-in tracking can help short requests and live traffic. An old voice sample may be less useful than the next fresh sample.

- **Application rules still matter.** Programs can add retries, ordering, or other safeguards above UDP. A DNS client, for example, can retry an unanswered query.

| Feature | TCP | UDP |
| --- | --- | --- |
| Data style | Ordered byte stream | Separate datagrams |
| Built-in recovery | Acknowledgments; retries | No delivery retries |
| Connection setup | Handshake | No TCP-style handshake |
| Common examples | SSH; FTP; SMTP | DHCP; many DNS queries |

> **Remember:** SPEED TRAP: UDP is not always faster in real use. Neither TCP nor UDP has one fixed Mbps (megabits per second) rating or cable-distance limit. Hardware, links, traffic, and application design set the result.

## FTP: commands and cargo

🎨 **Visual:** Draw a green file warehouse with a small control window and a separate wide cargo door. Gold folders ride conveyors.

> One connection talks. Another moves files!

- **FTP - File Transfer Protocol.** A protocol for uploading and downloading files. Upload sends a file to another system. Download receives a file. [5]

- **TCP 21 - control.** The client opens the command connection to server port 21. Commands handle tasks such as logging in or selecting a file.

- **TCP 20 - active data.** In classic active FTP, the server normally starts the data connection from its port 20 to a client-specified port. File contents and directory listings use a separate data connection.

- **Passive FTP.** The server tells the client which server data port to contact. The client starts that connection. Passive data ports are negotiated; they are not always port 20.

- **Why two paths?** Instructions and file data have different jobs. The clerk takes your order while the loading door handles the boxes.

- **Use case.** Transfer files to a system that requires FTP. Firewalls must account for both control and data behavior; opening only 21 may not make transfers work.

- **Plaintext.** Ordinary FTP does not encrypt its commands, login details, or files. Plaintext means the content is readable without decrypting it.

> **Remember:** MEMORY HOOK: 21 = the talking clerk; 20 = classic active-mode cargo. SFTP is a different protocol over SSH, usually TCP 22. It is not ordinary FTP with a new name.

## SSH & Telnet: remote commands

🎨 **Visual:** Draw a cyan command courier inside a locked tunnel. Beside it, an orange courier sends readable notes on an open belt.

> Same kind of job. Different protection!

- **Remote access.** Using one computer to work on another through a network. A command-line interface lets you type instructions instead of clicking desktop icons.

- **SSH - Secure Shell.** Usually TCP 22. SSH protects remote login and command sessions with encryption. It also supports tasks such as secure file transfer. [6]

- **Encryption.** Scrambles data so an observer cannot read it without the right key. Authentication checks who or what is connecting.

- **Host key.** A server identity key used by SSH. Verify unexpected key changes; the key helps the client recognize the intended server.

- **Telnet.** A legacy remote terminal protocol, usually TCP 23. Telnet is the protocol’s name; learn its remote-terminal job. Basic Telnet sends session data without encryption. [7]

- **Use cases.** Choose SSH for secure text-based administration when supported. Telnet may appear on old equipment or in a controlled training lab.

- **Exam clue.** “Encrypted remote shell” points to SSH 22. “Unencrypted remote terminal” points to Telnet 23. Neither term means a full graphical desktop.

> **Remember:** 22: SSH protects the shell. 23: Telnet exposes the text. Do not assume that moving Telnet to a different port adds encryption.

## DNS: the name detective

🎨 **Visual:** Draw a purple owl librarian matching a globe-name card to a location on a neon city map. A gold courier waits.

> Give me the name. I will look up the record!

- **DNS - Domain Name System.** A distributed lookup system. It can turn a name such as www.example.com into an IP address and store other kinds of records.

- **Domain name / resolver.** A domain name is a human-friendly name. A resolver is the software or service that looks up DNS answers for a client.

- **Port 53 - UDP and TCP.** Many ordinary queries use UDP 53. DNS also uses TCP 53, including when a response is too large for the UDP exchange. DNS implementations must support TCP. [8]

- **Records.** An A record holds an Internet Protocol version 4 (IPv4) address. An AAAA record holds a version 6 (IPv6) address. An MX, or mail exchanger, record points toward mail servers. [21]

- **Cache / TTL.** A cache is a saved answer. TTL means Time to Live: it tells a cache how long it may keep that DNS record before it needs a fresh answer.

- **Why it helps.** People remember names more easily than long numbers. The address behind a name can change while the name stays familiar.

- **Trouble clue.** If a service works by address but fails by name, investigate DNS. That is a clue, not proof: some web services also need the correct host name.

> **Remember:** DNS FINDS; DHCP ASSIGNS. DNS looks up records. DHCP supplies network settings. Remember 53 for DNS and both TCP and UDP.

## DHCP: rent network settings

🎨 **Visual:** Draw a lime-green hotel server lending address keycards to new laptops. A bright clock marks each temporary lease.

> Here are your settings. Keep track of the lease!

- **DHCP - Dynamic Host Configuration Protocol.** Automatically supplies settings to network clients. For IPv4 DHCP, the server uses UDP 67 and the client uses UDP 68. [9]

- **Lease.** Permission to use an address for a limited time. Clients try to renew before it expires. A reservation can give one client a predictable address.

- **D - Discover.** A new client broadcasts to find a DHCP server. Broadcast means the message reaches the local broadcast area, rather than one known recipient.

- **O - Offer.** A server offers an address and settings. The client does not simply keep every offered address.

- **R - Request.** The client asks to use an offered address and signals which offer it chose.

- **A - Acknowledgment.** The selected server confirms the lease. DORA is a memory aid for this common initial four-message exchange; renewals can use a shorter exchange.

- **Useful settings.** The subnet mask helps identify the local IPv4 network. The default gateway leads to other networks. DNS server addresses tell the client where to ask name questions.

> **Remember:** 67 = SERVER; 68 = CLIENT. This pair is for IPv4 DHCP. DHCPv6 uses different ports, 547/546; that is extra context, not the 67/68 pair in this objective. [23]

## HTTP & HTTPS: web delivery

🎨 **Visual:** Draw a blue browser visiting an open orange web path and a cyan locked web tunnel. Gold picture cards carry page content.

> Fetch the page. Check the connection!

- **HTTP - Hypertext Transfer Protocol.** Rules for web requests and responses. Hypertext means text that can link to other content. HTTP also carries images and application data. [10]

- **TCP 80 - HTTP.** The usual default for ordinary HTTP. A request might ask for a page; the server returns a response. HTTP alone does not encrypt the exchange.

- **HTTPS - HTTP Secure.** HTTP protected with TLS, or Transport Layer Security. The usual Core 1 pairing is HTTPS with TCP 443.

- **TLS.** Adds encryption, integrity checks, and server authentication when properly validated. Integrity means helping detect unwanted changes to data.

- **Certificate.** A digital identity document used in the TLS process. The browser checks matters such as the requested host name and whether the certificate is trusted.

- **What the lock means.** It helps protect the connection. It does not promise that the site owner is honest, the item for sale is real, or every download is harmless.

- **Version note.** HTTP/1.1 and HTTP/2 commonly use TCP. HTTP/3 uses QUIC over UDP, commonly UDP 443. QUIC includes secure transport features. [11]

> **Remember:** CORE RECALL: HTTP 80; HTTPS 443. Neither number names a speed or distance. Port 443 can carry TCP or UDP traffic, depending on the protocol version.

## SMTP: send and relay email

🎨 **Visual:** Draw an orange mail courier moving envelopes from a laptop to purple mail servers across glowing city roads.

> Outgoing mail? I carry it onward!

- **SMTP - Simple Mail Transfer Protocol.** The protocol for sending and relaying email. Relay means pass the message to another mail server. [12]

- **TCP 25.** The classic SMTP port, especially for mail-server-to-mail-server delivery. This is the SMTP port listed in the Core 1 objective.

- **A mail journey.** Your mail app submits a message to a mail service. That service can relay it to the recipient’s mail service. A different protocol may then help the recipient read it.

- **Client submission.** A modern mail app commonly submits through TCP 587 with STARTTLS, or TCP 465 with implicit TLS. These are useful extra ports; do not replace exam SMTP 25 with them. [15]

- **STARTTLS.** A command that upgrades a supported connection to TLS. “Implicit TLS” starts TLS as soon as the connection begins, before normal mail commands.

- **Security nuance.** Port 25 traffic can use STARTTLS. The port number alone does not tell you whether a given SMTP conversation is encrypted.

- **Use case / clue.** If sending fails but reading works, check the sending service, login, and configured SMTP connection. POP3 or IMAP settings do a different job.

> **Remember:** SMTP SENDS. POP3 AND IMAP HELP READ. Keep the direction straight: sending mail does not mean downloading the inbox.

## POP3 & IMAP: open the inbox

🎨 **Visual:** Draw a green laptop collecting mail into a basket. Beside it, a purple mailbox keeps a phone and laptop in sync.

> Download a copy, or keep the mailbox in sync!

- **POP3 - Post Office Protocol version 3.** Usually TCP 110. A client retrieves messages from a server, often for local storage. It may leave copies on the server, depending on settings. [13]

- **POP3 use case.** A simple download-focused mail setup. Do not memorize “POP3 always deletes mail.” Deletion depends on the client’s actions and configuration.

- **IMAP - Internet Message Access Protocol.** Usually TCP 143. A client works with mailboxes kept on the server. It can synchronize folders, messages, and flags such as read/unread. [14]

- **IMAP use case.** Read the same mailbox from a phone and laptop. Server-side state helps both devices show matching folders and read status.

- **TLS choices.** POP3 over implicit TLS commonly uses 995. IMAP over implicit TLS commonly uses 993. Ports 110 and 143 can also support upgrades to TLS; they are not proof of encryption. [15]

- **Naming note.** The standard expands IMAP as Internet Message Access Protocol. Some study lists use “Internet Mail Access Protocol”; the port and mailbox job still identify IMAP.

> **Remember:** MEMORY HOOK: POP3 110 = pick up mail. IMAP 143 = manage the shared inbox. SMTP 25 = move outgoing mail between servers.

## NetBIOS: the legacy trio

🎨 **Visual:** Draw three retro neon service booths: a name directory, a message thrower, and a connected telephone pair.

> Three neighboring doors. Three different jobs!

- **NetBIOS.** Network Basic Input/Output System. A legacy set of networking services used by applications. It is not the BIOS firmware that starts a PC.

- **NetBT.** NetBIOS over TCP/IP. This carries NetBIOS services using TCP/IP networking. TCP/IP names the wider Internet protocol family, not just one application.

- **137 - name service.** Registers or looks up NetBIOS names. UDP 137 is common; the name service also defines TCP 137. [16]

- **138 - datagram service.** Uses UDP. Sends connectionless messages. Think of the middle booth tossing separate postcards.

- **139 - session service.** Uses TCP. Provides a connection for a continuing conversation. Older Windows file sharing can carry SMB over this service.

- **Use case.** Recognize older Windows-network dependencies and troubleshoot legacy equipment. Modern direct-hosted SMB uses TCP 445 and does not need the NetBIOS trio. [18]

- **Name versus address.** A NetBIOS name is a legacy device/service name. Do not treat NetBIOS name lookup as a replacement term for every DNS query.

> **Remember:** 137 = NAMES. 138 = DATAGRAMS. 139 = SESSIONS. Learn the jobs with the numbers; do not label all three as “TCP only” or all three as “UDP only.”

## LDAP: the directory desk

🎨 **Visual:** Draw a purple librarian server opening a glowing address book of people, groups, and computers. A cyan robot requests a record.

> Find the right entry in the directory!

- **LDAP - Lightweight Directory Access Protocol.** A protocol for reading and managing directory entries. A directory stores organized information about things such as users, groups, and computers. [17]

- **TCP 389.** The usual connection for LDAP requests and responses. Clients can search for entries or read selected attributes.

- **Entry / attribute.** An entry is one record, like a person’s card. An attribute is one fact on it, such as a display name or email address.

- **AD - Active Directory.** Microsoft’s directory system. LDAP is one of the protocols used to work with it. LDAP is a protocol; Active Directory is a system that provides directory services.

- **UDP 389 nuance.** Connectionless LDAP can use UDP 389 for specific tasks, including Active Directory domain-controller discovery. Do not assume all LDAP uses UDP or that UDP 389 never exists. [19]

- **Protection.** An LDAP connection on 389 can upgrade with StartTLS. LDAPS, LDAP over TLS, commonly uses TCP 636. Check configuration and certificate validation.

- **Use case.** A company app looks up employee information or group membership. Authentication checks identity; authorization decides what that identity may do.

> **Remember:** LDAP = DIRECTORY ENTRIES. SMB = SHARED FILES. Both can involve a company server, but they solve different problems.

## SMB: the shared file counter

🎨 **Visual:** Draw a lime-green file server sharing folders and a printer with cheerful laptops across cyan paths in a purple office.

> One shared folder. Several allowed teammates!

- **SMB - Server Message Block.** A protocol used for shared files, printers, and related network services. A server can make a folder available to authorized clients. [18]

- **TCP 445.** The usual port for direct-hosted SMB. Direct-hosted means SMB runs directly over TCP without the older NetBIOS session service.

- **CIFS - Common Internet File System.** A name associated with an older SMB dialect. A dialect is a protocol version or variation. CIFS is not the name for every modern SMB version.

- **Share / permissions.** A share is a resource made available over the network. Permissions define who can read, create, or change its contents.

- **UNC - Universal Naming Convention.** A Windows network-path format. For example, \\fileserver\classwork names the classwork share on fileserver.

- **Use case.** Students open files from a classroom server. Workers save documents to an approved team share or use a shared printer.

- **Security / legacy clue.** Modern SMB supports security features such as encryption, depending on version and settings. Port 445 alone does not guarantee encryption. Older SMB may use NetBIOS TCP 139.

> **Remember:** 445 = DIRECT SMB FILE SHARING. Keep SMB versions current and grant only needed access. A blocked port, unavailable share, or missing permission can each stop a file request.

## RDP: your faraway desktop

🎨 **Visual:** Draw a cyan laptop pilot controlling a distant purple desktop through a glowing screen portal. Gold keyboard and mouse signals travel across.

> See the desktop. Work from another device!

- **RDP - Remote Desktop Protocol.** A protocol for remote graphical sessions. You see a desktop and send keyboard and mouse actions over the network.

- **3389 - TCP and UDP.** RDP commonly uses TCP 3389 and can also use UDP 3389 for transport performance. Exact behavior depends on the client, server, and configuration. [20]

- **Client / host.** The client starts the remote session. The host provides the desktop. The host must support and enable the service; not every operating-system edition can host it.

- **Use case.** An authorized technician manages a distant Windows computer, or a worker uses a desktop provided by their organization.

- **RDP versus SSH.** RDP gives a graphical desktop. SSH is best known for a secure text shell. Both support remote work, but the exam clues differ.

- **Safe access.** Use approved accounts and protected access methods. Organizations may require a VPN, or Virtual Private Network, or a Remote Desktop Gateway. Avoid casually exposing a desktop service to the public internet.

- **Trouble clue.** Check that the host is awake, the service is enabled, access is allowed, and the network path permits the configured connection.

> **Remember:** 3389 = REMOTE DESKTOP. Changing the port does not replace authentication, updates, or proper access rules. Always get authorization before controlling another computer.

## Port map A: web, files & setup

🎨 **Visual:** Draw gold packet couriers lining up at neon-blue service doors. A purple router holds a colorful city map.

> Say the job, the number, and the transport!

| Service | Default port | Transport / job |
| --- | --- | --- |
| FTP | 20 / 21 | TCP: active data / control |
| SSH | 22 | TCP: secure remote shell |
| Telnet | 23 | TCP: legacy remote terminal |
| DNS | 53 | UDP and TCP: name records |
| DHCP (IPv4) | 67 / 68 | UDP: server / client |
| HTTP | 80 | TCP: web traffic without TLS |
| HTTPS | 443 | TCP commonly; HTTP/3 uses UDP |

These are normal service defaults, not permanent laws. Administrators can change listening ports. FTP passive-mode data uses a negotiated server port. [1-11]

> **Remember:** PRACTICE: Cover the middle column. Can you name every port from the service alone? Then cover the first column and work backward.

## Port map B: mail & company tools

🎨 **Visual:** Draw orange mail couriers passing purple offices while friendly server clerks prepare inboxes, files, and directory records.

> Match the service to the problem!

| Service | Default port | Transport / job |
| --- | --- | --- |
| SMTP | 25 | TCP: send / relay email |
| POP3 | 110 | TCP: retrieve email |
| IMAP | 143 | TCP: manage server mailbox |
| NetBIOS names | 137 | Usually UDP; TCP also defined |
| NetBIOS datagrams | 138 | UDP: connectionless messages |
| NetBIOS sessions | 139 | TCP: legacy sessions |
| LDAP | 389 | Usually TCP; UDP for specific uses |
| SMB / CIFS | 445 | TCP: direct file / printer sharing |
| RDP | 3389 | TCP and UDP: remote desktop |

> **Remember:** OBJECTIVE 2.1 CHECK: The two port maps cover every service in the official list. Secure variants on the next page add practical context. [1, 12-20]

## Secure extras & exam traps

🎨 **Visual:** Draw cyan locks protecting web and mail pathways. A gold detective checks each service instead of trusting its door number.

> A familiar port is a clue, not proof!

| Extra service | Usual TCP port | Meaning |
| --- | --- | --- |
| Mail submission | 587 | SMTP; commonly upgraded with STARTTLS |
| Mail submission with TLS | 465 | SMTP with implicit TLS |
| IMAP with TLS | 993 | Encrypted mailbox access |
| POP3 with TLS | 995 | Encrypted mail retrieval |
| LDAP with TLS | 636 | Encrypted directory access |

- **SFTP versus FTPS.** SFTP means SSH File Transfer Protocol, usually TCP 22. FTPS means FTP protected with TLS; explicit FTPS commonly starts on TCP 21. These are different protocols. [22]

- **No magic port.** A service may use a nondefault port. Firewall rules need the correct transport and direction as well as the number.

> **Remember:** EXTRA CONTEXT: These secure variants are not additional named ports in objective 2.1. Learn the main list first. “Uses TCP” does not mean “encrypted.” [1, 6, 15, 17]

## Mission: load a secure website

🎨 **Visual:** Draw a new gold courier collecting a keycard, asking the purple directory owl, then entering a cyan web door.

> Get settings. Find the address. Request the page!

- **1. Get settings.** A newly connected client may use DHCP: UDP 68 on the client, UDP 67 on the server. It learns an address, gateway, and DNS server settings.

- **2. Find the destination.** The browser needs the website address. If no usable cached answer exists, a DNS lookup can help find it. Ordinary DNS uses port 53.

- **3. Connect securely.** For a typical HTTPS-over-TCP session, the browser opens a TCP connection to server port 443, negotiates TLS, then sends HTTP requests inside that protection.

- **4. Keep replies sorted.** The client also has a source port. Example: 192.168.1.25:51514 → 203.0.113.10:443. The numbers after the colons are ports; these addresses illustrate a flow.

- **5. Read the clues.** The same server IP can offer several services. Source/destination IP addresses, source/destination ports, and transport help distinguish conversations.

- **Troubleshoot in order.** Check link and IP settings, name lookup, the actual service, then relevant firewall rules and application settings. A successful ping does not prove that a web or mail service works.

- **No physical range.** Software ports are not jacks. Cable category, radio standard, and equipment determine physical reach and link rates; port 443 does not mean 443 Mbps.

> **Remember:** SCENARIO RULE: Choose the service by its job first. Then match its default port and transport. Do not turn off every security control just to make a connection work.

## Sources & exam alignment

🎨 **Visual:** Draw the purple directory owl beside neon shelves of reference books. Gold couriers return their checked fact cards.

> The story is playful. The facts have sources!

**Primary scope:** CompTIA A+ Core 1, 220-1201, objective 2.1. References are primary technical sources. RFC means Request for Comments, a technical document series.

[**1. CompTIA: Core 1 objectives, 2.1**](https://assets.ctfassets.net/82ripq7fjls2/1oSdlyujpaX3GrM0rir6Ge/91afb2be72785281e8fb4c0d9a70c6f4/CompTIA-A-220-1201-Exam-Objectives-3.0.pdf)

[**2. IANA: Service names and ports**](https://www.iana.org/assignments/service-names-port-numbers)

[**3. RFC 9293: TCP**](https://www.rfc-editor.org/rfc/rfc9293.html)

[**4. RFC 768: UDP**](https://www.rfc-editor.org/rfc/rfc768.html)

[**5. RFC 959: FTP**](https://www.rfc-editor.org/rfc/rfc959.html)

[**6. RFC 4251: SSH architecture**](https://www.rfc-editor.org/rfc/rfc4251.html)

[**7. RFC 854: Telnet**](https://www.rfc-editor.org/rfc/rfc854.html)

[**8. RFC 7766: DNS over TCP**](https://www.rfc-editor.org/rfc/rfc7766.html)

[**9. RFC 2131: DHCP**](https://www.rfc-editor.org/rfc/rfc2131.html)

[**10. RFC 9110: HTTP semantics**](https://www.rfc-editor.org/rfc/rfc9110.html)

[**11. RFC 9114: HTTP/3**](https://www.rfc-editor.org/rfc/rfc9114.html)

[**12. RFC 5321: SMTP**](https://www.rfc-editor.org/rfc/rfc5321.html)

[**13. RFC 1939: POP3**](https://www.rfc-editor.org/rfc/rfc1939.html)

[**14. RFC 9051: IMAP**](https://www.rfc-editor.org/rfc/rfc9051.html)

[**15. RFC 8314: Mail TLS**](https://www.rfc-editor.org/rfc/rfc8314.html)

[**16. RFC 1002: NetBIOS transport**](https://www.rfc-editor.org/rfc/rfc1002.html)

[**17. RFC 4511: LDAP**](https://www.rfc-editor.org/rfc/rfc4511.html)

[**18. Microsoft: SMB and CIFS**](https://learn.microsoft.com/en-us/windows/win32/fileio/microsoft-smb-protocol-and-cifs-protocol-overview)

[**19. Microsoft: AD connectivity / LDAP UDP**](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/use-portqry-verify-active-directory-tcp-ip-connectivity)

[**20. Microsoft: Remote Desktop ports**](https://learn.microsoft.com/en-us/troubleshoot/windows-server/remote/ports-used-by-rds)

[**21. RFC 1035: DNS records and caching**](https://www.rfc-editor.org/rfc/rfc1035.html)

[**22. RFC 4217: FTP with TLS**](https://www.rfc-editor.org/rfc/rfc4217.html)

[**23. RFC 8415: DHCPv6**](https://www.rfc-editor.org/rfc/rfc8415.html)

Reviewed September 17, 2026. Independent study guide; not endorsed by CompTIA. Artwork uses teaching metaphors and was made with the built-in image tool.

## STAR QUIZ TIME

🎨 **Visual:** Draw the neon service city ready for a three-star challenge. Gold couriers cheer beside the purple router officer.

> You have the map. Now solve the mission!

**1. Find the name!** A computer needs a website’s IP address. Which service should it ask, which port does it use, and is it UDP-only?

**2. Get a lease!** A new IPv4 client needs automatic network settings. Name the protocol and the server/client UDP ports. What does DORA stand for?

**3. Keep the inbox in sync!** A learner wants matching folders and read status on a phone and laptop. Pick POP3, IMAP, or SMTP. Give its base port and common implicit-TLS port.

ANSWERS

**1. DNS, port 53, both UDP and TCP.** Great detective work! DNS looks up name records. Many queries use UDP, but TCP is part of normal DNS support too.

**2. DHCP; server UDP 67, client UDP 68.** DORA means Discover, Offer, Request, Acknowledgment. Nice work! The server lends settings through a lease.

**3. IMAP; TCP 143 and TCP 993.** You nailed the mailbox job! IMAP manages server-side mailboxes and shared state. SMTP sends mail; POP3 focuses on retrieval.
