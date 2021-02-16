import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  margin: 20px 0;
  input {
    margin-right: 10px;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
  label {
    cursor: pointer;
    flex: 1;
  }
  .wastebasket {
    cursor: pointer;
  }
`;
