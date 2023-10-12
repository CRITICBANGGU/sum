import { FunctionComponent } from "react";
import { BreadCrumb } from "../components/layout/BreadCrumb";
import NavBar from "../components/Interface/NavBar";
import { BackgroundColor } from "../components/layout/SemanticColorStyle";
import { SystemColor } from "../components/layout/RootColorStyle";
import { Spacer } from "../components/layout/Layout.style";

const ContentDetail: FunctionComponent = function () {
  return (
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div
        style={{
          backgroundColor: BackgroundColor.bg3,
          width: '100%',
          padding: '24px'
        }}>
        <BreadCrumb />
        <Spacer horizontal={true} space={"16px"} />
        <div
          style={{
            borderRadius: '16px',
            padding: '36px',
            width: '100%',
            backgroundColor: SystemColor.White
          }}></div>
      </div>
    </div>);
};

export default ContentDetail;
