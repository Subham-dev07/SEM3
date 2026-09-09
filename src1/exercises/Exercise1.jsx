import { useSelector, useDispatch } from "react-redux";
import { increment } from "../slices/exercise1Slice";

export default function Exercise1() {
  const count = useSelector((state) => state.ex1counter);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h2>Exercise 1: Immer + Primitive State</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <p style={{ fontSize: 13, color: "#666" }}>
        Bug: clicking the button won't change the count. Fix it in exercise1Slice.js.
      </p>
    </div>
  );
}