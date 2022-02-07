import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import SignIn from "../Auth/SignIn/SignIn";
import SignUp from "../Auth/SignUp/SignUp";
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
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}