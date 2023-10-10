import { styled } from "styled-components";
import { BackgroundColor } from "./SemanticColorStyle";

export const GridLayoutDiv = styled.div`
  @media screen and (max-width: 768px) and (min-width: 320px) {
    background-color: ${BackgroundColor.bg3};
    grid-template-columns: repeat(2, 1fr);
  }
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: max-content max-content max-content;
  grid-auto-columns: 1fr;
  display: grid;
  padding: 24px;
`;


