import { FunctionComponent } from "react";
import {
  NavBarContainer,
  NavCataButton,
} from "../../styled_componet/interface_compoents/NavBar.style";
import { Heading20, Label20, ParagraphMedium14, TypographyStyle } from "../layout/FontStyle";
import { Spacer } from "../layout/Layout.style";
import { BorderColor } from "../layout/SemanticColorStyle";
const members = ['Booja', 'Dongmin', 'Dongyoung', 'Jaehyun', 'Hyemin']

const NavBar: FunctionComponent = function () {
  return (
    <NavBarContainer>
      <div>
        {/* logo */}
        <div
          style={{
            display: "flex",
            padding: "24px",

            maxWidth: "220px",
            minWidth: "220px",
            borderBottom: "1px solid",
            borderColor: BorderColor.border2
          }}
        >
          <img src="./img/Logo.png" alt="" style={{ width: '30px' }} />
          <Spacer space={"8px"} />
          <Heading20>sum.</Heading20>
        </div>
        {/* nav contents */}
        <div style={{ padding: "24px 0" }}>
          <NavCataButton
            style={{
              padding: "4px 0",
              paddingLeft: '24px'
            }}
          >
            <Label20>all isles.</Label20>
          </NavCataButton>
          {members.map((item, index) => {
            return (<NavCataButton
              style={{
                padding: "12px 0",
                paddingLeft: "36px",
              }}
              key={index}
            >
              <ParagraphMedium14>{item} isles.</ParagraphMedium14>
            </NavCataButton>)
          })}
        </div>
      </div>
      <div>
        <div
          style={{
            padding: '16px 24px',
            borderTop: '1px solid',
            borderColor: BorderColor.border2
          }}>
          hello</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '16px 24px',
            borderTop: '1px solid',
            borderColor: BorderColor.border2,
            height: '52px',
            ...TypographyStyle.paragraphMedium._12
          }}>
          made by
          <Spacer space={"8px"} />
          <img src="./img/TMBLogo.png" alt="" style={{ height: '12px' }} />
        </div>
      </div>
    </NavBarContainer >
  );
};

export default NavBar;
