import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ todoStatus, todo }) => {
  const [value, setValue] = useState(todo.title);
  const [editMode, setEditMode] = useState(false);
  const readMode = !editMode;

  const commitEdit = (e) => {
    e.preventDefault();
    if (value.trim().length !== 0) {
      todoStatus.modifyTodo(todo.id, value.trim());
      setEditMode(false);
    }
  };

  const enableEditTodo = () => {
    setEditMode(true);
    setValue(todo.title);
  };

  return (
    <div className={todo.star ? "important" : ""}>
      <ul>
        {readMode ? (
          <li className="Todo">
            <label className="TodoTitle">
              <input
                type="checkbox"
                onClick={() => todoStatus.onCheck(todo.id)}
              />
              <p
                className={"cursor-pointers" + (todo.checked ? " checked" : "")}
              >
                {todo.title}
              </p>
            </label>
            <ul className="TodoIconUl flexs">
              <li>
                <FontAwesomeIcon
                  icon={faStar}
                  className={todo.star ? "star" : ""}
                  onClick={() => todoStatus.onImportant(todo.id)}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  onClick={enableEditTodo}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => todoStatus.removeTodo(todo.id)}
                />
              </li>
            </ul>
            {console.log(todo)}
          </li>
        ) : (
          <form onSubmit={commitEdit}>
            <input
              type="text"
              value={value}
              className="todo-input"
              placeholder="Update task"
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn">
              Fix Task
            </button>
          </form>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
