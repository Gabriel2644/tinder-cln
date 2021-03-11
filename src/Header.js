import React from "react";
import "./header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>

      <img className="header_logo" src="/img/tinder.png" alt="Tinder Logo" />

      <IconButton>
        <ForumIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default header;
