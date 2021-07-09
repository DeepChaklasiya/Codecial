import React from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import "./conversation.css";

export default function Conversation() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  return (
    <div
      className="ml-2 mt-2 mr-2 d-flex align-items-center hoverName"
      style={{
        height: "40px",
        width: "100%",
        cursor: "pointer",
      }}
    >
      <img
        src={
          user.profilePicture
            ? PF + user.profilePicture
            : PF + "noUserImage.png"
        }
        alt=""
        style={{ height: "32px", width: "32px" }}
        className="rounded-circle ml-2"
      ></img>
      <span className="ml-2">Dummy Names</span>
    </div>
  );
}
