# M2 physical-device smoke check

Target: owner's Samsung Galaxy Z Fold 6. **Not yet tested.** Current candidate: **0.2.2-m2**, version code 5, shown as **Arcfold Dev**. Record its version plus Android/One UI build, navigation mode and font scale before testing. Start without making it default, then repeat the launch/return and fold journeys with Arcfold as Home.

| Journey | Expected result |
| --- | --- |
| Open Arcfold without making it default | Swipe up opens Library; down opens Search. Apps launch and return normally. Declining the default-Home dialog keeps Samsung Home |
| Pin two apps; add a second page | Horizontal swipes stop at the ends. Search/Library returns to its source page; system Home returns to page one |
| Search and launch | Results filter locally. Back hides the keyboard first, then returns. Returning from a launched app retains the query while the process lives |
| Hold/drag one app onto another | A folder contains both apps. Rename survives app restart. Move a child out; the remaining child replaces the one-app folder |
| Move to dock, then Undo | The app keeps its identity and returns to its original position. Removing a Home pin does not uninstall the app |
| Fold/unfold while Home, folder, Search or a drag is open | Committed content remains reachable; stale drags cancel. Start with five cycles; the full qualification still needs 100 cycles and recorded results |
| Large text, keyboard and both displays | At 200% font scale, rotate with Search/keyboard open. Short windows use scrollable result rows; names and Cancel remain visible. Scroll to a second result. Editing keeps entire placement buttons visible; scrolling reaches overflowing toolbar controls and dock pins |
| Keyboard, if available | Ctrl+F Search, Ctrl+L Library, F2 Edit, Escape closes the current surface/cancels a move. Tab/Shift+Tab and Enter reach actions; Shift+F10 opens an app menu. Focus has a visible outline |
| TalkBack or switch access | Home actions expose Library, Search, Edit and Settings. App options expose Move; each empty destination announces a numbered position. Complete a move and Undo without a swipe |

To return to Samsung Home: hold empty Home space → **Customize → Choose default launcher**. Android Settings remains available in the same menu.

Record each journey as pass/fail/not tested, whether the phone was folded, and the shortest reproduction sequence for any failure. Five successful fold cycles are a smoke result, not the full adaptive gate. Emulator checks cannot establish physical gesture feel, TalkBack usability or fold continuity.
