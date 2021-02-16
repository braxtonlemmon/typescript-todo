import React from "react";
import { Wrapper } from "./TodoItem.styles";
import { useDispatch } from "react-redux";
import { COMPLETE_TODO } from "../../actions/index";

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

  const handleComplete = (e: React.SyntheticEvent<HTMLElement>): void => {
    dispatch({ type: COMPLETE_TODO, meta: { timestamp } });
  };

  return (
    <Wrapper>
      <input id={`todo-${index}`} type="checkbox" onChange={handleComplete} />
      <label htmlFor={`todo-${index}`}>{todo}</label>
      <p>{timestamp}</p>
    </Wrapper>
  );
};

export default TodoItem;
