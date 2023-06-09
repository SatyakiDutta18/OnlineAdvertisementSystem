import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Admin() {
  return (
    <div className="container" id="admin">
      <div className="m-5 p-5">
        <Link to="/AdvList">
          <button className="button1">View advertisement List</button>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/UserList">
          <button className="button2">View User List</button>
        </Link>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}