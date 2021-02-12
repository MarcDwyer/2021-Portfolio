import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { NewTheme } from "../../themes";

type PHamburger = {
  color?: string;
  fontSize?: string;
};
export const HamburgerMenu = styled(FaHamburger)<PHamburger>`
  color: ${(p) => p.color || "#eee"};
  height: 95%;
  cursor: pointer;
`;
type MNProps = {
  bgcolor: string;
};
export const MobileNavbar = styled.nav<MNProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0%;
  overflow: hidden;
  z-index: 1000;
  height: 55px;
  background-color: ${(p) => p.bgcolor};
  display: none;

  @media (max-width: 850px) {
    display: flex;
  }
`;
