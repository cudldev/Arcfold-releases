# Arcfold downloads

An Android launcher with a clean, gesture-based Home screen.

## Current development preview

**[Download Arcfold 0.5.18-miku3 APK](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.18-miku3/arcfold-dev.apk)**

Version code 26 · **Arcfold Dev** · Android 12/API31 or newer · Owner testing target: Galaxy Z Fold 6

[Release notes and checksums](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.18-miku3) · [All releases](https://github.com/cudldev/Arcfold-releases/releases) · [Fold6 checklist](TESTING.md)

Update the existing Arcfold Dev install to retain your saved layout. You can try Home before choosing it as the default launcher. GitHub's source ZIP contains these download pages; application source/history remain private.

## Native Miku comic theme

- Perspective comic fan and Circle spinner, infinite scrolling, floating Barlow Condensed Black Italic labels and circular installed-app icons.
- Crisp foreground character, torso framing, soft gradients, feathered dots and animated brush strokes. No card shadows.
- Saved wheel/character position, spacing, depth, icon-gap and softness controls in Appearance.
- Shared cover/open scaling policy, with the wheel and character anchored consistently on taller views.
- Cream footer extends through the bottom navigation safe area; text stays above the gesture indicator.

Choose **Customize → Appearance → Theme → Miku · Halo**. Hold empty Home space to edit; swipe up for Library and down for Search. To restore your previous launcher, use **Customize → Choose default launcher**.

[Native cover preview](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.18-miku3/miku-comic-cover.png) · [Open preview](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.18-miku3/miku-comic-open.png) · [Library preview](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.18-miku3/miku-comic-library.png)

Home pins, Library/Search, Android profile boundaries, move cancellation and Undo are retained. Library offers List/Grid, sorting, an alphabet rail and editable collections. Collections filter Library only. Widget hosting, external theme packs and the separate experimental device/live-wallpaper mode remain deferred.

**Reduce effects** freezes ambient motion and simplifies effects. Optional **React to music** remains off by default. It uses transient Android output-mix FFT with runtime `RECORD_AUDIO` permission and normal `MODIFY_AUDIO_SETTINGS`; no microphone source, saved audio, uploads or background service. Player/OEM compatibility varies.

## Tested scope

The exact code26 APK passed **check/debug/test assembly, 51 model test outputs, 24 unique app and 10 unique platform API37 cases**. Actual native cover/open/standard frames were inspected. Coverage includes reference geometry, card depth/spacing, wrap fade, keyboard focus/activation, character occlusion, saved settings recreation, launch/return, Library/Edit, Search/IME/native Back, scrolling/recreation, empty/missing/single items, drag cancellation/commit and Undo. Recorded emulator data/APK/Home/display/settings/boot/widget/user/audio baselines were restored.

The retained signer, unchanged permission/runtime-library payloads, bundled font/artwork notices and 16 KiB ZIP alignment were verified. No rebuild followed qualification. Physical Fold6 appearance, folding, interaction feel and performance; Android12/12L runtime; new preset wallpaper mutation; main integration and hosted/reboot/full beta gates remain open. Emulator display sizes do not establish Samsung device qualification. Earlier previews remain available.

On 2026-11-09 the owner reported that a permission change resolved the earlier Play Protect block; the exact permission/version were unspecified. This remains owner feedback, separate from independent Google classification.

## Updates and licensing

Package: **dev.arcfold.launcher.debug**. Retained certificate SHA-256: `73e327dbf5bb2df83642fe563ef54e96547979e3250d1b1839292d3244e2d119`.

Project-owned code uses [Apache-2.0](LICENSE). The generated Hatsune Miku illustration is a noncommercial character adaptation: © Crypton Future Media, INC. 2007, [CC BY-NC 3.0](https://creativecommons.org/licenses/by-nc/3.0/), following [Piapro creator guidance](https://piapro.net/intl/en_for_creators.html). No endorsement is claimed. Barlow Condensed Black Italic uses OFL-1.1. Attribution and font licenses are in Appearance and the download notices. Checksums, build metadata and runtime inventory accompany the APK.
