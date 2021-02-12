import styled from "styled-components";

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  /* border: 2px solid ${(props) => props.theme.colors.dark}; */
  border: none;
  background: ${(props) => props.theme.colors.bright};
  color: ${(props) => props.theme.colors.dark};
  font-size: 1.2em;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  outline: none;
  &:hover {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  }
`;

export default Button;
