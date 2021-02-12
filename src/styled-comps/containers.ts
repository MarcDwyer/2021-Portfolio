import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
`;

type PContainer = {
  bgColor?: string;
};
export const Container = styled.div<PContainer>`
  width: 100%;
  background-color: ${(p) => p.bgColor || "#eee"};
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;

  @media (max-width: 850px) {
    position: absolute;
    top: 55px;
    bottom: 0;
    left: 0;
    right: 0;
}
`;
