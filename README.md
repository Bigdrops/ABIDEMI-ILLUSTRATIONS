```markdown
# ABIDEMI Illustrations

Turn any article, concept, or workflow into a white-background, hand-drawn explanatory illustration.

**Character:** ABIDEMI – a solid black figure with white dot eyes, thin limbs, and a blank expression. Must participate in the core action of every image.

**Format:** 16:9 landscape. Pure white background. Black line art with minimal red/orange/blue accents.

**Outputs:** PNG, SVG, HTML Canvas animation, MP4 video (for TikTok/Instagram Reels slides).

> React component output has been intentionally removed. It has no export path to social media formats.

## Installation

This is a skill for AI agents (Codex, Claude Code, Cursor, Windsurf, or any agent that reads markdown skill definitions).

### For Codex / Claude Code

```bash
git clone [https://github.com/Bigdrops/ABIDEMI-ILLUSTRATIONS.git](https://github.com/Bigdrops/ABIDEMI-ILLUSTRATIONS.git)
cp -R ./ABIDEMI-ILLUSTRATIONS/abidemi-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"

```
For Cursor / Windsurf
Copy the abidemi-illustrations/ folder into your project's .cursor/skills/ or .windsurf/skills/ directory.
For any other agent
Read abidemi-illustrations/SKILL.md and follow the instructions inside.
Usage
```
Use $abidemi-illustrations to illustrate "Bada fixes Quick Share on Chinese phones" as an HTML canvas animation with MP4 export.

```
Output Formats
Format Use Case
PNG Static carousels, blog images, article illustrations
SVG Scalable web embeds
HTML Canvas + MP4 TikTok slides, Instagram Reels, animated social content
MP4 Export (TikTok / Instagram)
When the agent generates an HTML Canvas animation, it will also include a self-contained recording script using the browser's MediaRecorder API. Opening the HTML file in Chrome and clicking "Export MP4" will record the animation and download it as an MP4 file ready for upload to TikTok or Instagram Reels slideshow.
No external software required. No FFmpeg. No server.
Motion Photo Export (TikTok Live Slides)
For animated carousel slides on TikTok, combine PNG + MP4 into an Android Motion Photo using MotionPhoto Maker app.
TikTok reads Motion Photos natively and plays them as live slides in a carousel post.
Creative formats this enables:
· Flipbook: each slide = one animation frame, viewer swipes fast to see motion
· Progressive reveal: each slide adds one layer until full illustration is complete
Image Generation Fallback
If your agent environment does not have access to an image generation API (DALL-E, Midjourney, etc.), the skill will output a prompt that you can manually run in Gemini or any image generator. It will also tell you where to save the resulting PNG in your repository.
Documentation
· SKILL.md – master skill file
· references/abidemi-ip.md – character rules
· references/style-dna.md – visual constraints
· references/composition-patterns.md – composition types
· references/qa-checklist.md – quality checks
· references/prompt-template.md – reusable prompt structure
· output-formats/ – HTML Canvas, MP4, Motion Photo specifications
Version
1.0.0
License
MIT. Original by helloianneo. Extended by Bigdrops.
```

```
