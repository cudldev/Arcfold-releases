# M5 physical-device check

Current preview: **0.5.0-m5**, version code **8**, shown as **Arcfold Dev**. Record the installed APK checksum/version, phone, Android/One UI build, navigation mode, keyboard, orientation, font size and display zoom. Physical results for this preview remain unrecorded. Start without making it default, then repeat with Arcfold as Home.

Use a populated second Home page with apps, a folder, a widget and dock favorites. Record pass/fail/not tested, screen/posture and a short reproduction. Avoid exposing personal or work/private content in captures.

| Journey | Check |
| --- | --- |
| Install and update | An existing same-signed Arcfold Dev install updates without uninstalling; saved pages, apps and folders remain. If the signer differs, do not uninstall merely to bypass it. |
| Cover and inner displays | Fold/unfold and rotate on the second page. Retain page, item order, folder contents and dock favorites; launch/return without duplicates or lost pins. |
| Dock and Edit | Try Bottom, Left and Right; inspect reach, overflow, actions, drag cancellation, accessible move and Undo. The dock preference is **shared across displays**; separate cover/inner settings are not yet available. |
| Library | Scroll within a profile, fold/rotate and return from Search; retain profile and app anchor. Back or a downward swipe that starts at the top closes it; scrolling back to the top alone must not. |
| Search and real IME | Search from Home and Library with the Samsung keyboard; fold/rotate with a query. Native Back hides the keyboard first, then returns to the source. Check focus and results on both displays. |
| Folder, menus and dialogs | Fold/rotate with an unsaved rename or scrolled folder; retain draft and child anchor. A context menu closes on geometry change and returns focus when possible. Check opaque settings/confirmations, outside tap and Back. |
| Widgets | Add simple, configurable and scrollable widgets; cancel once, then finish setup. Fold or rotate/recreate during permission/configuration and finish or cancel; verify one placement, no duplicate and usable content. Resize/move/restart/Undo and check unavailable/resize fallback. |
| Import and shortcut confirmation | Add and launch a published shortcut; move and Undo. Export a personal layout; cancel import without changing Home, then confirm and Undo. Fold/rotate/recreate while an import or shortcut confirmation is pending and confirm or cancel once. Imported widgets require setup. |
| Theme and backdrop | Try Midnight Arc and Frost, reduced effects and an owned photo. Check readability over light/dark/busy backgrounds. Refraction and tilt are not implemented; visual and performance calibration remain open. |
| Short/tabletop and insets | If Android reports a separating horizontal fold or a short window, check controls remain in usable regions and final actions are reachable; repeat with IME/taskbar. A visible flat crease alone is not a reported separator. |
| Large text and accessibility | At 200% text and changed zoom, check clipping, scroll and touch targets. Use Tab/Shift-Tab/Enter, Ctrl+F Search, Ctrl+L Library, F2 Edit, Escape and Shift+F10 app options. Try TalkBack/switch navigation, modal focus return, move and Undo. |
| Optional work and Private Space | Work entries remain distinct and pause/resume when permitted. Android Private Space stays separate from ordinary Search/export; lock/hide removes its entries. Secure Folder support is not implied. |

To return to Samsung Home: hold empty Home space → **Customize → Choose default launcher**. Android Settings is available in the same menu.

Begin with five complete fold/unfold cycles as a smoke check. A separate **100-cycle physical continuity gate** requires its own count and recorded results. Emulator checks do not establish physical gesture feel, accessibility or fold continuity. OEM restore/profile policies, visual/performance calibration and production-release qualification remain open.
