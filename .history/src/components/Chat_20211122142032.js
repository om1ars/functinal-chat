import { Avatar } from "@material-ui/core";
import React, { useEffect } from "react";
import "./Chat.css";

export default function Chat() {
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
      }, []);
  return (
    <div className="chat">
      <div className="chat__header">
          <Avatar />
      </div>
      <div className="chat__body"></div>
      <div className="chat__footer"></div>
    </div>
  );
}
