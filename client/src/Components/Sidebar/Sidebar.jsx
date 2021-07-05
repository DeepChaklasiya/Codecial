import { CallReceived } from "@material-ui/icons";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmarks,
  Questions,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

import { Users } from "../../dummyData";
import CloseFriend from "../CloseFriend/CloseFriend";

export default function Sidebar() {
  return (
    <>
      <div style={{ height: "calc(100vh - 55px)", overflow: "scroll" }}>
        <div>
          <ul className="list-group">
            <li className="d-flex align-items-center my-2 ml-3">
              <RssFeed />
              <div style={{ width: "15px" }}></div>
              <span>Feed</span>
            </li>

            <li className="d-flex align-items-center my-2 ml-3">
              <Chat />
              <div style={{ width: "15px" }}></div>
              <span>Chats</span>
            </li>
            <li className="d-flex align-items-center my-2 ml-3">
              <PlayCircleFilledOutlined />
              <div style={{ width: "15px" }}></div>
              <span>Videos</span>
            </li>
            <li className="d-flex align-items-center my-2 ml-3">
              <Group />
              <div style={{ width: "15px" }}></div>
              <span>Groups</span>
            </li>
            <li className="d-flex align-items-center my-2 ml-3">
              <Bookmarks />
              <div style={{ width: "15px" }}></div>
              <span>Bookmarks</span>
            </li>
            <li className="d-flex align-items-center my-2 ml-3">
              <HelpOutline />
              <div style={{ width: "15px" }}></div>
              <span>Questions</span>
            </li>
            <li className="d-flex align-items-center my-2 ml-3">
              <WorkOutline />
              <div style={{ width: "15px" }}></div>
              <span>Jobs</span>
            </li>
            <li className="d-flex align-items-center my-2 ml-3">
              <Event />
              <div style={{ width: "15px" }}></div>
              <span>Events</span>
            </li>
            <li className="d-flex align-items-center my-1 ml-3">
              <School />
              <div style={{ width: "15px" }}></div>
              <span>Courses</span>
            </li>
          </ul>
          <div
            className="my-2 ml-3 bg-primary"
            style={{ width: "40%", borderRadius: "20px" }}
          >
            <button
              class="btn btn-block btn-light"
              style={{ backgroundColor: "#D8D8D8" }}
            >
              Show More
            </button>
          </div>

          <hr style={{ margin: "20px 0" }} />

          <ul className="list-group overflow-scroll">
            {Users.map((user) => (
              <CloseFriend key={user.id} user={user} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
