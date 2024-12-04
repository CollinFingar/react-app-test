import React from "react";

import { HeaderWrapper, NavLink } from "./Header.style";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  return (
    <HeaderWrapper>
      <div>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </HeaderWrapper>
  );
};
export default Header;
