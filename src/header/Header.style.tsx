import styled from "styled-components";
import { COLORS } from "../constants";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  color: ${COLORS.text1};
  font-size: 24px;
  text-decoration: none;
  transition-duration: 0.2s;

  display: inline-block;
  padding: 10px 20px;

  &:hover {
    color: ${COLORS.h1};
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  height: 48px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;

  > div {
    max-width: 1024px;
    margin: 0 auto;
  }
`;
