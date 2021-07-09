import React from "react";
import "./message.css";

export default function Message({ own }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={own ? "ownClass" : ""}>
      {/* <div className="align-items-flex-end"> */}
      {console.log(own)}
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          voluptas, suscipit sit quae animi nam ad quos recusandae, facilis eum,
          quisquam illo nostrum ab? Consectetur exercitationem inventore
          incidunt iste molestias!incidunt iste molestias!incidunt iste
          <div
            className={
              own ? "float-right mr-2 blackText" : "float-right mr-2 whiteText"
            }
          >
            <span style={{ fontSize: "12px" }}>1 hour ago</span>
          </div>
        </span>
      </div>
    </div>
  );
}
