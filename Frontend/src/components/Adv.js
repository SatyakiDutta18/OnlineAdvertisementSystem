import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdvList from "./AdvList";
import AddAdv from "./AddAdv";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Adv() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route exact path="/" element={<AdvList />} />
            <Route path="/addprod" element={<AddAdv />} />
            <Route path="/Advs/edit/:id" element={<AddAdv />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default Adv;