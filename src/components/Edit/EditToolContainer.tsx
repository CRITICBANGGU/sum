import { FunctionComponent } from "react";
import { TypographyStyle } from "../layout/FontStyle";
import { FlexAlignCenter, FlexHoverContainer, HalfToFull } from "../layout/Layout.style";
import { BorderColor } from "../layout/SemanticColorStyle";
import EditToolNav from "./EditToolNav";

const EditToolContainer: FunctionComponent = function () {
    return (
        <HalfToFull style={{ borderRight: '1px solid', borderColor: BorderColor.border2 }}>
            <EditToolNav />
            <div><input type="text" name="" id="" placeholder="제목을 입력해주세요" style={{ ...TypographyStyle.heading._28, width: '100%', borderBottom: '1px solid', borderColor: BorderColor.border2, padding: '20px 16px' }} /></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '24px', borderBottom: '1px solid', borderColor: BorderColor.border2, }}>
                <FlexAlignCenter>
                    <FlexHoverContainer><img src="./img/heading_letter.png" alt="" />헤딩</FlexHoverContainer>
                    <FlexHoverContainer><img src="./img/label_letter.png" alt="" />레이블</FlexHoverContainer>
                    <FlexHoverContainer><img src="./img/paragraph_letter.png" alt="" />파라그래프</FlexHoverContainer>
                    <FlexHoverContainer><img src="./img/caption_letter.png" alt="" />캡션</FlexHoverContainer>
                </FlexAlignCenter>
                <img src="./img/album.png" alt="" style={{ width: '40px' }} />
            </div>
            <div style={{ padding: '24px' }}>contnet</div>
        </HalfToFull>
    )
}

export default EditToolContainer