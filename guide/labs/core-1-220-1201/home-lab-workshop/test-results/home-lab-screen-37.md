# Edition 37 verification

## Automated checks

Passed: test-lab-screen.mjs, test-lab-desktop.mjs, test-lab-learning.mjs, test-lab-courses.mjs, test-lab-save.mjs, test-lab-ui.mjs, test-lab-network.mjs, test-lab.mjs, test-lab-world.mjs, test-lab-blender.mjs, test-lab-world-routing.mjs.

New screen tests measure the authored Blender LCD bounds and transform its four projected corners at three device positions. The projection rejects degenerate geometry. Client power, host power, missing management links and stopped VMs block access; an isolated guest can still be reached through its host console. The eight mission policies gate VM, cloud, Wi-Fi and service tools. UI tests cover persistent physical ownership of guest sessions, returning to the host client, app/command restrictions and recovery after a power interruption.

## Local browser review

- A direct pointer click on the actual laptop LCD opens the attached OS surface. No OS dialog is opened.
- Windows PowerShell reads laptop4’s 192.168.50.100 configuration. Ubuntu guest vm20 reads its distinct 192.168.50.102 address on that same physical display.
- Windows taskbar and Ubuntu Activities/left dock, Settings and supported shells are interactive.
- Host console Get-VM lists the external and private guests through the client screen. Disconnect returns to the physical client without stopping guests.
- The teaching browser checks the model and receives its example HTTPS page.
- Terminal scroll moves through output with unchanged camera position/target. Larger text preserves the screen’s corners.
- Tested at 1280 × 720, 900 × 800 and 390 × 844. Desktop/tablet views fit the device. Phone uses a deliberate pannable desktop and retains visible return controls; it does not squeeze the terminal into unreadable text.
- Exiting returns the canvas to worldLab, hides the OS surface, restores background focus and removes the focused-screen region. Browser error log was empty.

## Limits and sources

The app recreates a restricted OS interface; it does not execute Windows/Linux kernels or host real VM sessions. The model’s management reachability check is a teaching simplification. Browser review is not a guarantee for every device, GPU, OS version or accessibility tool.

Settings terminology checked against Microsoft’s Essential Network Settings and Tasks in Windows and Ubuntu’s Create a Connection with a Fixed IP Address. Existing in-repository references cover commands, Hyper-V switch terminology and CompTIA objectives.

- https://support.microsoft.com/en-us/windows/experience/connectivity-networking/essential-network-settings-and-tasks-in-windows
- https://help.ubuntu.com/stable/ubuntu-help/net-fixed-ip-address.html
