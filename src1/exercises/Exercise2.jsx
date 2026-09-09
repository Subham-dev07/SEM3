import { useSelector, useDispatch } from "react-redux";
import { moveToCity } from "../slices/exercise2Slice";

export default function Exercise2() {
  const user = useSelector((state) => state.ex2user.user);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h2>Exercise 2: Nested Object Mutation</h2>
      <p>Name: {user.name}</p>
      <p>City: {user.address.city}</p>
      <p>Pin: {user.address.pin}</p>
      <button onClick={() => dispatch(moveToCity("Bengaluru"))}>
        Move to Bengaluru
      </button>
      <button onClick={() => dispatch(moveToCity("Mumbai"))}>
        Move to Mumbai
      </button>
      <p style={{ fontSize: 13, color: "#666" }}>
        TODO: complete the moveToCity reducer in exercise2Slice.js.
      </p>
    </div>
  );
}