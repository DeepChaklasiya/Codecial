import { MoreVert } from "@material-ui/icons";
import { useState } from "react";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
    console.log("hello");
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  return (
    <div>
      <div className="card mb-4">
        <div className="d-flex justify-content-between my-2 ml-3">
          <div>
            <img
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt=""
              style={{ height: "27px", width: "27px" }}
              className="rounded-circle"
            ></img>
            <span className="pl-2 ">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="pl-2 small" style={{ color: "#636763" }}>
              {post.date}
            </span>
          </div>
          <div>
            <MoreVert />
          </div>
        </div>
        <div>
          <div className="mx-3">
            <span>{post.desc}</span>
          </div>

          <img
            src={post.photo}
            alt=""
            className="my-2 mx-3"
            style={{ height: "400px", width: "670px" }}
          ></img>
        </div>
        <div className="mx-3 my-3 d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src="/assets/4.png"
              height="24px"
              width="24px"
              onClick={likeHandler}
              style={{ cursor: "pointer" }}
              className="mr-1"
            />
            <img
              src="/assets/5.png"
              height="24px"
              width="24px"
              style={{ cursor: "pointer" }}
              className="mr-1"
            />
            <span>{like} people like it</span>
          </div>
          <div>
            <span style={{ borderBottom: "1px dashed gray" }}>
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
