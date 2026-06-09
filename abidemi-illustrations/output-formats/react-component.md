# React Component Output Format

## When to Use
Use this format when the user requests: "as React", "as a React component", or "for a web app".

## Output Rules

### Component Structure
- Functional component with optional props: width, height, animation, step
- Use inline styles or a separate CSS object (no external CSS files)
- If animation is needed, use useState + useEffect with requestAnimationFrame (not external libraries)

### Props API
```typescript
interface AbidemiIllustrationProps {
  width?: number;   // default 800
  height?: number;  // default 450
  animation?: "idle" | "walk" | "point" | "push";
  caption?: string; // short text below canvas
}
```

## Example Component Output

The agent must output a single .jsx or .tsx file that can be dropped into any React project. Include comments explaining how to use it.

## Canvas vs. SVG in React

- Prefer canvas for animations (performance).
- Prefer inline svg for static illustrations (easier to style).
