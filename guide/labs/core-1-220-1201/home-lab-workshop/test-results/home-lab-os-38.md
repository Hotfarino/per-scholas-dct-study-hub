# Edition 38 OS appearance and interaction review

## What changed

- Windows Bloom desktop, centered taskbar, Start/search, tray/clock, File Explorer and Settings styling.
- Ubuntu Noble Numbat wallpaper, Yaru icons, GNOME top bar, left dock, application grid, Files/Settings window styling.
- Windows Terminal PowerShell/CMD tabs and Ubuntu aubergine terminal; inline keyboard input, separate transcripts, shell-specific IP output.
- Simulation controls and coaching moved outside the projected LCD. New desktop sessions begin with windows minimized.
- OS artwork and exact attribution/reference URLs included with the downloadable project.

## Local browser checks

Reviewed the 3D laptop at 1280×720 and 900×800, including Larger text. The desktop stayed attached to the LCD and the bezel remained visible. No page or terminal horizontal overflow was detected at 900×800. Loaded app icons had valid natural dimensions.

Verified Windows desktop, Start app filtering, Escape dismissal without closing the laptop, PowerShell, Command Prompt, Windows Settings, File Explorer, Ubuntu desktop, application grid, Ubuntu Terminal and Ubuntu Network. The final Ubuntu JPEG wallpaper loaded after a fresh page opening. Browser error log was empty.

Verified an Ubuntu manual-address edit from 192.168.50.100 to 192.168.50.210, followed by `ip addr` showing the saved address. Switched back to Windows and saw the same physical interface settings. Opened the Web-Lab guest console through Windows and saw the guest's distinct 192.168.50.101 address. Disconnect returned to the physical client. Coach and OS-profile controls remained operable after moving outside the LCD; an initial inherited-inert issue was corrected during review.

## Automated checks

Passed: test-lab-desktop.mjs, test-lab-screen.mjs, test-lab-courses.mjs, test-lab-save.mjs, test-lab-ui.mjs, test-lab-network.mjs, test-lab.mjs, test-lab-world.mjs, test-lab-blender.mjs, test-lab-world-routing.mjs. Desktop coverage includes shell transcript isolation, clearing one shell while preserving the other, collapsed/edit/save IPv4 controls, learning progress, static guest state, service controls, VM and lab capability gates, and power-loss behavior. Syntax and git whitespace checks passed.

## Boundaries

This is a restricted educational recreation, not an OS kernel, remote VM host, complete Windows/Ubuntu application suite, or pixel-perfect copy of every OS release. UI paths are simplified around supported labs. Unmodeled IP-output fields are omitted. Terminal timing, process execution and external Internet access are not fabricated. The settings and output that do work are derived from the lab model. Phone layouts retain the existing pannable screen design; this visual review focused on desktop and tablet widths.
