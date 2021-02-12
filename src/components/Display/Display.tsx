import React from "react";
import { Wrapper } from "./Display.styles";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface DisplayProps {
  todoList: string[];
}

const Display: React.FC<DisplayProps> = ({ todoList }): React.ReactElement => {
  const todoItems = useSelector((state: RootState) => state);

  return (
    <Wrapper>
      <h2>TODO:</h2>
      <ul>
        {todoItems.map((todo: string, index: number) => {
          return (
            <TodoItem todo={todo} index={index} key={`todoItem-${index}`} />
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Display;
