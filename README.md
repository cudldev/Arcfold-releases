# Arcfold downloads

An Android launcher with a clean, gesture-based Home screen.

## Current development preview

**[Download Arcfold 0.5.22-miku7 APK](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.22-miku7/arcfold-dev.apk)**

Version code 30 · **Arcfold Dev** · Android 12/API31 or newer · Owner testing target: Galaxy Z Fold 6

[Release notes and checksums](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.22-miku7) · [All releases](https://github.com/cudldev/Arcfold-releases/releases) · [Fold6 checklist](TESTING.md)

Update the existing Arcfold Dev install to retain your saved layout. You can try Home before choosing it as the default launcher. GitHub's source ZIP contains these download pages; application source/history remain private.


[Interactive Miku Library/Search design study](https://cudldev.github.io/Arcfold-releases/miku/?v=group5) — compare Current / Proposed, with Icon + label / Shared rows, whole-row paper depth, fading edges, 5% gradient and the white comic header slab. This browser experiment is separate from the APK.

## Miku improvements

- Visible Library icons load during held scrolling.
- Catalog rendering caches the static comic backdrop and reduces redundant offscreen buffers while retaining depth, edge fade and touch behavior.
- The still wallpaper and 5% catalog shading remain.

Choose **Customize → Appearance → Theme → Miku · Halo**. Hold empty Home space to edit; swipe up for Library and down for Search. To restore your previous launcher, use **Customize → Choose default launcher**.

[Library preview](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.22-miku7/miku-library.png) · [Search preview](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.22-miku7/miku-search.png) · [Open Library preview](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.22-miku7/miku-open.png)

Home retains the perspective comic fan and Circle spinner, floating Barlow labels, circular installed-app icons, foreground character, saved scene controls and full safe-area footer. Library offers List/Grid, sorting, an alphabet rail and editable collections. Collections filter Library only. Android profile boundaries remain separate. Widget hosting, external theme packs and experimental device/live-wallpaper mode remain deferred.

## Tested scope

The exact code30 APK passed check/debug/test assembly and 35 unique app +12 platform API37 methods, with no skips and all recorded emulator baselines restored. Cover/open and synthetic fold frames were inspected. Small-window fixtures are fit checks, not physical inset qualification. Physical Fold6 performance, appearance and folding, earlier Android runtime and wider gates remain open.

On 2026-11-09 the owner reported that a permission change resolved the earlier Play Protect block; the exact permission/version were unspecified. This remains owner feedback, separate from independent Google classification.

## Updates and licensing

Package: **dev.arcfold.launcher.debug**. Retained certificate SHA-256: `73e327dbf5bb2df83642fe563ef54e96547979e3250d1b1839292d3214e2d119`.

Project-owned code uses [Apache-2.0](LICENSE). The generated Hatsune Miku illustration is a noncommercial character adaptation: © Crypton Future Media, INC. 2007, [CC BY-NC 3.0](https://creativecommons.org/licenses/by-nc/3.0/), following [Piapro creator guidance](https://piapro.net/intl/en_for_creators.html). No endorsement is claimed. Barlow Condensed Black Italic uses OFL-1.1. Attribution and font licenses are in Appearance and the download notices. Checksums, build metadata and runtime inventory accompany the APK.
