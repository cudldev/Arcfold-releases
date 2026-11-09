# Arcfold downloads

An Android launcher with a clean, gesture-based Home screen.

## Current development preview

**[Download Arcfold 0.5.13-home1 APK](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.13-home1/arcfold-dev.apk)**

Version code 21 · Opens as **Arcfold Dev** · Android 12/API31 or newer · Owner testing target: Galaxy Z Fold 6

[Release notes and checksums](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.13-home1) · [All releases](https://github.com/cudldev/Arcfold-releases/releases) · [Fold 6 checklist](TESTING.md)

**Early development preview.** On 2026-11-09 the owner reported that the permission change resolved the earlier Play Protect block; the exact permission and installed version were not specified. This is owner feedback, without independent Google classification clearance. Keep Play Protect enabled.

Download **arcfold-dev.apk** from Assets. GitHub's source ZIP contains this download page, not the Android application.

1. Download and open the APK on your phone. Allow installation for the app opening it if Android asks.
2. Update the existing **Arcfold Dev** install to retain your saved layout. You can try Home before choosing it as the default launcher.
3. Swipe up for Library, down for Search and sideways for Home pages. Hold empty space to edit.
4. To return to your previous launcher, use **Customize → Choose default launcher**.

### New in this preview

- Clean, Editorial, Stacked and Glass clock styles, existing Compact/Large/Full width sizes, alignment and ink choices. In Edit, drag the clock between safe top/bottom positions; cancel saves nothing.
- Recognizable tabbed folders with a peek at up to four accessible apps. Choose a plain Folder, Work, Media or Games symbol per folder.
- Hold and drag a folder app back onto Home. The app keeps its identity, cancellation saves nothing and Undo restores its previous arrangement. A folder containing only one remaining app collapses into that app.
- Wallpaper reaches behind the status and navigation bars; content retains safe insets.
- Cold Library/Search icons load lazily when visible and after scrolling or panel motion settles. Cached icons remain immediately reusable.
- Library/Search keep a broad, smooth blend throughout the drag, including its final stretch.

Background choices also update Android Home wallpaper. Bottom Search follows the keyboard; Edit preserves Home geometry. Library/Search app dragging, page-edge hover, folder drops and Undo remain available. **Widget hosting remains deferred:** existing placements stay as removable placeholders; new widget setup/resize is unavailable.

Midnight Arc/Aurora and Frost/Pearl retain their generated phone/wide wallpapers. Imported images take precedence. Untinted shared-scene glass and sharp app artwork remain; settings stay opaque. Glass stays active under advisory power/heat/memory signals, with manual Reduce effects and actual graphics/lifecycle fallbacks. Appearance shows status and Retry.

Library offers List/Grid, sorting, an alphabet rail and editable collections. Collections filter Library only and are separate from Android work profiles. Search offers local recents, apps, supported device settings, Arcfold actions and available published shortcuts. Private Space stays separate. Home adapts to available space and reported separating folds; Bottom/Left/Right dock preferences are currently shared across displays. Manual layout transfer remains available. This preview excludes the separate experimental device/live-wallpaper mode.

### Tested scope

The exact code21 APK passed check/debug assembly, **32 app and six platform cases on Android 17/API37**. Coverage includes clock styles, layout/persistence and cancelled positioning; folder previews, drag-out, cancellation and Undo; native system-bar wallpaper pixels; lazy icon gating, cancellation and cache reuse; GPU panel-edge blending; keyboard/Back, Home/Edit geometry, app placement and catalog gestures. All saved shared-emulator baselines were restored. No new permissions, runtime dependencies or wallpaper artwork.

Physical Fold6 appearance, touch feel, frame pacing and folding, Android12/12L runtime, hosted/reboot and full beta gates remain open. Earlier releases, including [0.5.12-ux1/code20](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.12-ux1), remain immutable.

## Updates and licensing

Package: **dev.arcfold.launcher.debug**. The retained development signer permits updates without uninstalling your saved layout. Certificate SHA-256: 73e327dbf5bb2df83642fe563ef54e96547979e3250d1b1839292d3214e2d119.

This public repository contains download documentation and binary releases. Application source/history remain private. Project-owned material uses [Apache-2.0](LICENSE); third-party notices, checksums, build metadata and the runtime inventory accompany the APK. Production signing, Play and stable-release qualification remain open.
