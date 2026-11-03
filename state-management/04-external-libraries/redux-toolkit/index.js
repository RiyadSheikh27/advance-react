import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

// 1. Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; },
  },
});

const { increment, decrement, reset } = counterSlice.actions;

// 2. Store
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

// 3. Component
function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 16 }}>
      <h2>Redux Toolkit Counter</h2>
      <p>{value}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

// 4. App
export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}