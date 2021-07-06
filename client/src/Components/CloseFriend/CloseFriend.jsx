import React from "react";

export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="d-flex align-items-center my-2 ml-3">
      <img
        src={PF + user.profilePicture}
        alt=""
        style={{ height: "30px", width: "30px" }}
        className="rounded-circle"
      ></img>
      <div style={{ width: "15px" }}></div>
      <span>{user.username}</span>
    </li>
  );
}
