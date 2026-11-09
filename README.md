# Arcfold downloads

An Android launcher with a clean, gesture-based Home screen.

## Current development preview

**[Download Arcfold 0.5.12-ux1 APK](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.12-ux1/arcfold-dev.apk)**

Version code 20 · Opens as **Arcfold Dev** · Android 12/API31 or newer · Owner testing target: Galaxy Z Fold 6

[Release notes and checksums](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.12-ux1) · [All releases](https://github.com/cudldev/Arcfold-releases/releases) · [Fold 6 checklist](TESTING.md)

**Early development preview:** Play Protect blocked earlier previews and the cause remains unresolved. Passing functional checks do not establish Google or safety clearance. Keep Play Protect enabled.

Download **arcfold-dev.apk** from Assets. GitHub's source ZIP contains this download page, not the Android application.

1. Download and open the APK on your phone. Allow installation for the app opening it if Android asks.
2. Update the existing **Arcfold Dev** install to retain your saved layout. You can try Home before choosing it as the default launcher.
3. Swipe up for Library, down for Search and sideways for Home pages. Hold empty space to edit.
4. To return to your previous launcher, use **Customize → Choose default launcher**.

### New in this preview

- Changing or removing the background also updates Android Home wallpaper. A separately selected lock wallpaper is preserved; Android refusal is reported.
- Search sits at the bottom and moves above the keyboard. Back hides the keyboard first, then returns to the source view.
- Library/Search fades and native app handoff are softer. Back on Home stays on Home, and layout notices no longer replay on every return.
- Refined Compact/Large/Full width clocks. Edit uses the same clock, grid and dock geometry as Home, with editing controls and drop targets.
- Tap an empty Edit slot to select an app for that position.
- Hold then drag a Library/Search app onto Home. Hover at an edge to change pages, or drop onto another app to create a folder. Cancel saves nothing; Undo restores the previous arrangement. Menu and keyboard routes remain available.
- **Widget hosting is temporarily deferred.** Existing widget placement/journal data is retained and shown as generic removable placeholders. New widget discovery, setup and resize are unavailable in this preview.

Midnight Arc/Aurora and Frost/Pearl retain their generated phone/wide wallpapers. Imported images take precedence. Untinted shared-scene glass and sharp app artwork remain; settings stay opaque. Glass stays active under advisory power/heat/memory signals, with manual Reduce effects and actual graphics/lifecycle fallbacks. Appearance shows status and Retry.

Library offers List/Grid, sorting, an alphabet rail and editable collections. Collections filter Library only and are separate from Android work profiles. Search offers local recents, apps, supported device settings, Arcfold actions and available published shortcuts. Private Space stays separate. Home adapts to available space and reported separating folds; Bottom/Left/Right dock preferences are currently shared across displays. Manual layout transfer remains available. This preview excludes the separate experimental device/live-wallpaper mode.

### Tested scope

The exact code20 APK passed check/debug assembly, **27 app and four platform cases on Android 17/API37**. Coverage includes native wallpaper picker/application and separate-lock preservation, keyboard/Back, stable Edit/Home geometry, exact-slot placement, drag/cancel/multitouch, cross-page and folder drops, Undo, dialog focus, clock persistence/large-text RTL fitting and native app launch/return. All saved shared-emulator baselines were restored; wallpaper writes used a separate fresh disposable emulator.

Physical Fold6 appearance, touch feel, frame pacing and folding, Android12/12L runtime, hosted/reboot and full beta gates remain open. Earlier releases, including [glass8/code18](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.10-glass8), remain immutable.

## Updates and licensing

Package: **dev.arcfold.launcher.debug**. The retained development signer permits updates without uninstalling your saved layout. Certificate SHA-256: 73e327dbf5bb2df83642fe563ef54e96547979e3250d1b1839292d3214e2d119.

This public repository contains download documentation and binary releases. Application source/history remain private. Project-owned material uses [Apache-2.0](LICENSE); third-party notices, checksums, build metadata and the runtime inventory accompany the APK. Production signing, Play and stable-release qualification remain open.
