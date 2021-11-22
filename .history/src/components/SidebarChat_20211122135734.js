import { Avatar } from "@material-ui/core";
import React, { useEffect } from "react";
import "./SidebarChat.css";

export default function SidebarChat() {

    useEffect(() => {

    }, [])
  return (
    <div className="sidebarChat">
      <Avatar src="https://avatars.dicebear.com/api/human/john.svg" />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  );
}
