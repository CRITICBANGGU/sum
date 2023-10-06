import React, { FunctionComponent } from "react";
import { contentCardPropsType } from "../../type/contentCardType";

const ContentCard: FunctionComponent<contentCardPropsType> = function (props) {
  return (
    <div
      style={{
        width: "33%",
        minWidth: "252px",
        height: "320px",
        backgroundColor: "white",
        borderRadius: "16px",
      }}
    >
      <div style={{ height: "180px", padding: "16px" }}>imgs</div>
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
          }}
        >
          {props.contentTitle}
          <br />
          <span
            style={{
              textOverflow: "ellipsis",
              WebkitLineClamp: 2,
              overflow: "hidden",
              width: "100%",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
            }}
          >
            {props.contentBody}
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{props.writer}</div>
          <div>{props.date}</div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
