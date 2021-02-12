import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

type NavLinkProps = {
  hoverShade: string;
};
export const NavAppLink = styled(Link)<NavLinkProps>`
  width: 100%;
  background-color: transparent;
  height: 45px;
  margin-bottom: 5px;
  display: flex;

  span {
    margin: auto;
  }
  &:hover {
    background-color: ${(p) => p.hoverShade};
  }
`;
