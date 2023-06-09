import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./AddUser";
import NotFound from "./NotFound";

function User() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route exact path="/" element={<UserList />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/Users/edit/:id" element={<AddUser />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default User;