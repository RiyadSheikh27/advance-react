## What is it?

**Zustand** is a tiny, fast global state library. No Provider, no boilerplate — just a hook that returns a store.

## Setup

```bash
npm install zustand
```

## Create a store

```jsx
import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
  reset: () => set({ count: 0 }),
}));
```

## Use in components

```jsx
const count = useCounterStore((s) => s.count);  // selector — only re-renders on count change
const increment = useCounterStore((s) => s.increment);
```

## Why people love it

- **No Provider** — just import and use
- **Selector-based** — subscribe to only what you need
- **Tiny** — ~1 KB
- **Works outside React** — can call `useCounterStore.getState()` in plain JS

## When to use

✅ Small-medium apps with global state (cart, filters, modals)
✅ You want Redux-like power without the boilerplate
✅ You're tired of Context re-render issues

## When NOT to use

❌ Very large teams that need strict conventions → Redux Toolkit
❌ Only local component state → `useState`

## Pros & Cons

✅ Minimal boilerplate
✅ Excellent performance (selectors)
✅ No Provider
✅ TypeScript friendly
❌ Smaller ecosystem than Redux
❌ Less enforced structure in big teams

## Example

See [`index.js`](./index.js).