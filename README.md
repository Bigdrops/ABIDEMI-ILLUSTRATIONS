<div align="center">

# ABIDEMI Illustrations

**Turn any concept, workflow, or article into a white-background, hand-drawn explanatory illustration.**

Character: ABIDEMI — solid black figure, white dot eyes, blank expression, thin limbs.
Must perform the core action of every image. Decorative = failure.

[

![Version](https://img.shields.io/badge/version-1.0.0-black)

](https://github.com/Bigdrops/ABIDEMI-ILLUSTRATIONS/releases)
[

![License](https://img.shields.io/github/license/Bigdrops/ABIDEMI-ILLUSTRATIONS)

](LICENSE)
[

![Forked from](https://img.shields.io/badge/forked%20from-ian--xiaohei--illustrations-orange)

](https://github.com/helloianneo/ian-xiaohei-illustrations)

Works with:

[

![Claude Code](https://img.shields.io/badge/Claude_Code-191919?style=for-the-badge&logo=anthropic&logoColor=white)

](https://github.com/anthropics/claude-code)
[

![Codex](https://img.shields.io/badge/Codex_CLI-412991?style=for-the-badge&logo=openai&logoColor=white)

](https://github.com/openai/codex)
[

![Cursor](https://img.shields.io/badge/Cursor-000?style=for-the-badge&logo=cursor&logoColor=white)

](https://cursor.com)
[

![Windsurf](https://img.shields.io/badge/Windsurf-09B6A2?style=for-the-badge&logo=codeium&logoColor=white)

](https://windsurf.com)
[

![GitHub Copilot](https://img.shields.io/badge/GitHub_Copilot-000?style=for-the-badge&logo=githubcopilot&logoColor=white)

](https://github.com/features/copilot)

</div>

---

## What It Does

One idea. One character. One image.

ABIDEMI Illustrations is a Codex skill that instructs any AI agent to generate
white-background, hand-drawn explanatory illustrations. Each image is 16:9,
black line art, minimal accent colors, and ABIDEMI must be doing something — not standing around.

---

## Output Formats

| Format | Use Case |
|--------|----------|
| PNG | Static carousels, article illustrations, blog images |
| SVG | Scalable web embeds |
| HTML Canvas + MP4 | Standalone animated TikTok/Instagram video posts |
| Motion Photo frames | TikTok live carousel slides (flipbook or progressive reveal) |

---

## Installation

### Codex / Claude Code

```bash
git clone https://github.com/Bigdrops/ABIDEMI-ILLUSTRATIONS.git
cp -R ./ABIDEMI-ILLUSTRATIONS/abidemi-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

### Cursor / Windsurf

Copy `abidemi-illustrations/` into `.cursor/skills/` or `.windsurf/skills/`.

### Any other agent

Read `abidemi-illustrations/SKILL.md` directly.

---

## Usage

```
Use $abidemi-illustrations to illustrate "Bada fixes Quick Share on Chinese phones" 
as an HTML canvas animation with MP4 export.
```

```
Use $abidemi-illustrations to generate 10 flipbook frames of ABIDEMI 
pushing a block across the canvas for TikTok Motion Photo carousel.
```

---

## TikTok Formats

**Standalone video post** — generate HTML Canvas animation, export MP4, upload directly.

**Live carousel slide (Motion Photo)** — generate PNG frames + MP4 via canvas,
combine using MotionPhoto Maker app on Android, upload to TikTok carousel.
TikTok reads the embedded motion layer and plays it per slide automatically.

**Two creative formats:**
- **Flipbook** — each slide is one animation frame. Viewer swipes fast = live motion.
- **Progressive reveal** — each slide adds one layer until full illustration appears.

See `output-formats/motion-photo-tiktok.md` for full spec.

---

## No Image API? No Problem

If your agent has no image generation API access, the skill outputs a
copy-ready prompt for Gemini, DALL-E, or Midjourney — plus exact file
paths and git commands to commit the result.

---

## Reference Docs

| File | Purpose |
|------|---------|
| `SKILL.md` | Master skill file |
| `references/abidemi-ip.md` | Character rules |
| `references/style-dna.md` | Visual constraints |
| `references/composition-patterns.md` | Composition types |
| `references/qa-checklist.md` | Quality checks before output |
| `references/prompt-template.md` | Manual image generation prompt |
| `output-formats/mp4-canvas.md` | HTML Canvas + MP4 export spec |
| `output-formats/motion-photo-tiktok.md` | Motion Photo / TikTok live slide spec |
| `AUDIT.md` | Ground truth — used for repo-wide fact checking |

---

## License

MIT. Original by [helloianneo](https://github.com/helloianneo/ian-xiaohei-illustrations). Extended by Bigdrops.
