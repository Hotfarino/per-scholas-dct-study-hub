# Edition 45: networking setup validation

The lab focuses on learning networking, with setup feedback rather than exam scoring.

## Verified

- All 28 source regression suites passed. The eight course traversals cover 247 step occurrences, including repeated foundations.
- VM creation rejects the reported 2 GB / 1 vCPU / 20 GB / Private setup. Separate cases reject a wrong host, name, RAM, CPU, disk, Internal network or Private network.
- Later guest steps retain the requested VM settings and use the same Web-Lab guest.
- Router setup rejects incorrect LAN, mask, either pool endpoint, DNS or disabled DHCP. Unsaved corrections do not pass.
- UI regression tests correct settings through laptop controls and verify both Continue buttons update. The troubleshooting course still repairs DHCP separately from DNS.
- Real browser check: imported the incorrect VM build, saw all four corrections above the laptop, changed Private to External and saw only that message disappear; removed/recreated Web-Lab with correct resources and Continue became available. No browser console errors were recorded.
- Course picker explains the identical Home Network/Virtualization sequence and shared foundations in the other courses. Main-workflow manual text uses More, Camera, Guide options and Continue; OS exercise text retains its actual Check & continue control.

## Scope and limits

Course order and saved task indices are unchanged. Counts do not represent unique skills or full certification coverage. The existing simulation boundaries remain in the manual. Automated DOM tests stub WebGL; the browser check verifies the rendered feedback and VM correction path, not every possible device/camera combination.
