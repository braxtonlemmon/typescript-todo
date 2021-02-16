import React, { useState } from "react";
import { Wrapper } from "./Form.styles";
import Button from "../Shared/Button";
import { useDispatch } from "react-redux";
import * as actions from "../../actions/index";
import { Todo } from "../../actions/index";

interface FormProps {
  addTodoToList: (arg0: string) => void;
}

interface EventObject {
  target: {
    value: string;
  };
}

const Form: React.FC<FormProps> = ({ addTodoToList }): React.ReactElement => {
  const [todoItem, setTodoItem] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: EventObject) => {
    setTodoItem(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    const payload: Todo = {
      todoItem: todoItem,
      timestamp: Date.now().toString(),
      completed: false,
    };
    dispatch({ type: actions.ADD_TODO, payload });
    setTodoItem("");
  };

  return (
    <Wrapper>
      <label htmlFor="todoItem">Tell me what you want to do:</label>
      <input
        type="text"
        id="todoItem"
        onChange={handleChange}
        value={todoItem}
      />
      <Button onClick={handleSubmit}>Add Item</Button>
    </Wrapper>
  );
};

export default Form;
