## What is it?

**Redux Toolkit (RTK)** is the official, opinionated way to write Redux. It removes the old Redux boilerplate and adds sensible defaults.

## Core pieces

- **Slice** — a piece of state + its reducers (uses Immer, so you can "mutate" state)
- **Store** — the single global object holding all slices
- **Action** — a plain object describing what happened
- **Dispatch** — send an action to update the store

## Setup

```bash
npm install @reduxjs/toolkit react-redux
```

## Anatomy of a slice

```jsx
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; }, // Immer lets you mutate
    reset: (state) => { state.value = 0; },
  },
});
```

## Store

```jsx
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
```

## In components

```jsx
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
dispatch(increment());
```

## When to use

✅ Large apps with many features
✅ Multiple developers on the same state
✅ Complex reducers and async logic (via `createAsyncThunk`)
✅ You want time-travel debugging (Redux DevTools)

## Pros & Cons

✅ Predictable, explicit data flow
✅ Excellent DevTools
✅ Huge ecosystem
❌ More boilerplate than Zustand
❌ Overkill for small apps

## Example

See [`index.js`](./index.js).