import styled from "styled-components";
import { BorderColor } from "../../components/layout/SemanticColorStyle";

export const NavBarContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height: 100vh;
  width: 220px;
  border-right:1px solid;
  border-color: ${BorderColor.border2};
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 200px;
  }
`;

export const NavCataButton = styled.div`
  
`;
