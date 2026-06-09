# Image Prompt Template

Generate each image individually. Replace variables based on content. Do not combine multiple images into one.

```text
Generate one standalone 16:9 landscape explanatory illustration.

Visual DNA:
Pure white background. Minimalist black hand-drawn line art. Slightly wobbly pen lines. Lots of empty white space. Sparse red/orange/blue short annotations. Clean quirky product-sketch feeling. No gradients, no shadows, no paper texture, no complex background, no commercial vector style, no PPT infographic look, no cute mascot poster, no children's illustration, no realistic UI.

Recurring character required:
ABIDEMI, a small solid-black quirky creature with white dot eyes, tiny thin legs, blank serious expression, slightly uneven hand-drawn body shape. ABIDEMI must perform the core conceptual action, not decorate the scene. Make ABIDEMI serious, deadpan, and slightly bizarre, not cute.

Theme:
{illustration theme}

Structure type:
{structure type: Workflow / System Part / Before-After / Role State / Concept Metaphor / Method Layers / Map Route / Mini Comic Panels}

Core idea:
{core meaning this image conveys}

Composition:
{specific scene: where ABIDEMI is, what ABIDEMI is doing, main objects, how information flows}

Suggested elements:
{element1} / {element2} / {element3} / {element4}

Short annotations:
{label1} / {label2} / {label3} / {label4} / {optional label5}

Color use:
Black for main line art and ABIDEMI. Orange for main flow/path/arrows. Red only for key warnings/problems/results. Blue only for secondary notes or feedback/system state.

Constraints:
One image explains only one core structure. Keep the main subject around 40%-60% of the canvas. Preserve at least 35% blank white space. Use at most 5-8 short annotations. Do not write a title in the top-left corner. Do not write the structure type on the image. Do not make it a formal diagram, course slide, or dense explainer. Do not copy prior examples or reuse known case compositions unless explicitly requested; invent a fresh visual metaphor for this specific content. It should be clear but not instructional, interesting but not childish, strange but clean.
```

## Image Edit Prompts

Remove top-left title:

```text
Edit the provided image. Remove only the handwritten title "{text to remove}" and its underline from the top-left corner. Fill that area with the same clean white background, matching the surrounding blank paper. Preserve everything else exactly: characters, labels, paths, line style, composition, aspect ratio, and image quality. Do not add any new text or objects.
```

Enhance ABIDEMI participation:

```text
Regenerate this illustration with the same core meaning and simple layout, but make ABIDEMI more central to the conceptual action. ABIDEMI should be doing the strange work that explains the idea, not standing beside the diagram. Keep it clean, sparse, hand-drawn, and not cute.
```
