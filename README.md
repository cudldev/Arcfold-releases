# Arcfold downloads

An Android launcher with a clean, gesture-based Home screen.

## Current development preview

**[Download Arcfold 0.5.17-miku2 APK](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.17-miku2/arcfold-dev.apk)**

Version code 25 · Opens as **Arcfold Dev** · Android 12/API31 or newer · Owner testing target: Galaxy Z Fold 6

[Release notes and checksums](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.17-miku2) · [All releases](https://github.com/cudldev/Arcfold-releases/releases) · [Fold 6 checklist](TESTING.md)

**Early development preview.** On 2026-11-09 the owner reported that the permission change resolved the earlier Play Protect block; the exact permission and installed version were not specified. This is owner feedback, without independent Google classification clearance. Keep Play Protect enabled.

Download **arcfold-dev.apk** from Assets. GitHub's source ZIP contains this download page, not the Android application.

1. Download and open the APK on your phone. Allow installation for the app opening it if Android asks.
2. Update the existing **Arcfold Dev** install to retain your saved layout. You can try Home before choosing it as the default launcher.
3. Swipe up for Library, down for Search and sideways for Home pages. Hold empty space to edit.
4. To return to your previous launcher, use **Customize → Choose default launcher**.

### New in this preview

- Wider **pearly bubble rims**, brighter mint/pink/violet/champagne highlights, soft white reflections and stronger clear refraction.
- The clock hub uses the matching glass. Attached names have softer backing over the owned scene; imported images and Reduce effects retain stronger backing.
- Decorative interference drifts slowly while artwork, names and touch targets stay fixed.
- The existing optional Miku preset retains its persistent infinite Home half-halo, normal Library grid, SDF ribbons/particles and opt-in output music visualization.

Choose **Appearance → Theme → Miku · Halo**. Under **Effects**, **React to music** is off by default. It requests `RECORD_AUDIO`; normal `MODIFY_AUDIO_SETTINGS` is also declared for output-mix FFT. No microphone source, AudioRecord, saved audio, metadata collection, network or background service is used. Denied/unavailable output leaves ambient effects. Player/OEM compatibility varies; videos and games using media output may also drive it.

[Actual Home screenshot](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.17-miku2/miku-halo-home.png) · [Library screenshot](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.17-miku2/miku-halo-library.png) · [Music screenshot](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.17-miku2/miku-halo-music.png)

Background choices also update Android Home wallpaper. Bottom Search follows the keyboard; Edit preserves Home geometry. Library/Search app dragging, page-edge hover, folder drops and Undo remain available. **Widget hosting remains deferred:** existing placements stay as removable placeholders; new widget setup/resize is unavailable.

Midnight Arc/Aurora and Frost/Pearl retain their generated phone/wide wallpapers. Imported images take precedence. Untinted shared-scene glass and sharp app artwork remain; settings stay opaque. Glass stays active under advisory power/heat/memory signals, with manual Reduce effects and actual graphics/lifecycle fallbacks. Appearance shows status and Retry.

Library offers List/Grid, sorting, an alphabet rail and editable collections. Collections filter Library only and are separate from Android work profiles. Search offers local recents, apps, supported device settings, Arcfold actions and available published shortcuts. Private Space stays separate. Home adapts to available space and reported separating folds; Bottom/Left/Right dock preferences are currently shared across displays. Manual layout transfer remains available. This preview excludes the separate experimental device/live-wallpaper mode.

### Tested scope

The exact code25 APK passed check/debug assembly, **51 model test outputs and 11 targeted app +8 unique platform cases on Android 17/API37**. Coverage includes native Home/Library/Edit/music presentation, stable names and hit targets during music, Search/IME/native Back, launch/return, halo scroll/recreation, empty/missing/single items, Edit geometry, drag cancellation, one commit and Undo. Recorded emulator data, APK, Home/display/settings/boot/widget/user/audio baselines were restored. Retained signer, unchanged permissions/native/font/artwork payloads and 16 KiB ZIP alignment were verified. No rebuild followed qualification.

Runtime library dependencies are unchanged. Open font assets and OFL-1.1 notices remain bundled. API31–32, Reduce effects and shader failures retain the simpler non-AGSL background fallback. The new preset's native Home wallpaper mutation still needs a fresh wallpaper emulator or physical check; feature tests set theme preferences directly.

Physical Fold6 glass appearance, readability, interaction feel, frame pacing, refresh-rate switching and folding; Android12/12L runtime; hosted/reboot and full beta gates remain open. Refresh rate follows Android/Compose. Previous development previews remain available. Main integration and the new preset's native appearance acceptance remain open.

## Updates and licensing

Package: **dev.arcfold.launcher.debug**. The retained development signer permits updates without uninstalling your saved layout. Certificate SHA-256: 73e327dbf5bb2df83642fe563ef54e96547979e3250d1b1839292d3214e2d119.

This public repository contains download documentation and binary releases. Application source/history remain private. Project-owned material uses [Apache-2.0](LICENSE); third-party notices, checksums, build metadata and the runtime inventory accompany the APK. Production signing, Play and stable-release qualification remain open.
