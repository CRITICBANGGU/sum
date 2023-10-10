import React, { FunctionComponent } from "react";
import { contentCardPropsType } from "../../type/contentCardType";
import {
  Label20,
  ParagraphMedium12,
  ParagraphRegular12,
} from "../layout/FontStyle";
import { SystemColor } from "../layout/RootColorStyle";
import { FillColor, TextColor } from "../layout/SemanticColorStyle";

const ContentCard: FunctionComponent<contentCardPropsType> = function (props) {
  return (
    <div
      style={{
        width: "100%",
        // minWidth: "252px",
        height: "320px",
        backgroundColor: "white",
        borderRadius: "16px",
      }}
    >
      <div
        style={{
          height: "180px",
          padding: "16px",
          backgroundColor: "black",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          color: "white",
          position: "relative",
        }}
      >
        imgs
        <div
          style={{
            position: "absolute",
            padding: "4px 12px",
            bottom: "16px",
            right: "16px",
            backgroundColor: FillColor.secondaryFill,
            color: SystemColor.White,
            borderRadius: "20px",
          }}
        >
          {props.imgArray - 1}+
        </div>
      </div>
      <div
        style={{
          padding: "16px",
          height: "140px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "72px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: TextColor.primaryText,
          }}
        >
          <Label20>{props.contentTitle}</Label20>
          <br />
          <span
            style={{
              textOverflow: "ellipsis",
              WebkitLineClamp: 2,
              overflow: "hidden",
              width: "100%",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              color: TextColor.secondaryText,
            }}
          >
            {props.contentBody}
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ParagraphMedium12 style={{ color: TextColor.primaryText }}>
            {props.writer}
          </ParagraphMedium12>
          <ParagraphRegular12 style={{ color: TextColor.teriaryText }}>
            {props.date}
          </ParagraphRegular12>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
