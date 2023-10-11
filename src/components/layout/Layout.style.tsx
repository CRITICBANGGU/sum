import { styled } from "styled-components";
import { BackgroundColor } from "./SemanticColorStyle";

export const GridLayoutDiv = styled.div`
  padding: 24px;
  background-color: ${BackgroundColor.bg3};
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: max-content max-content max-content;
  grid-auto-columns: 1fr;
  display: grid;

  @media screen and (min-width: 426px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
