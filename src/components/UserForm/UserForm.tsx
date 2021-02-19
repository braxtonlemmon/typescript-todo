import React, { useState } from "react";
import { Wrapper, InputRow, InputBlock } from "./UserForm.styles";
import { useDispatch } from "react-redux";
import * as actions from "../../constants/ActionTypes";
import Button from "../Shared/Button";

const UserForm: React.FC = (): React.ReactElement => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastname] = useState<string>("");
  const [maxItems, setMaxItems] = useState<number>(0);
  const dispatch = useDispatch();

  const handleFirstNameChange = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    setFirstName(e.currentTarget.value);
  };

  const handleLastNameChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setLastname(e.currentTarget.value);
  };

  const handleMaxItemsChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setMaxItems(parseInt(e.currentTarget.value));
  };

  const handleSave = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const payload = {
      firstName,
      lastName,
      maxItems,
    };
    dispatch({ type: actions.ADD_USER, payload });
    setFirstName("");
    setLastname("");
    setMaxItems(0);
  };

  return (
    <Wrapper>
      <InputRow>
        <InputBlock>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="maxItems">Maximum # of todo items:</label>
          <input
            type="number"
            id="maxItems"
            value={maxItems}
            onChange={handleMaxItemsChange}
          />
        </InputBlock>
      </InputRow>
      <Button onClick={handleSave}>Save</Button>
    </Wrapper>
  );
};

export default UserForm;
