import React, { useContext, useState } from "react";
import TodoContext from "../context/Context";

function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const add = (e) => {
    e.preventDefault();

    if (!todo) return;
    addTodo({ todo: todo, completed: false });
    setTodo("");
  };
  return (
    <>
      <form className="todoForm" onSubmit={add}>
        <input
          type="text"
          name="item"
          placeholder="Write todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default TodoForm;
