import styled from "styled-components";
import { Link } from "react-router-dom";

type BtnProps = {
  color: string;
};
export const ProjectHomeBtn = styled(Link)<BtnProps>`
  margin-top: 15px !important;
  width: 125px;
  margin: auto;
  border: none;
  background-color: ${(p) => p.color};
  font-weight: 600;
  padding: 15px 15px;
  opacity: 1;

  &:hover {
    opacity: 0.9;
  }
`;
