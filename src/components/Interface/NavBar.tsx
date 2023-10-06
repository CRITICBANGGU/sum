import React, { FunctionComponent, useState } from "react";
import { NavCataButton } from "../../styled_componet/interface_compoents/NavBar.style";

const NavBar: FunctionComponent = function () {
  const [click, setClick] = useState();
  return (
    <div>
      {/* logo */}
      <div
        style={{
          display: "flex",
          padding: "24px",
          width: "220px",
          borderBottom: "1px solid",
        }}
      >
        <div>logo img</div>
        <div>Sum.</div>
      </div>
      {/* nav contents */}
      <div style={{ padding: "24px 0" }}>
        <NavCataButton
          style={{
            padding: "4px 0",
            paddingLeft: "24px",
          }}
        >
          all isles.
        </NavCataButton>
      </div>
    </div>
  );
};

export default NavBar;