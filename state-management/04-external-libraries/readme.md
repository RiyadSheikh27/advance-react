When `useState` / Lifting / Context aren't enough, use an external library. Here's a quick comparison.

## The libraries

| Library | Best for | Boilerplate | Learning curve |
|---------|----------|-------------|----------------|
| **Zustand** | Small-medium global state | Very low | Easy |
| **Redux Toolkit** | Large team projects, complex logic | Medium | Medium |
| **Jotai** | Atom-based, granular state | Low | Easy |
| **Recoil** | Atom-based (Meta) | Low | Easy |
| **MobX** | Observable-based, OOP-style | Low | Medium |
| **React Query** | Server / API state only | Low | Easy |

## Zustand vs Redux Toolkit

| Feature | Zustand | Redux Toolkit |
|---------|---------|---------------|
| Setup | `create(store)` — one line | `createSlice` + `configureStore` |
| Provider needed | ❌ No | ✅ Yes (`<Provider>`) |
| DevTools | Optional | Built-in |
| Community | Growing | Huge |
| Best for | Startups, small-medium apps | Teams, large apps |
| Bundle size | ~1 KB | ~13 KB |

## React Query vs Redux

| Data type | Use |
|-----------|-----|
| Server / API data (cache, refetch, loading) | **React Query** |
| Client / UI state (cart, filters, theme) | Redux / Zustand / Context |

> React Query is **not** a replacement for Redux. Use both together.

## Decision tree

```
Need server data?
 ├── Yes → React Query (05)
 └── No  → How complex is your client state?
          ├── Simple (theme, auth) → Context (03)
          ├── Small-medium (cart, filters) → Zustand
          └── Large / team → Redux Toolkit
```

## When NOT to use an external library

- Single component state → `useState`
- Two sibling components → Lift state up
- One value deep in a small tree → Context
- Adding Redux to a to-do app = overkill

## Summary

- **Zustand** — start here for global state. Fast, tiny, no Provider.
- **Redux Toolkit** — when the team is big and state logic is complex.
- **React Query** — always for API data, regardless of client-state library.
- **Jotai / Recoil** — try if you like atom-level granularity.