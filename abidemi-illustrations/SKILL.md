---
name: abidemi-illustrations
description: Generate white-background, hand-drawn explanatory illustrations with the ABIDEMI character. Use for articles, posts, blogs, Notion docs, workflows, methodologies, processes, structures, states, metaphors, or viewpoints. Produces quirky, clean visual explanations with a consistent character that participates in the core action.
---

# ABIDEMI Illustrations

## Core Purpose

Design and generate 16:9 landscape explanatory illustrations. The goal is not commercial art, PPT infographics, or cute cartoons. It is to turn key judgments, workflows, structures, states, or metaphors from an article into a clean, quirky, creative, readable visual explanation.

The default visual character is ABIDEMI: a solid black figure with white dot eyes, thin limbs, blank expression, doing something absurd but valid. ABIDEMI must participate in the core action of each image, not stand beside it as decoration.

## Read These References First

Read based on task needs. Do not load everything at once:

- `references/style-dna.md`: Style DNA, colors, text rules, prohibitions.
- `references/abidemi-ip.md`: ABIDEMI character appearance, personality, action library, and prohibitions.
- `references/composition-patterns.md`: Structure types, original metaphor generation, and anti-copycat rules.
- `references/prompt-template.md`: Single-image prompt template.
- `references/qa-checklist.md`: Post-generation checks and iteration rules.
- `assets/examples/`: Use for low-frequency visual calibration only. Do not enter the default generation path. Do not copy compositions, objects, or labels from these cases.

## Workflow

### 1. Digest the Content

First read the user's article, link, Notion page, Markdown file, or screenshot content. Extract:

- What is the core viewpoint
- Which paragraphs carry cognitive shifts
- Which content is suitable for visual explanation
- Which parts are text-only, no image needed

Do not distribute images evenly. Prioritize "cognitive anchors": core judgments, breakpoints, input-output loops, branch points, before-after comparisons, one-fish-many-uses, handoff paths, common pitfalls, role state changes.

### 2. Output the Illustration Strategy First

If the user says "analyze where to illustrate / think about which places need images", first provide a shot list. For each image, specify:

- Which paragraph it goes after
- Image theme
- Core meaning
- Structure type
- What ABIDEMI is doing in the image
- Suggested elements
- Suggested short annotations

Default 4-8 images. For short articles, 1-3 images. For long articles, do not exceed 9. Enough is enough, do not turn the article into a picture book.

### 3. Single Image Generation

If the user explicitly requests "generate / output / make / help me generate", do not stop to confirm. Use the built-in `image_gen` to generate each image individually. Do not combine multiple images into one.

Each image explains one core structure. The prompt must include:

- 16:9 landscape explanatory illustration
- Pure white background
- Black hand-drawn line art
- Sparse red/orange/blue short annotations
- Lots of white space
- ABIDEMI as the core action subject
- No PPT, commercial art, childish cute, complex architecture, top-left category titles

Do not copy past examples. Examples provide style density and ABIDEMI participation methods only. Do not directly reuse "conveyor belt breakpoints / ABIDEMI pulling lines / material fish / stamping toolbox / common pitfall paths" or other existing compositions unless the user explicitly requests a copy. Each time, invent a fresh but valid metaphor from the current article.

### 4. Check and Iterate

After generation, check `references/qa-checklist.md`. If the following issues appear, regenerate or do local edits:

- ABIDEMI is just decoration
- Scene is too full
- Too much like a flowchart/PPT
- Too much text or severe typos
- Top-left corner shows "Common Pitfalls / Workflow / System Architecture" titles
- Style is too cute, childish, or rigid
- Background is not clean white

### 5. Save and Deliver

If the user is working within the workspace, copy the final images to:

```text
assets/<article-slug>-illustrations/
```

Name in order:

```text
01-topic-name.png
02-topic-name.png
```

Keep the original generated files. Do not overwrite existing assets unless the user explicitly requests replacement.

## Output Requirements

Pre-generation strategy output should be short and precise. Post-generation delivery must include:

- How many images were generated
- The purpose of each image
- Save path
- Which images are solid, which are optional

Do not give lengthy explanations of style theory. Let the images speak for themselves.
