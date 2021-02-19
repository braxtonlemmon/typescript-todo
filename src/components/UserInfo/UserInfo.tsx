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
      <p>{`You can add ${calculateItems()} more todo items.`}</p>
    </Wrapper>
  );
};

export default UserInfo;
