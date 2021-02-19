import React from "react";
import { Wrapper } from "./Display.styles";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Todo } from "../../actions/todoActions";

interface DisplayProps {
  todoList: string[];
}

const Display: React.FC<DisplayProps> = ({ todoList }): React.ReactElement => {
  const items = useSelector((state: RootState) => state.todoReducer.todoItems);

  return (
    <Wrapper>
      <h2>TODO:</h2>
      <ul>
        {items.map((todo: Todo) => {
          return <TodoItem todo={todo} key={`todoItem-${todo.timestamp}`} />;
        })}
      </ul>
    </Wrapper>
  );
};

export default Display;
