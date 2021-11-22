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

  console.log(roomId)

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        // .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);

  console.log(roomName);

  const sendMessage = (s) => {
    s.preventDefault();
    setInput("");
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
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
        <p className={`chat__message ${true && `chat__receiver`}`}>
          <span className="chat__name">Sonny</span>Hey Guys
          <span className="chat__timestamp">5:32</span>
        </p>
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
