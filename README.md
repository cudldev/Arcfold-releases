# Arcfold downloads

An Android launcher with a clean, gesture-based Home screen.

## Current development preview

**[Download Arcfold 0.5.4-security1 APK](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.4-security1/arcfold-dev.apk)**

Version code 12 · Opens as **Arcfold Dev** · Owner testing target: Galaxy Z Fold 6

[Release notes and checksums](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.4-security1) · [All releases](https://github.com/cudldev/Arcfold-releases/releases) · [Fold 6 checklist](TESTING.md)

**Warning-retest development preview:** published at the owner's request to test whether the earlier Play Protect warning recurs. Its cause remains unresolved; the shortcut-icon repair and local checks are not safety or Google clearance. Keep Play Protect enabled.

Download `arcfold-dev.apk` from Assets. GitHub's source ZIP contains this download page, not the Android app.

1. Download and open the APK on your phone. Allow installation for the app opening it if Android asks.
2. Open **Arcfold Dev**. You can try Home before choosing it as your default launcher.
3. Swipe up for Library, down for Search and sideways for Home pages. Hold empty space to edit; hold an app for its options.
4. To return to your previous launcher, use **Customize → Choose default launcher**.

Midnight Arc starts with Aurora artwork; Frost starts with Pearl. Each has phone and wide compositions, and imported wallpapers take precedence. Supported devices render reactive glass in the dock, folders and action menus; Reduced effects uses a simpler surface.

Library and Search fill the screen. Library offers List/Grid, sorting, an edge alphabet index and editable Personal/Work/custom collections. These collections affect Library only and are separate from Android work profiles. Search includes local recent Arcfold launches, supported public device settings, Arcfold appearance/dock actions and available published app shortcuts. Recent history can be cleared or disabled.

Home adapts to available window space and reported separating folds. Choose a bottom, left or right dock; its placement preference is currently shared across displays. Shortcuts, native widgets, separate Android Private Space and manual layout export/import are included. Set Arcfold as Home to use role-dependent features. Imports require local widget setup; exports omit work/private entries. Samsung Secure Folder support is not implied.

The APK declares Android 10 as its minimum. Qualification focuses on Android 17 emulators; broader Android/OEM support is deferred. Physical Fold 6 appearance, tilt, Samsung keyboard behavior, accessibility and performance remain owner-test items. Code12 passed 35 platform cases and 174 ordinary app cases (138 passes, 36 explicit host/diagnostic skips), 14 native journey groups and eleven non-reboot lifecycle checks. M3, code10 and code11 basic/widget upgrades passed. Host-backed disposable baseline data, APKs, settings, users and grants were restored. Current hosted-device, unattended reboot and full milestone/beta qualification remain open.

This update fixes shortcut-icon cache access after Home/shortcut authorization is revoked and updates the pinned host build tool to Gradle 9.8.2. It retains motion3's glass transitions and recent-launch repair. Other unreleased visual work is excluded. Earlier [motion3/code11](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.3-motion3), [glass2/code10](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.2-glass2) and [glass1/code9](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.1-glass1) remain immutable.

## Updates and licensing

The development package is `dev.arcfold.launcher.debug`. The existing signing certificate permits updates over the published M3 preview without uninstalling its saved layout. Certificate SHA-256: `73e327dbf5bb2df83642fe563ef54e96547979e3250d1b1839292d3214e2d119`.

This public repository contains download documentation and binary releases. Application source/history remain private. Project-owned material uses [Apache-2.0](LICENSE); third-party notices, checksums, build metadata and runtime inventory accompany the APK. This is a development preview; production signing, Play and stable-release qualification remain open.
