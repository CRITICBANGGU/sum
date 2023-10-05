import React, { FunctionComponent } from "react";
import NavBar from "../components/Interface/NavBar";

const MainPage: FunctionComponent = function () {
  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <div>intro contents</div>
    </div>
  );
};

export default MainPage;
