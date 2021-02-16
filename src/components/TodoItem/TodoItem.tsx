import React from "react";
import { Wrapper } from "./TodoItem.styles";

interface TodoItemProps {
  todo: string;
  index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
}): React.ReactElement => {
  const handleComplete = (e: React.SyntheticEvent<HTMLElement>): void => {
    console.log(e.timeStamp);
  };

  return (
    <Wrapper>
      <input id={`todo-${index}`} type="checkbox" onChange={handleComplete} />
      <label htmlFor={`todo-${index}`}>{todo}</label>
    </Wrapper>
  );
};

export default TodoItem;
