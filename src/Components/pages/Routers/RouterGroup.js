import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Main from "../LandingPage/Main";
import Counting from "../LandingPage/TimerCount";
import Privacy from "../Privacy/Privacy";


export default function RouterGroup() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<Main/>}/>
          <Route path="/pravicy" exact element={<Privacy/>}/>
          <Route path="/timer" element={<Counting/>}/> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}