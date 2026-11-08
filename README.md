# Arcfold downloads

An Android launcher with a clean, gesture-based Home screen.

## Current development preview

**[Download Arcfold 0.5.9-glass7 APK](https://github.com/cudldev/Arcfold-releases/releases/download/v0.5.9-glass7/arcfold-dev.apk)**

Version code 17 · Opens as **Arcfold Dev** · Owner testing target: Galaxy Z Fold 6

[Release notes and checksums](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.9-glass7) · [All releases](https://github.com/cudldev/Arcfold-releases/releases) · [Fold 6 checklist](TESTING.md)

**Early development preview:** the owner reports that Play Protect blocked earlier previews, including code12. Its cause remains unresolved; this visual update and passing functional checks are not safety or Google clearance. Keep Play Protect enabled.

Download `arcfold-dev.apk` from Assets. GitHub's source ZIP contains this download page, not the Android app.

1. Download and open the APK on your phone. Allow installation for the app opening it if Android asks.
2. Open **Arcfold Dev**. You can try Home before choosing it as your default launcher.
3. Swipe up for Library, down for Search and sideways for Home pages. Hold empty space to edit; hold an app for its options.
4. To return to your previous launcher, use **Customize → Choose default launcher**.

Midnight Arc starts with generated Aurora artwork; Frost starts with generated Pearl artwork. Each has phone and wide compositions, and imported wallpapers take precedence. Library, Search, Dock, folders and action menus now transmit the blurred owned wallpaper without a forced navy/white panel tint. Floating surfaces retain refraction and reactive edges; text/icons use local contrast outlines. Settings, the Search input field and Reduced effects/resource fallbacks stay opaque. Glass does not sample app icons or live widget content behind it.

This hotfix keeps Home contents hidden through the final Library/Search drag frame and state handoff, including cancelled pulls. Scrolling menu coordinates no longer recompose visible rows or the idle launcher. Personal icons reuse a bounded memory cache after package/configuration checks; cold loads are limited and deduplicated. Work/private/shortcut access checks and loaded-icon entry animations remain.

Glass stays active during advisory power-saving, heat and memory signals while Reduce effects is off. Appearance shows the state/reason and Retry glass. Library/Search follow your finger; hold midway, reverse to cancel, or release a longer pull/quick swipe to settle. Search now closes with an upward pull from its header, or from results already at the bottom. It returns to its source Home page or Library position. The moving panel edge blends softly with strong blur that relaxes as it opens fully. Search focuses and requests the keyboard after opening settles. Icons reveal after loading and entering the viewport. Automatic motion respects Reduce effects and disabled system animations. Settings stay opaque; no new permissions.

Library and Search fill the screen. Library offers List/Grid, sorting, an edge alphabet index and editable Personal/Work/custom collections. These collections affect Library only and are separate from Android work profiles. Search includes local recent Arcfold launches, supported public device settings, Arcfold appearance/dock actions and available published app shortcuts. Recent history can be cleared or disabled.

Home editing shows a lifted app/shortcut image and target footprint. Widgets use their full content area with no Arcfold provider-name bar, a Dock-style glass backing and floating options. In Edit, drag the corner grip of a resizable widget to preview its size, then release to commit; size presets remain available. The default clock/date card uses glass with no name header. Third-party widget content may draw its own opaque background.

Home adapts to available window space and reported separating folds. Choose a bottom, left or right dock; its placement preference is currently shared across displays. Shortcuts, native widgets, separate Android Private Space and manual layout export/import are included. Set Arcfold as Home to use role-dependent features. Imports require local widget setup; exports omit work/private entries. Samsung Secure Folder support is not implied.

The APK requires Android 12/API 31 or newer. This exact code17 APK passed check, debug assembly, eleven focused app cases and four platform cases on Android 17/API 37. Coverage includes Home pixels at full-open/commit/cancel endpoints for both panels, scrolling without row recomposition, warm/concurrent icon reuse, sensitive-cache eviction, shortcut access revocation, Search gestures/IME/Back/anchors and retained icon/edge effects. All saved emulator baselines were restored. Fold 6 flash/scroll confirmation and measured frame pacing, Android12/12L runtime, hosted/reboot/full milestone/beta gates remain open.

This version retains the shortcut-icon authorization repair, existing glass transitions and recent-launch repair, and adds the latest nearby owned-background edge spill. Runtime dependency components remain unchanged. Earlier [glass6/code16](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.8-glass6), [glass5/code15](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.7-glass5), [glass4/code14](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.6-glass4), [glass3/code13](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.5-glass3), [security1/code12](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.4-security1), [motion3/code11](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.3-motion3), [glass2/code10](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.2-glass2) and [glass1/code9](https://github.com/cudldev/Arcfold-releases/releases/tag/v0.5.1-glass1) remain immutable.

## Updates and licensing

The development package is `dev.arcfold.launcher.debug`. The existing signing certificate permits updates over the published M3 preview without uninstalling its saved layout. Certificate SHA-256: `73e327dbf5bb2df83642fe563ef54e96547979e3250d1b1839292d3214e2d119`.

This public repository contains download documentation and binary releases. Application source/history remain private. Project-owned material uses [Apache-2.0](LICENSE); third-party notices, checksums, build metadata and runtime inventory accompany the APK. This is a development preview; production signing, Play and stable-release qualification remain open.
