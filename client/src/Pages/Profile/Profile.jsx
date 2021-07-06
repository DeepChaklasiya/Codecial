import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import Rightbar from "../../Components/Rightbar/Rightbar";
import ProfileRightbar from "../../Components/ProfileRightbar/ProfileRightbar";
import "./profile.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      console.log("here");
      // const res = await axios.get(`users?username=following`);
      const res = await axios.get(
        "http://localhost:5000/api/users?username=following"
      );
      setUser(res.data);
      console.log(res.data);
    };

    fetchUser();
  }, []);

  return (
    <>
      <div>
        <Topbar />
        <div className="container-fuild">
          <div className="row">
            <div className="col-3">
              <Sidebar />
            </div>
            <div className="col-9">
              <div className="mb-10">
                <div className="mainImage">
                  <img
                    src={`${PF}15.png`}
                    style={{ width: "100%", height: "100%" }}
                  ></img>
                </div>
                <div className="subImage">
                  <img
                    src={`${PF}9.png`}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  ></img>
                </div>
              </div>
              <div style={{ height: "70px" }}></div>
              <div className="text-center mb-2 h4 font-weight-bold">
                {user.username}
              </div>
              <div className="text-center mb-3">{user.desc}</div>

              <div className="container-fuild">
                <div className="row">
                  <div className="col-8">
                    <Feed username={"following"} />
                  </div>
                  <div className="col-4">
                    <ProfileRightbar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
