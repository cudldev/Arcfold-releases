# Arcfold downloads

An Android launcher with a clean, gesture-based Home screen.

## Current development preview

**[Download Arcfold 0.5.2-glass2 APK](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.2-glass2/arcfold-dev.apk)**

Version code 10 · Opens as **Arcfold Dev** · Owner testing target: Galaxy Z Fold 6

[Release notes and checksums](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.2-glass2) · [All releases](https://github.com/cudldev/Arcfold-releases/releases) · [Fold 6 checklist](TESTING.md)

Download `arcfold-dev.apk` from Assets. GitHub's source ZIP contains this download page, not the Android app.

1. Download and open the APK on your phone. Allow installation for the app opening it if Android asks.
2. Open **Arcfold Dev**. You can try Home before choosing it as your default launcher.
3. Swipe up for Library, down for Search and sideways for Home pages. Hold empty space to edit; hold an app for its options.
4. To return to your previous launcher, use **Customize → Choose default launcher**.

Midnight Arc starts with Aurora artwork; Frost starts with Pearl. Each has phone and wide compositions, and imported wallpapers take precedence. Supported devices render reactive glass in the dock, folders and action menus; Reduced effects uses a simpler surface.

Library and Search fill the screen. Library offers List/Grid, sorting, an edge alphabet index and editable Personal/Work/custom collections. These collections affect Library only and are separate from Android work profiles. Search includes local recent Arcfold launches, supported public device settings, Arcfold appearance/dock actions and available published app shortcuts. Recent history can be cleared or disabled.

Home adapts to available window space and reported separating folds. Choose a bottom, left or right dock; its placement preference is currently shared across displays. Shortcuts, native widgets, separate Android Private Space and manual layout export/import are included. Set Arcfold as Home to use role-dependent features. Imports require local widget setup; exports omit work/private entries. Samsung Secure Folder support is not implied.

The APK declares Android 10 as its minimum. Qualification focuses on Android 17 emulators; broader Android/OEM support is deferred. Physical Fold 6 appearance, tilt, Samsung keyboard behavior, accessibility and performance remain owner-test items. Exact checks and remaining limits accompany the release. Code10 passed the full local suites and eleven non-reboot lifecycle checks, including role loss and Settings exit. Unattended reboot remains open. Both hosted full-image checkpoints failed SystemUI startup before app tests despite passing builds; this preview relies on local/native qualification and does not claim a hosted-device pass.

This update adds protection against replacing an existing Home when its WAL is unreadable; the glass design is unchanged. [Earlier glass1/code9](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.1-glass1) remains available.

## Updates and licensing

The development package is `dev.arcfold.launcher.debug`. The existing signing certificate permits updates over the published M3 preview without uninstalling its saved layout. Certificate SHA-256: `73e327dbf5bb2df83642fe563ef54e96547979e3250d1b1839292d3214e2d119`.

This public repository contains download documentation and binary releases. Application source/history remain private. Project-owned material uses [Apache-2.0](LICENSE); third-party notices, checksums, build metadata and runtime inventory accompany the APK. This is a development preview; production signing, Play and stable-release qualification remain open.
