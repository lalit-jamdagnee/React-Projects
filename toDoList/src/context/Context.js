import { createContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export default TodoContext;
