import React, { useState } from "react";
import "../App.css";

interface IProps {
  addTodo: (text: string) => void;
}
export const AddTodoComponent: React.FC<IProps> = ({ addTodo }) => {
  const [textState, setTextState] = useState("");

  const textChangeHandler = (event: any) => {
    setTextState(event.target.value);
  };
  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    addTodo(textState);
    setTextState("");
  };

  return (
    <div className="row">
      <form onSubmit={formSubmitHandler} id="myForm"></form>
      <div className="input-group mb-3 input-group-lg ">
        <input
          type="text"
          id="TodoTextInput"
          className="form-control largeTodoTextInput"
          value={textState}
          placeholder="Enter new ToDo"
          onChange={textChangeHandler}
          form="myForm"
        ></input>
        <div className="input-group-append">
          <button type="submit" form="myForm" className="btn btn-success">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoComponent;
