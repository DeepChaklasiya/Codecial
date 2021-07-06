import React from "react";
import "./topbar.css";
import {
  Search,
  Person,
  Chat,
  Notifications,
  ChatBubbleOutline,
} from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row height150 bg-primary">
          <div className="col-4 d-flex">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                paddingTop: "8px",
              }}
            >
              <span className="pl-3 pt-2 text-white font-weight-bold h2">
                Codecial
              </span>
            </Link>
          </div>

          <div
            className="col-4 pt-1 bg-white"
            style={{ borderRadius: "30px", margin: "8px 0px" }}
          >
            <div className="d-flex align-items-center">
              <Search style={{ fontSize: "25px" }} />
              <input
                placeholder=" Search for friends, posts or Videos"
                className="form-control border-0"
              />
            </div>
          </div>

          <div className="col-2 pt-3 text-white">HomePage Timeline</div>

          <div className="col-2 d-flex">
            <div
              className="d-flex justify-content-around pt-3 text-white"
              style={{ width: "70%" }}
            >
              <Badge badgeContent={1} color="error">
                <Person />
              </Badge>
              <Badge badgeContent={1} color="error">
                <Chat />
              </Badge>
              <Badge badgeContent={1} color="error">
                <Notifications />
              </Badge>
            </div>
            <div style={{ width: "10%" }}></div>
            <div className="pt-2">
              <img
                src="/assets/2.jpeg"
                alt=""
                style={{ height: "32px", width: "32px" }}
                className="rounded-circle"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
