import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import { Search } from "@material-ui/icons";
import Conversation from "../../Components/Conversation/Conversation";
import Message from "../../Components/Message/Message";
import "./messanger.css";
import Online from "../../Components/Online/Online";
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState([]);
  const [arrivalMessages, setArrivalMessages] = useState(null);

  const socket = useRef();

  const scrollref = useRef();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    socket.current = io("ws://localhost:8000");
    socket.current.on("getMessage", (data) => {
      setArrivalMessages({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessages &&
      currentChat?.members.includes(arrivalMessages.sender) &&
      setMessages((prev) => [...prev, arrivalMessages.text]);
  }, [arrivalMessages, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [socket]);

  console.log(socket);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log("Messanger file", err);
      }
    };
    getConversation();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        const dummy = res.data;
        const temp = dummy.map((data) => {
          return {
            _id: data._id,
            conversationId: data.conversationId,
            sender: data.sender,
            text: data.text,
            createdAt: data.createdAt,
          };
        });
        setMessages(temp);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    // e.preventDefault();

    const message = {
      sender: user._id,
      text: newMessages,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessages,
    });

    try {
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessages("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-3"
            style={{
              height: "calc(100vh - 55px)",
              overflow: "scroll",
            }}
          >
            <div className="row">
              <div
                className="m-2 d-flex align-items-center"
                style={{
                  height: "40px",
                  width: "100%",
                  borderBottom: "1px solid gray",
                }}
              >
                <Search />
                <input
                  type="text"
                  placeholder="Search for Friends ..."
                  className="form-control border-0"
                ></input>
              </div>
            </div>
            <div className="row">
              {conversations.map((c) => (
                <div
                  onClick={() => setCurrentChat(c)}
                  className="ml-2 mt-2 mr-2 d-flex align-items-center hoverName"
                  style={{
                    height: "40px",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <Conversation conversation={c} currentUser={user} />
                </div>
              ))}
            </div>
          </div>

          {currentChat ? (
            <div
              className="col-6 hideScrollbar"
              style={{
                height: "calc(100vh - 55px)",
                overflow: "scroll",
              }}
            >
              <div
                className="overflow-scroll"
                style={{
                  height: "87%",
                  overflow: "scroll",
                }}
              >
                {messages.map((m) => (
                  <div ref={scrollref} className="d-flex flex-column">
                    <Message
                      key={m._id}
                      message={m}
                      own={m.sender === user._id}
                    />
                  </div>
                ))}
              </div>
              <div className="d-flex mb-2">
                <textarea
                  className="form-control"
                  rows="3"
                  onChange={(e) => setNewMessages(e.target.value)}
                  value={newMessages}
                ></textarea>
                <button
                  type="submit"
                  class="ml-2 btn btn-primary text-white border-0 px-4"
                  style={{ boxShadow: "none" }}
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            </div>
          ) : (
            <div className="col-6 d-flex align-items-center">
              You dont have any conversations
            </div>
          )}

          <div
            className="col-3"
            style={{ height: "calc(100vh - 55px)", overflow: "scroll" }}
          >
            <div className="my-1 ml-3">
              <div className="py-2" style={{ borderBottom: "1px solid gray" }}>
                <span className="font-weight-bold">Online Friends</span>
              </div>
              <ul className="list-group">
                {/* {Users.map((user) => ( */}
                <Online
                // key={user._id} user={user}
                />
                {/* ))} */}
                <Online />
                <Online />

                <Online />
                <Online />
                <Online />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
