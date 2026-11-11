# Arcfold downloads

An Android launcher with a clean, gesture-based Home screen.

## Current development preview

**[Download Arcfold 0.5.19-miku4 APK](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.19-miku4/arcfold-dev.apk)**

Version code 27 · **Arcfold Dev** · Android 12/API31 or newer · Owner testing target: Galaxy Z Fold 6

[Release notes and checksums](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.19-miku4) · [All releases](https://github.com/cudldev/Arcfold-releases/releases) · [Fold6 checklist](TESTING.md)

Update the existing Arcfold Dev install to retain your saved layout. You can try Home before choosing it as the default launcher. GitHub's source ZIP contains these download pages; application source/history remain private.


[Interactive Miku Library/Search design study](https://cudldev.github.io/Arcfold-releases/miku/) — browser mockup, separate from the APK. Narrow cards, barely perceptible gradients and fading halftone, with comparison controls.

## Miku improvements

- Comic Library/Search: teal print, cream sticker tiles and rows, matching headers and directional transitions.
- Completely still Miku wallpaper. Music reaction has been removed, including for previously enabled settings.
- Validated icons stay visible across ordinary refreshes and scrolling, reducing blinking.
- Home list editor: Add apps, move earlier/later, Remove and Undo, without dragging apps into folders.
- Tiny system haptic ticks when the highlighted wheel item changes; Android haptic settings are respected.
- Long presses no longer also trigger a launch. Native folder cancel/drop/Undo and shortcuts remain supported.

Choose **Customize → Appearance → Theme → Miku · Halo**. Hold empty Home space to edit; swipe up for Library and down for Search. To restore your previous launcher, use **Customize → Choose default launcher**.

[Library preview](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.19-miku4/miku-library.png) · [Search preview](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.19-miku4/miku-search.png) · [Home editor preview](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.19-miku4/miku-edit.png)

Home retains the perspective comic fan and Circle spinner, floating Barlow labels, circular installed-app icons, foreground character, saved scene controls and full safe-area footer. Library offers List/Grid, sorting, an alphabet rail and editable collections. Collections filter Library only. Android profile boundaries remain separate. Widget hosting, external theme packs and experimental device/live-wallpaper mode remain deferred.

## Tested scope

The exact code27 APK passed **check/debug/test assembly and 44 unique app +12 platform API37 methods, with no skips**. Native cover/open Home, Library, Search and Edit frames were inspected. Tests cover order editing, Add/Undo, stable icon refresh, haptic dispatch, long presses, shortcut pin/move/recreation/launch, native folder cancel/drop/Undo, catalog motion and Search/IME/Back. All recorded emulator baselines were restored. No APK rebuild followed qualification; the existing signer, permissions and runtime dependencies are retained.

Physical Fold6 appearance, haptic intensity, folding and performance; Android12/12L runtime; Android system wallpaper mutation; main integration and hosted/reboot/full beta gates remain open. Separating-fold Edit retains the existing regional fallback. The older automated folder appearance-picker journey remains unqualified; folder drag/cancel/Undo was checked separately with native input. Emulator display sizes do not establish Samsung device qualification. Earlier previews remain available.

On 2026-11-09 the owner reported that a permission change resolved the earlier Play Protect block; the exact permission/version were unspecified. This remains owner feedback, separate from independent Google classification.

## Updates and licensing

Package: **dev.arcfold.launcher.debug**. Retained certificate SHA-256: `73e327dbf5bb2df83642fe563ef54e96547979e3250d1b1839292d3214e2d119`.

Project-owned code uses [Apache-2.0](LICENSE). The generated Hatsune Miku illustration is a noncommercial character adaptation: © Crypton Future Media, INC. 2007, [CC BY-NC 3.0](https://creativecommons.org/licenses/by-nc/3.0/), following [Piapro creator guidance](https://piapro.net/intl/en_for_creators.html). No endorsement is claimed. Barlow Condensed Black Italic uses OFL-1.1. Attribution and font licenses are in Appearance and the download notices. Checksums, build metadata and runtime inventory accompany the APK.
