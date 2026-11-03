## What is Context?

Context is a **shared data channel** that broadcasts a value through the component tree. Any component inside the Provider's subtree can "tune in" with `useContext` — without intermediate components needing to know anything.

It solves **prop drilling**.

## Core idea

```
Provider (broadcasts value)
    │
    ▼
  Subtree
    │
    ├── Child A ── useContext() ✅
    ├── Child B ── useContext() ✅
    └── Child C (no consumer)  —
```

- Context does **not** store data — it only **transports** it
- Actual data usually lives in a `useState` at the Provider
- Only descendants of the Provider can access it

## Three-step pattern

```jsx
// 1. Create
const ThemeContext = createContext("light");

// 2. Provide
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

// 3. Consume
const theme = useContext(ThemeContext);
```

## Two flavors

### Stateless context (read only)

Good for: theme, locale, config, feature flags.

```jsx
const ThemeContext = createContext("light");
<ThemeContext.Provider value="dark"><Toolbar /></ThemeContext.Provider>
```

### Stateful context (read + write)

Good for: auth user, shopping cart, modals.

```jsx
function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const value = {
    items,
    addItem: (i) => setItems((p) => [...p, i]),
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
```

## ⚠️ The re-render trap

```jsx
// ❌ new object on every render → every consumer re-renders
<CartContext.Provider value={{ items, addItem }}>
```

### Fix 1: `useMemo`

```jsx
const value = useMemo(() => ({ items, addItem }), [items]);
```

### Fix 2: split contexts (recommended)

```jsx
<CartDataContext.Provider value={items}>
  <CartActionsContext.Provider value={actions}>
    {children}
  </CartActionsContext.Provider>
</CartDataContext.Provider>
```

Consumers that only need `actions` won't re-render when `items` changes.

## When to use Context

✅ Theme / dark mode
✅ Auth user
✅ Locale / i18n
✅ Small global config
✅ Avoiding prop drilling in a small subtree

## When NOT to use Context

❌ High-frequency updates (mouse position, animations) — re-renders everything
❌ Complex global state that needs selectors — use Zustand or Redux
❌ One or two levels of drilling — just use props

## Pros & Cons

✅ Built into React, zero dependencies
✅ No prop drilling
✅ Great for theme/auth/locale
❌ Every consumer re-renders when value changes
❌ No selectors — must split into many contexts for fine control
❌ Not a full state manager

## Example

See [`index.js`](./index.js) for a cart with Context.