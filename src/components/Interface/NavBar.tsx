import React, { FunctionComponent } from "react";
import {
  NavBarContainer,
  NavCataButton,
} from "../../styled_componet/interface_compoents/NavBar.style";
import { Heading20, Label20 } from "../layout/FontStyle";

const NavBar: FunctionComponent = function () {
  return (
    <NavBarContainer style={{}}>
      {/* logo */}
      <div
        style={{
          display: "flex",
          padding: "24px",
          // width: "100%",

          maxWidth: "220px",
          minWidth: "220px",
          borderBottom: "1px solid",
        }}
      >
        <div>img</div>
        <Heading20>sum.</Heading20>
      </div>
      {/* nav contents */}
      <div style={{ padding: "24px 0" }}>
        <NavCataButton
          style={{
            padding: "4px 0",
            paddingLeft: "24px",
          }}
        >
          <Label20>all isles.</Label20>
        </NavCataButton>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
