import { Users } from "../../dummyData";
import Online from "../Online/Online";
import "./rightbar.css";

export default function Rightbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div
      className="container-fluid"
      style={{ height: "calc(100vh - 55px)", overflow: "scroll" }}
    >
      <div className="row">
        <div className="d-flex my-3 mx-2">
          <div>
            <img src={`${PF}gift.png`} height="40px" width="40px"></img>
          </div>
          <div className="ml-1">
            <span>
              <b>Deep</b> and <b>3 other Friend</b> has birthday today
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="my-1 ml-2">
          <img
            src={`${PF}add.png`}
            alt=""
            width="95%"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="my-1 ml-3">
          <span className="font-weight-bold">Online Friends</span>
          <ul className="list-group">
            {Users.map((user) => (
              <Online key={user.id} user={user} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
