import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import { Search } from "@material-ui/icons";
import Conversation from "../../Components/Conversation/Conversation";
import Message from "../../Components/Message/Message";
import "./messanger.css";
import Online from "../../Components/Online/Online";
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const { user } = useContext(AuthContext);

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
        console.log("res.data", res.data);
        setMessages(temp);
        console.log(temp);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

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
                className="d-flex flex-column overflow-scroll"
                style={{
                  height: "87%",
                  overflow: "scroll",
                }}
              >
                {messages.map((m) => (
                  <div>
                    <Message
                      key={m._id}
                      message={m}
                      own={m.sender === user._id}
                    />
                  </div>
                ))}
              </div>
              <div className="d-flex mb-2">
                <textarea className="form-control" rows="3"></textarea>
                <button
                  type="submit"
                  class="ml-2 btn btn-primary text-white border-0 px-4"
                  style={{ boxShadow: "none" }}
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
