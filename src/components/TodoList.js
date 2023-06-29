import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoStatus }) => {
  return (
    <ul className="TodoList">
      {todoStatus.todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} todoStatus={todoStatus} />
      ))}
    </ul>
  );
};

export default TodoList;
