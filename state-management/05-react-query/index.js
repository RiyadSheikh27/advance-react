import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

function UsersList() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: 16 }}>
      <h2>React Query Example</h2>
      <button onClick={() => refetch()}>Refetch</button>
      <ul>
        {data.map((u) => (
          <li key={u.id}>{u.name} — {u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersList />
    </QueryClientProvider>
  );
}