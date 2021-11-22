import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import db from "../utils/firebase";
import "./Chat.css";

export default function Chat() {
  const [seed, setSeed] = React.useState("");
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);

  // console.log(roomId);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  // console.log(roomName);
  console.log(messages);

  const sendMessage = (s) => {
    s.preventDefault();
    setInput("");
    db.collection
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((m) => (
          <p className={`chat__message ${true && `chat__receiver`}`}>
            <span className="chat__name">{m.name}</span>
            {m.message}
            <span className="chat__timestamp">
              {new Date(m?.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a name"
            type="text"
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}
