import React, { FunctionComponent } from "react";
import { getDateString } from "../../util/string_function";
import { TypographyStyle } from "../layout/FontStyle";
import { FlexCenterContainer, HalfToFull } from "../layout/Layout.style";
import { BackgroundColor, TextColor } from "../layout/SemanticColorStyle";
const DATE_STRING = getDateString();
export const PreviewContainer: FunctionComponent = function () {
    return (
        <HalfToFull style={{ height: '100vh', padding: '24px', backgroundColor: BackgroundColor.bg3 }}>
            <FlexCenterContainer style={{ flexDirection: 'column', backgroundColor: 'white', height: '100%', padding: '36px', borderRadius: '16px' }}>
                <div>preview</div>
                <FlexCenterContainer>
                    <div style={{ ...TypographyStyle.paragraphMedium._12, color: TextColor.primaryText }}>Dongyoung</div>
                    <div style={{ color: TextColor.teriaryText, ...TypographyStyle.paragraphRegular._12 }}>{DATE_STRING}</div>
                </FlexCenterContainer>
            </FlexCenterContainer>
        </HalfToFull>
    )
}