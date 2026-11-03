import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 16 }}>
      <h2>Local State Counter</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;