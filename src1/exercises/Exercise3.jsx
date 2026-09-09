import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../slices/exercise3Slice";

export default function Exercise3() {
  const todos = useSelector((state) => state.ex3todos.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  function handleAdd() {
    if (!text.trim()) return;
    dispatch(addTodo({ id: Date.now(), text }));
    setText("");
  }

  return (
    <div className="app">
      <h2>Exercise 3: Arrays with Immer</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New todo" />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>✕</button>
          </li>
        ))}
      </ul>
      <p style={{ fontSize: 13, color: "#666" }}>
        TODO: complete addTodo and removeTodo in exercise3Slice.js.
      </p>
    </div>
  );
}