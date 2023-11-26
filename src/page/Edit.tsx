import { FunctionComponent } from "react";
import EditToolContainer from "../components/Edit/EditToolContainer";
import { PreviewContainer } from "../components/Edit/PreviewContainer";
import { FlexContainer } from "../components/layout/Layout.style";


const EditPage: FunctionComponent = function () {
    return (
        <FlexContainer>
            <EditToolContainer />
            <PreviewContainer />
        </FlexContainer>)
}

export default EditPage