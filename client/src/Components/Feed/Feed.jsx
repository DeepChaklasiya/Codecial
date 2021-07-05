import "./feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div style={{ height: "calc(100vh - 55px)", overflow: "scroll" }}>
      <Share />
      {Posts.map((p) => (
        <Post key={p.id} post={p}/>
      ))}
    </div>
  );
}
