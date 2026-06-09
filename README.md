# ABIDEMI Illustrations

A Codex skill for generating white-background, hand-drawn explanatory illustrations with a consistent character (ABIDEMI).

## Features

- **Multiple output formats:** PNG, SVG, HTML Canvas animation, React component
- **One idea per image** - perfect for explaining tradeoffs, workflows, and metaphors
- **Nigerian informal tone ready** - no American blog filler, no fake pidgin, no em dashes
- **Forked from** `ian-xiaohei-illustrations` (MIT license)

## Installation

```bash
git clone https://github.com/Bigdrops/abidemi-illustrations.git
cd abidemi-illustrations
cp -R ./abidemi-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

## Usage

```text
Use $abidemi-illustrations to illustrate "Bada fixes Quick Share on Chinese phones" as an HTML canvas animation.
```

## Requirements

- Codex (or any agent that reads Codex skills)
- For PNG output: image generation model access (DALL-E, Midjourney, etc.)
- For HTML/React output: code generation only (no external API needed)

## License

MIT - original by helloianneo, rebranded and extended by Bigdrops.
