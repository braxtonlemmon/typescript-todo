import React, { useState } from "react";
import { Wrapper } from "./Form.styles";
import Button from "../Shared/Button";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../constants/ActionTypes";
import { Todo } from "../../actions/todoActions";
import { RootState } from "../../store/store";

interface EventObject {
  target: {
    value: string;
  };
}

const Form: React.FC = (): React.ReactElement => {
  const [todoItem, setTodoItem] = useState("");
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.todoReducer.todoItems);
  const maxItems = useSelector(
    (state: RootState) => state.userReducer.maxItems
  );
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
      {items.length < maxItems && (
        <>
          <label htmlFor="todoItem">Tell me what you want to do:</label>
          <input
            type="text"
            id="todoItem"
            onChange={handleChange}
            value={todoItem}
          />
          <Button onClick={handleSubmit}>Add Item</Button>
        </>
      )}
    </Wrapper>
  );
};

export default Form;
