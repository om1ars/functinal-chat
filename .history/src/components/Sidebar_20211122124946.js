import React from "react";
import "./Sisdebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
          <Avatar />
      </div>
      <div className="sidebar__search"></div>
      <div className="sidebar__chats"></div>
    </div>
  );
}

export default Sidebar;
