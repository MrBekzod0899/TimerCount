import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Basic from "../Basic";
import Main from "../LandingPage/Main";
import Privacy from "../Privacy/Privacy";


export default function RouterGroup() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<Main/>}/>
          <Route path="/pravicy" exact element={<Privacy/>}/>
          <Route path="/timer" element={<Basic/>}/> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}