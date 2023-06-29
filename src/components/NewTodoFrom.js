import React, { useState } from "react";

const NewTodoFrom = ({ todoStatus }) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length !== 0) {
      const title = value.trim();
      todoStatus.addTodo(title);
      setValue("");
    }
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        className="todo-input"
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default NewTodoFrom;
