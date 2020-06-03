import React, { useState } from "react";
import ListItemComponent from "./ListItemComponent";
import "../App.css";
import AddTodoComponent from "./AddTodoComponent";
import shortid from "shortid";
import { FilterStates } from "../App";

interface IProps {
  currentFilter: FilterStates;
}
type todo = {
  completed: boolean;
  text: string;
  key: string;
};
const initialTodosText = [
  "Set up a meeting with Tobias",
  "Order a new battery for the laptop",
  "Call parents on Skype",
  "Prep meals for the next week",
  "Take a walk to the forest",
  "Call Lars to upgrade my bike",
  "Talk to neighbors about fixing pipes",
  "Finish that exercism track",
  "Talk to Oddbjorg about LOD tactics in detail",
];

const ListComponent: React.FC<IProps> = ({ currentFilter }) => {
  const [todos, setTodos] = useState<todo[]>(() => {
    const initialTodos = initialTodosText.map((todoText) => {
      const todo = {
        completed: Math.random() > 0.5 ? true : false,
        text: todoText,
        key: shortid.generate(),
      };
      return todo;
    });
    return initialTodos;
  });

  const addTodo = (text: string) => {
    const newTodo = {
      completed: false,
      text: text,
      key: shortid.generate(),
    };
    setTodos([...todos, newTodo]);
  };
  const updateTodo = (completed: boolean, text: string, key: string) => {
    const updatedTodos = todos.map((elem) =>
      elem.key === key
        ? {
            key: key,
            completed: completed,
            text: text,
          }
        : elem
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (key: string) => {
    const updatedTodos = todos.filter((elem) => elem.key !== key);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <AddTodoComponent addTodo={addTodo} />

      <div style={{ marginTop: "40px" }}>
        <ul>
          {todos
            .filter((elem) => {
              switch (currentFilter) {
                case FilterStates.All:
                  return true;
                case FilterStates.Completed:
                  return elem.completed === true ? true : false;
                case FilterStates.InProgress:
                  return elem.completed === true ? false : true;
              }
            })
            .map((todo) => (
              <li key={todo.key}>
                <ListItemComponent
                  todo={todo}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ListComponent;
