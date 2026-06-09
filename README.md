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

### Works with any AI coding agent

**Terminal agents**

[

![Claude Code](https://img.shields.io/badge/Claude_Code-191919?style=for-the-badge&logo=anthropic&logoColor=white)

](https://github.com/anthropics/claude-code)
[

![Codex CLI](https://img.shields.io/badge/Codex_CLI-412991?style=for-the-badge&logo=openai&logoColor=white)

](https://github.com/openai/codex)
[

![Gemini CLI](https://img.shields.io/badge/Gemini_CLI-4285F4?style=for-the-badge&logo=googlegemini&logoColor=white)

](https://github.com/google-gemini/gemini-cli)
[

![Aider](https://img.shields.io/badge/Aider-FF4B4B?style=for-the-badge&logo=python&logoColor=white)

](https://aider.chat)
[

![Plandex](https://img.shields.io/badge/Plandex-000000?style=for-the-badge&logo=gnubash&logoColor=white)

](https://plandex.ai)
[

![OpenCode](https://img.shields.io/badge/OpenCode-333333?style=for-the-badge&logo=gnubash&logoColor=white)

](https://github.com/opencode-ai/opencode)

**Editor agents**

[

![Cursor](https://img.shields.io/badge/Cursor-000000?style=for-the-badge&logo=cursor&logoColor=white)

](https://cursor.com)
[

![Windsurf](https://img.shields.io/badge/Windsurf-09B6A2?style=for-the-badge&logo=codeium&logoColor=white)

](https://windsurf.com)
[

![GitHub Copilot](https://img.shields.io/badge/GitHub_Copilot-000000?style=for-the-badge&logo=githubcopilot&logoColor=white)

](https://github.com/features/copilot)
[

![Kilo Code](https://img.shields.io/badge/Kilo_Code-FF6B35?style=for-the-badge&logo=visualstudiocode&logoColor=white)

](https://kilocode.ai)
[

![Cline](https://img.shields.io/badge/Cline-6B4FBB?style=for-the-badge&logo=visualstudiocode&logoColor=white)

](https://github.com/cline/cline)
[

![Continue](https://img.shields.io/badge/Continue-000000?style=for-the-badge&logo=visualstudiocode&logoColor=white)

](https://continue.dev)
[

![Void](https://img.shields.io/badge/Void_Editor-1A1A2E?style=for-the-badge&logo=visualstudiocode&logoColor=white)

](https://voideditor.com)
[

![Zed AI](https://img.shields.io/badge/Zed_AI-084CCF?style=for-the-badge&logo=zedindustries&logoColor=white)

](https://zed.dev)

**Cloud / IDE agents**

[

![Kiro](https://img.shields.io/badge/Kiro-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

](https://kiro.dev)
[

![JetBrains AI](https://img.shields.io/badge/JetBrains_AI-000000?style=for-the-badge&logo=jetbrains&logoColor=white)

](https://www.jetbrains.com/ai/)
[

![Amp](https://img.shields.io/badge/Amp-FF4500?style=for-the-badge&logo=sourcegraph&logoColor=white)

](https://ampcode.com)
[

![Melty](https://img.shields.io/badge/Melty-7C3AED?style=for-the-badge&logo=github&logoColor=white)

](https://melty.sh)

**Install methods**

```bash
npx @bigdrops/abidemi-illustrations init        # auto-detects agent
npx @bigdrops/abidemi-illustrations init --global  # global install
bunx @bigdrops/abidemi-illustrations init
pnpm dlx @bigdrops/abidemi-illustrations init
yarn dlx @bigdrops/abidemi-illustrations init
```

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

### NPX (Fastest)

Run this inside your project folder:

```bash
npx @bigdrops/abidemi-illustrations init
```

Auto-detects your agent (Codex, Claude Code, Cursor, Windsurf) and installs to the correct skills folder.

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
