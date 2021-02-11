import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.light};
  padding: 20px 0;
  p {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.dark};
    letter-spacing: 2px;
  }
`;
