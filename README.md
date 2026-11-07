# Arcfold downloads

An Android launcher with a clean, gesture-based Home screen.

## Current development preview

**[Download Arcfold 0.5.0-m5 APK](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.0-m5/arcfold-dev.apk)**

Android 17 first · Version code 8 · Opens as **Arcfold Dev**

[Release notes and checksums](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.0-m5) · [All releases](https://github.com/cudldev/Arcfold-releases/releases) · [Device testing checklist](TESTING.md)

Download `arcfold-dev.apk` from the release's Assets. GitHub's source ZIP contains this download page, not the Android app.

## Try it

1. Download and open the APK on your phone. If Android asks, allow installation for the app opening the file.
2. Open **Arcfold Dev**. You can try it before choosing it as your default Home.
3. Swipe up for Library, down for Search, and sideways for pages. Hold empty Home space to edit; hold an app for its options.
4. To switch back, hold empty Home space → **Customize → Choose default launcher**.

Home, Library and Search adapt to different window sizes and reported separating folds. Choose a bottom, left or right dock; folders, menus and settings fit within usable regions. The dock setting is currently **shared across displays**; independent cover/inner preferences await reliable display identification.

Choose Midnight Arc or Frost, reduced effects, and an optional owned photo backdrop. Supported devices use a shared blur; advanced refraction and tilt effects are not implemented. Visual and performance calibration remain open.

The preview also includes app shortcuts, native widgets, a separate Android Private Space container and manual layout export/import. Library can dismiss with a downward swipe when its list was already at the top. Set Arcfold as Home to use shortcuts, widgets and Private Space. Imported widgets require local setup; exports omit work/private entries.

Local Android 17 emulator checks cover the development preview. The APK declares Android 10 as its minimum; older-version qualification is deferred. Physical Fold 6, OEM restore/profile policies, human accessibility, performance and production-release gates remain open. Samsung Secure Folder support is not implied.

## Updates and licensing

These previews use a consistent development signing certificate so newer version codes can update the existing **Arcfold Dev** install. The package is `dev.arcfold.launcher.debug`; certificate SHA-256: `73e327dbf5bb2df83642fe563ef54e96547979e3250d1b1839292d3214e2d119`. Checksums and build metadata accompany each release.

This public repository contains download documentation and binary releases. Application source and development history remain in a separate private repository. Project-owned material uses [Apache-2.0](LICENSE); third-party notices accompany the APK. Publishing a preview does not claim production-release or Play qualification.
