# Arcfold downloads

An Android launcher with a clean, gesture-based Home screen.

## Current development preview

**[Download Arcfold 0.5.16-miku1 APK](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.16-miku1/arcfold-dev.apk)**

Version code 24 · Opens as **Arcfold Dev** · Android 12/API31 or newer · Owner testing target: Galaxy Z Fold 6

[Release notes and checksums](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.16-miku1) · [All releases](https://github.com/cudldev/Arcfold-releases/releases) · [Fold 6 checklist](TESTING.md)

**Early development preview.** On 2026-11-09 the owner reported that the permission change resolved the earlier Play Protect block; the exact permission and installed version were not specified. This is owner feedback, without independent Google classification clearance. Keep Play Protect enabled.

Download **arcfold-dev.apk** from Assets. GitHub's source ZIP contains this download page, not the Android application.

1. Download and open the APK on your phone. Allow installation for the app opening it if Android asks.
2. Update the existing **Arcfold Dev** install to retain your saved layout. You can try Home before choosing it as the default launcher.
3. Swipe up for Library, down for Search and sideways for Home pages. Hold empty space to edit.
4. To return to your previous launcher, use **Customize → Choose default launcher**.

### New in this preview

- **Miku · Halo**, an optional bundled preset: infinitely scrolling, tilted Home half-halo for your chosen apps/folders/shortcuts, with remembered item and fractional position. Library keeps a normal grid.
- Transparent soap-film bubbles with iridescent rims and names attached to their lower edge. Music moves the decorative film while artwork, names and touch bounds stay fixed.
- Procedural SDF teal ribbons with soft volume, luminous crests and slow flow, plus sparse GPU particles. No character artwork is bundled.
- A center clock disc with small ambient ticks and a long radial spectrum during supported media playback.
- Halo Edit and Library drag previews preserve geometry, existing placement/profile checks, cancellation, one commit and Undo.

Choose **Appearance → Theme → Miku · Halo**. Under **Effects**, **React to music** is off by default. It requests `RECORD_AUDIO`; normal `MODIFY_AUDIO_SETTINGS` is also declared for output-mix FFT. No microphone source, AudioRecord, saved audio, metadata collection, network or background service is used. Denied/unavailable output leaves ambient effects. Player/OEM compatibility varies; videos and games using media output may also drive it.

[Actual Home screenshot](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.16-miku1/miku-halo-home.png) · [Music screenshot](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.16-miku1/miku-halo-music.png)

Background choices also update Android Home wallpaper. Bottom Search follows the keyboard; Edit preserves Home geometry. Library/Search app dragging, page-edge hover, folder drops and Undo remain available. **Widget hosting remains deferred:** existing placements stay as removable placeholders; new widget setup/resize is unavailable.

Midnight Arc/Aurora and Frost/Pearl retain their generated phone/wide wallpapers. Imported images take precedence. Untinted shared-scene glass and sharp app artwork remain; settings stay opaque. Glass stays active under advisory power/heat/memory signals, with manual Reduce effects and actual graphics/lifecycle fallbacks. Appearance shows status and Retry.

Library offers List/Grid, sorting, an alphabet rail and editable collections. Collections filter Library only and are separate from Android work profiles. Search offers local recents, apps, supported device settings, Arcfold actions and available published shortcuts. Private Space stays separate. Home adapts to available space and reported separating folds; Bottom/Left/Right dock preferences are currently shared across displays. Manual layout transfer remains available. This preview excludes the separate experimental device/live-wallpaper mode.

### Tested scope

The exact code24 APK passed check/debug assembly, **51 model tests and 23 targeted app +8 platform cases on Android 17/API37**. Coverage includes GPU SDF compilation/visible crests/phase evolution/loop continuity, actual output audio, stable names/hit bounds during music, halo wrap/recreation/process death, real launch/return, empty/missing/single items, Edit/drag/cancellation/Undo, ordinary folder moves and Search/IME/focus. Recorded data, APK, Home/display/settings/widget/user/audio baselines were restored. Retained signer, expected audio permission additions, unchanged native/font/artwork bytes and 16 KiB ZIP alignment were verified. No rebuild followed qualification.

Runtime library dependencies are unchanged. Open font assets and OFL-1.1 notices remain bundled. API31–32, Reduce effects and shader failures retain the simpler non-AGSL background fallback. The new preset's native Home wallpaper mutation still needs a fresh wallpaper emulator or physical check; feature tests set theme preferences directly.

Physical Fold6 glass appearance, readability, interaction feel, frame pacing, refresh-rate switching and folding; Android12/12L runtime; hosted/reboot and full beta gates remain open. Refresh rate follows Android/Compose. The previous code23 preview remains available. Main integration and the new preset's native appearance acceptance remain open.

## Updates and licensing

Package: **dev.arcfold.launcher.debug**. The retained development signer permits updates without uninstalling your saved layout. Certificate SHA-256: 73e327dbf5bb2df83642fe563ef54e96547979e3250d1b1839292d3214e2d119.

This public repository contains download documentation and binary releases. Application source/history remain private. Project-owned material uses [Apache-2.0](LICENSE); third-party notices, checksums, build metadata and the runtime inventory accompany the APK. Production signing, Play and stable-release qualification remain open.
