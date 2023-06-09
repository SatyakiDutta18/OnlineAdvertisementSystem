import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./components/User";
import UserList from "./components/UserList";
import NotFound from "./components/NotFound";
import Admin from "./components/Admin";
import AdvList from "./components/AdvList";
import AddUser from "./components/AddUser";
import AddAdv from "./components/AddAdv";

import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
} from "./components";
import Accessories from "./components/Accessories";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />


      <Route path="/accessories" element={<Accessories />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={<User />} />
      <Route path="/userlist" element={<UserList />} />
      

       {/* <Route path="/Users" element={<User />}> */}
       <Route exact path="/userlist" element={<UserList />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/Users/edit/:id" element={<AddUser />} />
      <Route path="/*" element={<NotFound />} />
      {/* </Route> */}
  

      {/* <Route path="/Adv" element={<Adv/>}> */}
      <Route exact path="/AdvList" element={<AdvList />} />
      <Route path="/AddAdv" element={<AddAdv />} />
      <Route path="/*" element={<NotFound />} />
      {/* </Route> */}
       
      {/* <Route path="/get/Adv" element={<FetchAdv/>}/>
      <Route path="/save/Adv" element={<SaveAdv/>}/> */}
      <Route path="/login" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>

    <Footer />
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();
