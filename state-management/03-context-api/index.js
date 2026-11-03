import { createContext, useContext, useMemo, useState } from "react";

// Split data and actions to avoid unnecessary re-renders
const CartDataContext = createContext([]);
const CartActionsContext = createContext(null);

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const actions = useMemo(
    () => ({
      addItem: (item) => setItems((prev) => [...prev, item]),
      removeItem: (id) => setItems((prev) => prev.filter((i) => i.id !== id)),
    }),
    []
  );

  return (
    <CartActionsContext.Provider value={actions}>
      <CartDataContext.Provider value={items}>
        {children}
      </CartDataContext.Provider>
    </CartActionsContext.Provider>
  );
}

function ProductButton({ product }) {
  const { addItem } = useContext(CartActionsContext);
  return <button onClick={() => addItem(product)}>Add {product.name}</button>;
}

function CartBadge() {
  const items = useContext(CartDataContext);
  return <span>🛒 {items.length} items</span>;
}

function CartList() {
  const items = useContext(CartDataContext);
  const { removeItem } = useContext(CartActionsContext);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}{" "}
          <button onClick={() => removeItem(item.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <CartProvider>
      <div style={{ padding: 16 }}>
        <h2>Context API Example</h2>
        <CartBadge />
        <ProductButton product={{ id: 1, name: "Apple" }} />
        <ProductButton product={{ id: 2, name: "Banana" }} />
        <CartList />
      </div>
    </CartProvider>
  );
}