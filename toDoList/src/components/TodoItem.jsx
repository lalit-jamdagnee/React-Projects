import React, { useContext, useState } from "react";
import TodoContext from "../context/Context";

function TodoItem({ todo }) {
  const [isTodoEditable, setisTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useContext(TodoContext);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setisTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  const checkBox = `checkbox${todo.id}`;
  return (
    <>
      <div className="todoItem">
        <input
          type="checkbox"
          id={checkBox}
          className="check"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <label htmlFor={checkBox} className="toggle"></label>
        <input
          type="text"
          id="msg"
          readOnly={!isTodoEditable}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          style={{ textDecoration: `${todo.completed ? "line-through" : ""}` }}
        />
        <button
          className="edit"
          onClick={() => {
            if (todo.completed) return;

            if (isTodoEditable) editTodo();
            else setisTodoEditable((prev) => !prev);
          }}
        >
          {isTodoEditable ? "Save" : "Edit"}
        </button>
        <button
          className="delete"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          ❌
        </button>
      </div>
    </>
  );
}

export default TodoItem;
