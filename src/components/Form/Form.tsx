import React, { useState } from "react";
import { Wrapper } from "./Form.styles";
import Button from "../Shared/Button";

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

  const handleChange = (e: EventObject) => {
    setTodoItem(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    addTodoToList(todoItem);
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
