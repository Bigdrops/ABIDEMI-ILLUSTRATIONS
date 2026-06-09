# AUDIT.md — Ground Truth

This file defines the single source of truth for the ABIDEMI Illustrations repository. All other files must conform to these facts.

## Character
- Name: ABIDEMI
- Appearance: Solid black figure, white dot eyes, blank expression, thin limbs
- Must perform the core action in every image — decorative = failure

## Output Formats
- PNG: Static carousels, article illustrations, blog images
- SVG: Scalable web embeds
- HTML Canvas + MP4: Standalone animated TikTok/Instagram video posts
- Motion Photo frames: TikTok live carousel slides (flipbook or progressive reveal)
- **React component output does not exist. It was never part of this skill. Do not mention it — not even as "removed".**

## MP4 Export
- MediaRecorder mimeType: check `video/mp4` first, `video/webm` as fallback
- Browser: Chrome or Edge only
- Animation duration: under 5 seconds for standalone TikTok posts
- Motion Photo carousel slides: 2-3 seconds is optimal

## TikTok Formats
- **Standalone video post:** HTML Canvas animation → export MP4 → upload directly
- **Live carousel slide (Motion Photo):** PNG frames + MP4 → combine using MotionPhoto Maker app on Android → upload to TikTok carousel
- For standalone TikTok video posts, under 5 seconds works best. For Motion Photo carousel slides, 2-3 seconds is optimal.

## Visual Style
- Background: Pure white (#FFFFFF)
- Line art: Black (#000000), hand-drawn feel
- Accent colors: Red (#E63946), orange (#FFB703), blue (#1D3557) — annotations only
- 16:9 landscape format
- Subject occupies 40-60% of frame

## Tone
- Natural Nigerian informal English
- No em dashes
- No fake pidgin ("am", "wey", "abeg")
- No American blog filler

## Installation
- Works with any agent that reads markdown-based skill definitions
- Primary methods: git clone + copy to skills directory
- Package manager install (npm/yarn/pnpm/bun) is not the primary method

## License
- MIT
- Original by helloianneo (ian-xiaohei-illustrations)
- Extended by Bigdrops
