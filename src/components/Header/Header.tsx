import React, { ReactElement, FC } from "react";
import { Wrapper } from "./Header.styles";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }): ReactElement => {
  return (
    <Wrapper>
      <p>{title}</p>
    </Wrapper>
  );
};

export default Header;
