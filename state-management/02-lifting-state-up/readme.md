## What is it?

When two or more components need to share the same data, move the state to their **closest common parent**. The parent then passes data down via `props` and passes updater callbacks down so children can request changes.

**Rule:** State lives in the lowest common ancestor of all components that need it.

## Why it's not inheritance

- Inheritance = "class B extends class A" (is-a relationship)
- Lifting state = "parent owns the state" (ownership relationship)

React officially recommends **composition over inheritance**. Lifting state up is about **ownership**, not inheritance.

## The data flow

```
Parent (state here)
  │
  ├── props (data down) ⬇️
  │
Child ── onChange callback (event up) ⬆️ ──▶ Parent updates
```

- Data flows **down** via props
- Events flow **up** via callbacks
- Child never mutates state directly

## Example: Temperature converter

- `CelsiusInput` — user types a value
- `FahrenheitDisplay` — shows converted value
- Both need the same `celsius` value

**Solution:** Move `celsius` up to `TemperatureConverter` (parent), pass it down.

## Pros & Cons

✅ Single source of truth
✅ Predictable data flow
✅ Easy to debug
❌ Becomes **prop drilling** when the tree is deep

## When to avoid

- Only one component needs the data → keep it local
- 5+ levels deep → use **Context** (03) or **Zustand/Redux** (04)
- Data comes from a server → use **React Query** (05)

## Example

See [`index.js`](./index.js).