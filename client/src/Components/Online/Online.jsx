import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export default function Online({
  user,
  onlineUsers,
  currentId,
  setCurrentChat,
}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data);
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((frnd) => onlineUsers.includes(frnd._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(onlineFriends.length);

  return (
    <ul className="list-group">
      {onlineFriends.map((o) => {
        {
          console.log(o);
        }
        <li className="d-flex align-items-center my-2">hello madarchod</li>;
      })}
    </ul>
  );
}
