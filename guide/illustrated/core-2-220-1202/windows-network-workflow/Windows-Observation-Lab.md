# Windows traffic observation lab

Read-only observation on your own Windows PC. The interactive guide uses synthetic data; this lab shows your actual activity.

1. Open Command Prompt and run `ipconfig /all`. Identify the active adapter, IPv4 address, mask, gateway, DHCP status and DNS servers.
2. Win+R → `resmon` → Network. Expand process activity, TCP connections and listening ports.
3. In Command Prompt, run `netstat -ano 2`. It refreshes every two seconds. Stop with Ctrl+C.
4. Open Edge DevTools with F12 (or Ctrl+Shift+I), choose Network, and open https://example.com. Reload with the Network tool open.
5. Match a connection's PID to Task Manager → Details. Browser processes can have different PIDs.
6. Compare send/receive activity with the browser waterfall. The browser shows its own requests; Windows tools include other programs and services.
7. Optional: `nslookup example.com` checks a DNS lookup; `tracert -d example.com` probes hops. Missing hop replies can be filtering, not an outage.
8. Optional: `perfmon` → Performance Monitor → + → Network Interface → Bytes Sent/sec, Bytes Received/sec, Bytes Total/sec. Select the active adapter.

## Record what you actually see

| Observation | Your evidence | What it proves / does not prove |
|---|---|---|
| Active adapter and configuration | | IP settings, not Internet success |
| Process and PID | | Endpoint owner at that time |
| Local / remote endpoints | | Connection direction, not decrypted content |
| TCP state | | Transport state, not page correctness |
| Send / receive activity | | Traffic rate, not maximum capacity |
| Browser request status and timing | | This request, not all PC traffic |

Modern pages may use cached data, reused connections, several servers or QUIC/UDP. Sampling can miss short connections. Do not disable the firewall, release your IP, stop services or alter drivers for this lab. Review logs for personal data before sharing. See sources.md for Microsoft documentation.
