## What is it?

Local state is data that lives **inside a single component**. Only that component can read or modify it. React re-renders the component whenever its local state changes.

## Syntax

```jsx
const [state, setState] = useState(initialValue);
```

- `state` — the current value
- `setState` — the updater function
- `initialValue` — starting value (any JS type)

## When to use

- Form input values
- Toggle flags (modal open, menu closed)
- Counters, tabs, dropdowns
- Anything only **one component** cares about

## When NOT to use

- The same data is needed by another component → use **lifting state up** (02) or **Context** (03)

## Rules

1. Never mutate state directly — always call the setter
2. State updates are **asynchronous** and **batched**
3. Use functional updates when new state depends on previous:

```jsx
setCount((prev) => prev + 1);
```

## Pros & Cons

✅ Simple, minimal, no setup
✅ Perfect for isolated UI state
❌ Not shareable across components
❌ Becomes prop drilling when lifted far up

## Example

See [`index.js`](./index.js) for a working counter.