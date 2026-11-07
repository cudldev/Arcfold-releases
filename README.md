# Arcfold downloads

An Android launcher with a clean, gesture-based Home screen.

## Current development preview

**[Download Arcfold 0.2.2-m2 APK](https://github.com/cudldev/Arcfold-releases/releases/download/v0.2.2-m2/arcfold-dev.apk)**

Android 10 or newer · Version code 5 · Opens as **Arcfold Dev**

[Release notes and checksums](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.2.2-m2) · [All releases](https://github.com/cudldev/Arcfold-releases/releases) · [Device testing checklist](TESTING.md)

Bookmark the **All releases** page for future tested APKs. Download `arcfold-dev.apk` from the release's Assets. GitHub's source ZIP contains this download page, not the Android app.

## Try it

1. Download and open the APK on your phone. If Android asks, allow installation for the app opening the file.
2. Open **Arcfold Dev**. You can try it before choosing it as your default Home.
3. Swipe up for Library, down for Search, and sideways for pages. Hold empty Home space to edit; hold an app for its options.
4. To switch back, hold empty Home space → **Customize → Choose default launcher**.

This build fixes cramped Search/keyboard layouts, Back navigation and clipped Edit controls. Local Android 10 and Android 17 emulator checks passed, including UI, storage, crash recovery, cutout/large-text and native Home/reboot journeys. Physical Fold 6 and accessibility testing remain open. It is a development preview; widgets, shortcuts, complete Private Space handling and polished glass rendering are later work.

## Updates and licensing

These previews use a consistent development signing certificate so newer version codes can update the existing **Arcfold Dev** install. The package is `dev.arcfold.launcher.debug`; certificate SHA-256: `73e327dbf5bb2df83642fe563ef54e96547979e3250d1b1839292d3214e2d119`. Checksums and build metadata accompany each release.

This public repository contains download documentation and binary releases. Application source and development history remain in a separate private repository. Project-owned material uses [Apache-2.0](LICENSE); third-party notices accompany the APK. Publishing a preview does not claim production-release or Play qualification.
