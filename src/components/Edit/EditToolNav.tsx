import { FunctionComponent } from "react";
import Button from "../Interface/Button";
import { TypographyStyle } from "../layout/FontStyle";
import { FlexAlignCenter } from "../layout/Layout.style";
import { BorderColor } from "../layout/SemanticColorStyle";

const EditToolNav: FunctionComponent = function () {
    return (
        <div style={{ borderBottom: '1px solid', borderColor: BorderColor.border2, display: 'flex', justifyContent: 'space-between', padding: '24px' }}>
            <FlexAlignCenter style={{ ...TypographyStyle.heading._20 }}>
                <img src="./img/chevron_right.png" alt="" style={{ height: '18px', marginRight: '18px' }} />
                <img src="./img/Logo.png" alt="" style={{ width: '20px', marginRight: '8px' }} /> Edit.
            </FlexAlignCenter>
            <FlexAlignCenter>
                <Button content={"임시저장"} onClick={function (): {} {
                    throw new Error("Function not implemented.");
                }} />
                <Button content={"발행하기"} onClick={function (): {} {
                    throw new Error("Function not implemented.");
                }} />
            </FlexAlignCenter>
        </div>
    )
}

export default EditToolNav