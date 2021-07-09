import React from "react";
import "./message.css";
import { format } from "timeago.js";

export default function Message({ message, own }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={own ? "ownClass" : ""}>
      <div className="mx-1 my-2 d-flex">
        <img
          src={PF + "noUserImage.png"}
          alt=""
          style={{ height: "28px", width: "28px" }}
          className="rounded-circle"
        />
        <span
          className={
            own ? "p-2 ownMessageColor ml-2" : "p-2 text-white bg-primary ml-2"
          }
          style={{ borderRadius: "20px", maxWidth: "400px" }}
        >
          {message}
          <div
            className={
              own ? "float-right mr-2 blackText" : "float-right mr-2 whiteText"
            }
          >
            <span style={{ fontSize: "12px" }}>
              {format(message.createdAt)}
            </span>
          </div>
        </span>
      </div>
    </div>
  );
}
