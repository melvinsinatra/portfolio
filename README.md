# Svelte & SvelteKit Web Development Best Practices  
*(Including Tailwind CSS)*

This document outlines recommended best practices for building **modern, scalable, and maintainable web applications** using **Svelte**, **SvelteKit**, and **Tailwind CSS**.

---

## 1. Component Design & Architecture

### Keep Components Small and Focused
- Follow the **single-responsibility principle**
- Each component should solve one clear UI concern
- Improves testability, reuse, and readability

### Build Loosely-Coupled Components
- Avoid implicit dependencies between components
- Communicate via:
  - Props
  - Custom events (`createEventDispatcher`)
  - Stores (only when truly shared)
- Avoid importing sibling components’ logic or stores directly

### Prefer Composition Over Inheritance
- Use slots to build flexible layouts
- Keep layout logic in parent components
- Avoid deep component hierarchies

---

## 2. State Management

### Use Local State by Default
- Keep state inside components when possible
- Avoid global stores for short-lived or UI-only state

### Use Stores Intentionally
- Use `writable`, `readable`, and `derived` stores
- Group stores by domain (e.g. `auth`, `ui`, `settings`)
- Avoid overloading a single store with unrelated data

### Clean Up Side Effects
- Unsubscribe from stores when manually subscribing
- Clean up timers, observers, and listeners in `onDestroy`

---

## 3. Responsive & Mobile-Friendly Design

### Mobile-First Design
- Start layouts for small screens
- Enhance progressively for larger viewports

### Use Responsive Layout Techniques
- Prefer:
  - Flexbox
  - CSS Grid
  - Relative units (`rem`, `%`, `vw`, `vh`)
- Avoid fixed widths unless strictly required

### Touch-Friendly UI
- Ensure minimum touch target sizes
- Avoid hover-only interactions
- Prefer explicit tap/click affordances

---

## 4. Styling Best Practices (Tailwind CSS)

### Use Tailwind for Layout & Spacing
- Prefer utility classes over custom CSS for:
  - Spacing
  - Layout
  - Typography
- Reduces CSS bloat and improves consistency

### Keep Tailwind Classes Readable
- Group utilities logically (layout → spacing → color)
- Extract long class lists into:
  - Reusable components
  - `@apply` only when justified

### Avoid Overusing `@apply`
- Use it sparingly for repeated patterns
- Prefer component abstraction over CSS abstraction

### Use Responsive Utilities
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
```

---

## 5. Accessibility

### Use Semantic HTML First
- Prefer <button>, <nav>, <main>, <section>
- Avoid div-only interaction elements

### Tailwind & Accessibility
- Ensure sufficient color contrast
- Use focus utilities (focus:ring, focus:outline)
- Avoid removing focus styles without replacement

### Treat Svelte A11y Warnings Seriously
- Do not disable a11y warnings unless justified
- Consider warnings part of CI quality checks