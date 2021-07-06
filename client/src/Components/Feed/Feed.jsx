import "./feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
// import { Posts } from "../../dummyData";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      // const res = username
      //   ? await axios.get("posts/profile/" + username)
      //   : await axios.get("posts/timeline/60e19bad1feedadb33aed0f9");
      const res = await axios.get(
        "http://localhost:5000/api/posts/profile/following"
      );
      console.log(res);
      setPosts(res.data);
    };

    fetchPosts();
  }, [username]);

  return (
    <div style={{ height: "calc(100vh - 55px)", overflow: "scroll" }}>
      <Share />
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
}
