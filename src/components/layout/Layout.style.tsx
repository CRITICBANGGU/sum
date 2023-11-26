import { styled } from "styled-components";
import { BackgroundColor } from "./SemanticColorStyle";
import { FunctionComponent } from "react";
import { TypographyStyle } from "./FontStyle";

export const GridLayoutDiv = styled.div`
  padding: 24px;
  min-height:100%;
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

export const Spacer: FunctionComponent<{
  horizontal?: boolean;
  space: string;
}> = function (props) {
  if (props.horizontal) {
    return <div style={{ height: props.space }} />;
  }
  return <div style={{ width: props.space }} />;
};

export const FlexContainer = styled.div`
display:flex;
@media screen and (min-width: 426px) and (max-width: 1023px) {
  display:block;
}
`

export const HalfToFull = styled.div`
width:50%;
@media screen and (min-width: 426px) and (max-width: 1023px) {
  width:100%;
}
`;

export const FlexAlignCenter = styled.div`
display:flex;
align-items: center;
`;

export const FlexHoverContainer = styled.div`
display:flex;
align-items: center;
padding:4px 16px 4px 8px;
&:hover{
  background-color:${BackgroundColor.bg3};
  border-radius:8px;
}
`;

export const FlexCenterContainer = styled.div`
display:flex;
justify-content: space-between;
`