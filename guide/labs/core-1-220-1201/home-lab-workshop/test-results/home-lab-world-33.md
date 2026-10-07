# 3D home lab validation

Automated: all existing test-lab suites passed before integration review; affected learning/save/return/UI suites passed after changes. Added test-lab-world passes for 13 model types, 116 port transforms (bench/rack variants), stable desk placement, rack/unmount collision rejection, exact storage coordinate mapping, shelf Undo and atomic cable moves.

Native local browser: first guided laptop added; source and destination camera framing; power cord dragged to wall OUT1; task completion enabled; switched laptop on; exploded 3D button and native double-click both opened model; seated power plug dragged onto blank desk and cable count dropped; server dragged into U5–U6 then back onto desk; saved build reloaded; invalid power-plug move to occupied data socket preserved all 11 connections. Desktop and 390px viewport had no horizontal document overflow. Narrow view camera corrected to fit the full bench/rack. No current runtime errors observed.

Review fixes: desk positions persist before rack movement, coordinate mapping matches collision checks, layout.world survives shelf Undo/import, pending gestures clear on state replacement, Escape restores preview mesh positions, keyboard label activation works, rails are visible, duplicate old bench controls removed.

Scope: generic equipment geometry, browser-only educational state, cable slack/real electrical behavior and real guest kernels not simulated. No physical disassembly; exploded view only changes displayed connector spacing. WebGL 2 failure keeps illustrated fallback available. Mobile overview is intentionally small; Focus selected and named sockets support precise use.
