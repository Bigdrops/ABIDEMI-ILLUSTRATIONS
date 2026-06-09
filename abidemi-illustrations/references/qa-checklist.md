# ABIDEMI Illustrations - QA Checklist

Before finalizing any output, verify:

## Visual (All Formats)
- [ ] Background is pure white (#FFFFFF), no texture/shadow.
- [ ] Subject occupies 40-60% of frame (not cramped, not tiny).
- [ ] ABIDEMI is present and performing the core action.
- [ ] Removing ABIDEMI would break the image - it is not decorative.
- [ ] Accent colors (red/orange/blue) only on short annotations or small highlights.
- [ ] No emojis, no gradients, no drop shadows.

## Text Annotations (if any)
- [ ] English, short (1-4 words maximum).
- [ ] No em dashes.
- [ ] No fake pidgin ("am", "wey", "abeg").
- [ ] No American blog filler ("Let's dive in", "Works like a charm").
- [ ] Natural conversational tone - "Step 1" not "Firstly,".

## Code Outputs (HTML/Canvas/React)
- [ ] Self-contained (no external CDNs unless necessary).
- [ ] Canvas animations use requestAnimationFrame.
- [ ] React component uses functional syntax with clear props.
- [ ] File size reasonable (no bloated libraries).

## Originality
- [ ] Metaphor/invention is fresh - not copied from old examples.
- [ ] Composition is unique to this concept.

## Final Delivery
- [ ] Files saved to assets/<concept-slug>/.
- [ ] PNG exported at 16:9, 800x450 minimum.

## Failure Signals

If any of the following appear, regenerate or do local edits:

- Top-left corner has "Common Pitfalls / Workflow / System Architecture / Roadmap" titles.
- ABIDEMI looks like a mascot, emoji, or cute cartoon.
- Image looks like PPT, course slides, or a formal flowchart.
- Too many elements, too many arrows, too many nodes.
- Text becomes long paragraphs.
- Background has paper texture, shadows, gradients, beige, noise.
- Real UI screenshots or tech-feel interfaces.
- Severe text typos or unreadable annotations.
- Image is too rigid, no quirky metaphor.
- Too similar to old case compositions in assets/examples/.

## Iteration Method

- Too ordinary: make ABIDEMI the action subject, add a strange but valid metaphor.
- Too complex: remove nodes, keep only one action and 3-5 short annotations.
- Too cute: emphasize deadpan, blank serious expression, not cute, not mascot.
- Too PPT: remove titles, borders, neat grids, and excessive arrows. Change to hand-drawn scene.
- Too similar to old cases: keep core meaning, swap main object and ABIDEMI action.
- Text errors: prioritize local edits. If many errors, regenerate with fewer annotations.

## Delivery Judgment

A high-quality image should make the viewer first think "a bit strange", then understand the structure within 1 second.

If it looks like a tutorial page instead of a quirky product sketch on blank paper, it does not pass.
