import React from "react";
import { Wrapper } from "./UserInfo.styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const UserInfo: React.FC = (): React.ReactElement => {
  const user = useSelector((state: RootState) => state.userReducer);
  const items = useSelector((state: RootState) => state.todoReducer.todoItems);

  const calculateItems = (): number => {
    return user.maxItems - items.length;
  };

  return (
    <Wrapper>
      <p>{`Hey, ${user.firstName} ${user.lastName}`}</p>
      {calculateItems() > 0 && (
        <p>{`You can add ${calculateItems()} more todo items.`}</p>
      )}
      {calculateItems() === 0 && (
        <p>You've maxed out! Delete items to add more to your list.</p>
      )}
    </Wrapper>
  );
};

export default UserInfo;
