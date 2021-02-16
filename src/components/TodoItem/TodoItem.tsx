import React from "react";
import { Wrapper } from "./TodoItem.styles";
import { useDispatch } from "react-redux";
import { COMPLETE_TODO, DELETE_TODO } from "../../actions/index";

interface TodoItemProps {
  todo: string;
  index: number;
  timestamp: string;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  timestamp,
}): React.ReactElement => {
  const dispatch = useDispatch();

  const handleComplete = (): void => {
    dispatch({ type: COMPLETE_TODO, meta: { timestamp } });
  };

  const handleDelete = (): void => {
    dispatch({ type: DELETE_TODO, meta: { timestamp } });
  };

  return (
    <Wrapper>
      <input id={`todo-${index}`} type="checkbox" onChange={handleComplete} />
      <label htmlFor={`todo-${index}`}>{todo}</label>
      <p className="wastebasket" onClick={handleDelete}>
        🗑️
      </p>
    </Wrapper>
  );
};

export default TodoItem;
