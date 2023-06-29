import React, { useState } from "react";
import Header from "./Header";
import NewTodoFrom from "./NewTodoFrom";
import TodoList from "./TodoList";

const useTodoStatus = () => {
  const [todos, setTodos] = useState([]);
  const [lastTodoId, setLastTodoId] = useState(0);

  const addTodo = (title) => {
    const id = lastTodoId + 1;
    const newTodo = {
      id,
      title,
    };
    setTodos([...todos, newTodo]);
    setLastTodoId(id);
  };

  const modifyTodo = (id, title) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };

  const removeTodo = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    } else {
    }
  };

  const onImportant = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, star: !todo.star } : todo
      )
    );
  };

  const onCheck = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return {
    todos,
    addTodo,
    modifyTodo,
    removeTodo,
    onImportant,
    onCheck,
  };
};

const TodoWrapper = () => {
  const todoStatus = useTodoStatus();

  return (
    <div className="TodoWrapper">
      <Header todoStatus={todoStatus} />
      <NewTodoFrom todoStatus={todoStatus} />
      <TodoList todoStatus={todoStatus} />
    </div>
  );
};

export default TodoWrapper;
