import React from "react";
import { Wrapper } from "./TodoItem.styles";
import { useDispatch } from "react-redux";
import { COMPLETE_TODO, DELETE_TODO } from "../../constants/ActionTypes";
import { Todo } from "../../actions/todoActions";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }): React.ReactElement => {
  const dispatch = useDispatch();
  const { timestamp } = todo;

  const handleComplete = (): void => {
    dispatch({ type: COMPLETE_TODO, meta: { timestamp } });
  };

  const handleDelete = (): void => {
    dispatch({ type: DELETE_TODO, meta: { timestamp } });
  };

  return (
    <Wrapper>
      <input
        id={`todo-${todo.timestamp}`}
        type="checkbox"
        onChange={handleComplete}
      />
      <label htmlFor={`todo-${todo.timestamp}`}>{todo.todoItem}</label>
      <p className="wastebasket" onClick={handleDelete}>
        🗑️
      </p>
    </Wrapper>
  );
};

export default TodoItem;
