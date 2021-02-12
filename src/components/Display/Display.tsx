import React from "react";
import { Wrapper } from "./Display.styles";
import TodoItem from "../TodoItem/TodoItem";

interface DisplayProps {
  todoList: string[];
}

const Display: React.FC<DisplayProps> = ({ todoList }): React.ReactElement => {
  return (
    <Wrapper>
      <h2>TODO:</h2>
      <ul>
        {todoList.map((todo: string, index: number) => {
          return (
            <TodoItem todo={todo} index={index} key={`todoItem-${index}`} />
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Display;
