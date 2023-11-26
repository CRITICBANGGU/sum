import { FunctionComponent } from "react";
import { buttonProps } from "../../type/IntetfaceType";
import { BorderColor } from "../layout/SemanticColorStyle";

const Button: FunctionComponent<buttonProps> = function (props) {

    return <div onClick={props.onClick} style={{ padding: '8px 24px', margin: "0 8px", borderRadius: '8px', border: '1px solid', borderColor: BorderColor.border6 }}>
        {props.content}
    </div>
}

export default Button