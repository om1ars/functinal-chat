import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

export default function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff" />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  );
}
