## What is prop drilling?

Prop drilling happens when a piece of data has to be passed **through many intermediate components** that don't actually use it, just to reach a deeply nested component that does.

## Example

```jsx
function App() {
  const [user, setUser] = useState({ name: "Rahim" });
  return <Dashboard user={user} />;
}

function Dashboard({ user }) {
  return <Sidebar user={user} />;      // does NOT use user
}

function Sidebar({ user }) {
  return <ProfileCard user={user} />;  // does NOT use user
}

function ProfileCard({ user }) {
  return <p>Hello, {user.name}</p>;    // finally used here!
}
```

## Problems caused

1. **Noise** — intermediate components receive props they don't need
2. **Refactor pain** — moving `ProfileCard` one level deeper means editing every intermediate component
3. **Renaming cost** — rename `user` → `currentUser` and you edit 4+ files
4. **Scaling nightmare** — 10 levels deep means 10 components just forwarding props

## Analogy

Sending a letter from Delhi to Chennai but handing it to a stranger in every city on the way, saying "pass it along." Silly — use a courier (Context) instead.

## Solution

**Context API** — see [`README.md`](./README.md).