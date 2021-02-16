import React from "react";
import { Wrapper } from "./Display.styles";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface DisplayProps {
  todoList: string[];
}

const Display: React.FC<DisplayProps> = ({ todoList }): React.ReactElement => {
  const state = useSelector((state: RootState) => state);

  return (
    <Wrapper>
      <h2>TODO:</h2>
      <ul>
        {state.todoItems.map((todo, index: number) => {
          return (
            <TodoItem
              todo={todo.todoItem}
              index={index}
              key={`todoItem-${index}`}
            />
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Display;
