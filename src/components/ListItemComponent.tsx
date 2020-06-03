import React from "react";
import "../App.css";

interface IProps {
  updateTodo: (completed: boolean, text: string, key: string) => void;
  deleteTodo: (key: string) => void;
  todo: { completed: boolean; text: string; key: string };
}
export const ListItemComponent: React.FC<IProps> = ({
  todo,
  updateTodo,
  deleteTodo,
}) => {
  const handleToggleUpdate = (event: any) => {
    updateTodo(!todo.completed, todo.text, todo.key);
  };
  const handleTextUpdate = (event: any) => {
    updateTodo(todo.completed, event.target.value, todo.key);
  };
  const handleDelete = (event: any) => {
    deleteTodo(todo.key);
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            className="my_checkbox"
            checked={todo.completed}
            onChange={handleToggleUpdate}
          ></input>
        </div>
      </div>
      <input
        type="text"
        className={
          todo.completed
            ? "form-control todoTextInput todoTextCrossed"
            : "form-control todoTextInput"
        }
        aria-label="Text input with checkbox"
        value={todo.text}
        id={todo.key}
        onChange={handleTextUpdate}
      ></input>
      <div className="input-group-append">
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default ListItemComponent;
