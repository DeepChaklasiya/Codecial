import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import Rightbar from "../../Components/Rightbar/Rightbar";
import "./profile.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CameraAlt } from "@material-ui/icons";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const username = useParams().username;
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };

    fetchUser();
  }, [username]);

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
                    src={
                      user.coverPicture ? PF + user.coverPicture : PF + "16.png"
                    }
                    style={{ width: "100%", height: "100%" }}
                  ></img>
                </div>
                <div className="subImage">
                  <img
                    src={
                      user.profilePicture
                        ? PF + user.profilePicture
                        : PF + "noUserImage.png"
                    }
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  ></img>
                </div>
                <div
                  className="changeProfile d-flex align-items-center justify-content-center"
                  style={{ width: "50px", height: "50px" }}
                >
                  <CameraAlt />
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
                    <Feed username={username} />
                  </div>
                  <div className="col-4">
                    <Rightbar user={user} />
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
