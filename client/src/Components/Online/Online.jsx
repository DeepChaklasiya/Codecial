import React from "react";

export default function Online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="d-flex align-items-center my-2">
      <div className="relativePosition">
        <img
          src={PF + user.profilePicture}
          alt=""
          style={{ height: "30px", width: "30px" }}
          className="rounded-circle"
        ></img>
        <span className="rightbarOnline"></span>
      </div>
      <div style={{ width: "15px" }}></div>
      <span>{user.username}</span>
    </li>
  );
}
