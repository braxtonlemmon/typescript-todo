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
  return (
    <Wrapper>
      <input id={`todo-${index}`} type="checkbox" />
      <label htmlFor={`todo-${index}`}>{todo}</label>
    </Wrapper>
  );
};

export default TodoItem;
