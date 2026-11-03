## What is it?

**React Query** is a library for **server state** — data that comes from an API. It handles caching, background refetching, loading states, error states, and synchronization out of the box.

> React Query is **not** a replacement for Redux/Zustand. Use both:
>
> - React Query → server data
> - Redux/Zustand/Context → client UI state

## Setup

```bash
npm install @tanstack/react-query
```

```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>
```

## Basic query

```jsx
const { data, isLoading, error } = useQuery({
  queryKey: ["users"],
  queryFn: () => fetch("/api/users").then((r) => r.json()),
});
```

- `queryKey` — unique cache key
- `queryFn` — async function that fetches data

## Basic mutation

```jsx
const mutation = useMutation({
  mutationFn: (newUser) =>
    fetch("/api/users", { method: "POST", body: JSON.stringify(newUser) }),
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
});
```

## What it gives you for free

✅ Loading / error states
✅ Automatic caching
✅ Background refetch on window focus
✅ Stale-while-revalidate
✅ Retry on failure
✅ Pagination & infinite scroll helpers
✅ Devtools panel

## When to use

✅ Any time you fetch data from an API
✅ Instead of `useEffect` + `useState` for fetching
✅ Alongside Redux/Zustand (they do different jobs)

## When NOT to use

❌ Client-side UI state (theme, modals, form input) → use `useState` / Zustand
❌ Replacing a global store → use Zustand / Redux

## Example

See [`index.js`](./index.js).