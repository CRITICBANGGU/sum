import styled from "styled-components";
import { CardColor } from "../../components/layout/SemanticColorStyle";

export const NavBarContainer = styled.div`
  width: 100%;
  height: 100vh;
  backgound-color: ${CardColor.card1} @media screen and (max-width: 1024px) {
    width: 200px;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

export const NavCataButton = styled.div``;
