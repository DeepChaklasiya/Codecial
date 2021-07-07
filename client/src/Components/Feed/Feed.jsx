import "./feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
// import { Posts } from "../../dummyData";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get(`/posts/timeline/${user._id}`);

      setPosts(res.data);
    };

    fetchPosts();
  }, [username, user._id]);

  return (
    <div style={{ height: "calc(100vh - 55px)", overflow: "scroll" }}>
      <Share />
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
}
