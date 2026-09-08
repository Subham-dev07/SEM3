import { useState } from "react";
import "./App.css";

/*
  MULTI-COUNTER APP - STARTER (without Redux)

  TASK: Rewrite this using Redux Toolkit.

  STEPS:
  1. npm install @reduxjs/toolkit react-redux
  2. Create counterSlice.js -> state = { tea: 0, coffee: 0, water: 0 }
     reducer: increment(state, action) -> payload tells which key to increase
     reducer: decrement(state, action) -> same, but for decreasing
  3. Create store.js -> configureStore
  4. In main.jsx, wrap the app with <Provider store={store}>
  5. Remove useState -> get the count with useSelector, and send
     actions like dispatch(increment("tea")) using useDispatch

  HINT: A single reducer function will handle all three counters
*/

const COUNTERS = ["tea", "coffee", "water"];

export default function App() {
  const [counts, setCounts] = useState({ tea: 0, coffee: 0, water: 0 });

  function increment(name) {
    setCounts({ ...counts, [name]: counts[name] + 1 });
  }

  function decrement(name) {
    setCounts({ ...counts, [name]: counts[name] - 1 });
  }

  return (
    <div className="app">
      <h2>Multi Counter 🍵☕💧</h2>
      {COUNTERS.map((name) => (
        <div key={name} className="counter-row">
          <span className="label">{name}</span>
          <button onClick={() => decrement(name)}>-</button>
          <span className="count">{counts[name]}</span>
          <button onClick={() => increment(name)}>+</button>
        </div>
      ))}
    </div>
  );
}