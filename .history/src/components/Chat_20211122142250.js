import { Avatar } from "@material-ui/core";
import React, { useEffect } from "react";
import "./Chat.css";

export default function Chat() {
  const [seed, setSeed] = React.useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      </div>
      <div className="chat__body">
          <div className='chat__headerInfo'>

              <h3>Room Name</h3>
              <h3>Room Name</h3>
          </div>
      </div>
      <div className="chat__footer"></div>
    </div>
  );
}
