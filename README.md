# Arcfold downloads

An Android launcher with a clean, gesture-based Home screen.

## Current development preview

**[Download Arcfold 0.5.21-miku6 APK](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.21-miku6/arcfold-dev.apk)**

Version code 29 · **Arcfold Dev** · Android 12/API31 or newer · Owner testing target: Galaxy Z Fold 6

[Release notes and checksums](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.21-miku6) · [All releases](https://github.com/cudldev/Arcfold-releases/releases) · [Fold6 checklist](TESTING.md)

Update the existing Arcfold Dev install to retain your saved layout. You can try Home before choosing it as the default launcher. GitHub's source ZIP contains these download pages; application source/history remain private.


[Interactive Miku Library/Search design study](https://cudldev.github.io/Arcfold-releases/miku/?v=group5) — compare Current / Proposed, with Icon + label / Shared rows, whole-row paper depth, fading edges, 5% gradient and the white comic header slab. This browser experiment is separate from the APK.

## Miku improvements

- Unboxed angled App Library headline with a clean Miku head sticker and compact collection picker.
- Tight icon/label pairs without app slabs, with full list names.
- Library items recede and fade, with a full-size foreground and measured end-row centering.
- A 5% Library gradient; Home finish remains unchanged.
- A lower-half halftone dot field that fades softly behind content and follows the visible fold/keyboard region.
- Short-window, large-text and separating-fold adaptations retain usable Library controls and app rows.

The completely still wallpaper, steadier icons, Home list Add/order/Remove/Undo and soft wheel haptics from code27 remain available.
Choose **Customize → Appearance → Theme → Miku · Halo**. Hold empty Home space to edit; swipe up for Library and down for Search. To restore your previous launcher, use **Customize → Choose default launcher**.

[Library preview](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.21-miku6/miku-library.png) · [Search preview](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.21-miku6/miku-search.png) · [Open Library preview](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.21-miku6/miku-open.png)

Home retains the perspective comic fan and Circle spinner, floating Barlow labels, circular installed-app icons, foreground character, saved scene controls and full safe-area footer. Library offers List/Grid, sorting, an alphabet rail and editable collections. Collections filter Library only. Android profile boundaries remain separate. Widget hosting, external theme packs and experimental device/live-wallpaper mode remain deferred.

## Tested scope

The exact code29 APK passed **check/debug/test assembly and 31 unique app +12 platform API37 methods, with no skips**. Actual native cover/open Home, Library, Search and Edit frames were inspected, alongside List/Grid, full long names, edge touch targets, 200% text, a tiny two-profile fixture and a synthetic separating fold. Tests cover rendered-pixel taps, projected drag coordinates, hidden-row holds, source disposal, reduced motion, native IME/Back and system insets, catalog motion, drag cancellation/drop/folder creation/Undo and Library-only collection filtering. All recorded emulator baselines were restored. No APK rebuild followed qualification; the existing signer, permissions and runtime dependencies are retained.

Physical Fold6 appearance, folding, vibration feel and performance; Android12/12L runtime; Android system wallpaper mutation; main integration and hosted/reboot/full beta gates remain open. The older folder appearance-picker journey remains unqualified. Synthetic window/fold fixtures and emulator display sizes do not establish Samsung device qualification. Earlier previews remain available.
On 2026-11-09 the owner reported that a permission change resolved the earlier Play Protect block; the exact permission/version were unspecified. This remains owner feedback, separate from independent Google classification.

## Updates and licensing

Package: **dev.arcfold.launcher.debug**. Retained certificate SHA-256: `73e327dbf5bb2df83642fe563ef54e96547979e3250d1b1839292d3214e2d119`.

Project-owned code uses [Apache-2.0](LICENSE). The generated Hatsune Miku illustration is a noncommercial character adaptation: © Crypton Future Media, INC. 2007, [CC BY-NC 3.0](https://creativecommons.org/licenses/by-nc/3.0/), following [Piapro creator guidance](https://piapro.net/intl/en_for_creators.html). No endorsement is claimed. Barlow Condensed Black Italic uses OFL-1.1. Attribution and font licenses are in Appearance and the download notices. Checksums, build metadata and runtime inventory accompany the APK.
