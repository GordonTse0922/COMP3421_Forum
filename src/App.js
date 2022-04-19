import logo from "./logo.svg";
// import * as React from "react";
import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";
import Slide from "./Slide";
import Category from "./Category";
import About from "./About";
import Signup from "./Signup";
import Login from "./Login";
import ContantUs from "./contact";
import TopicList from "./TopicList";
import AddPost from "./AddPost";
import Discussion from "./Discuession";
import { Col } from "react-bootstrap";

function App() {
  // const homeUrl ="http://localhost:3000";
  const [homeUrl, setUrl] = useState("http://localhost:3000");
  useEffect(() => {
    setUrl(window.location.origin);
    console.log("window.location.origin",homeUrl);
    // getNumOfComment(postId);
  });
  return (
    <>
      <Router>
        {/* <Signup />         */}
        <Home />
        {/* {homeUrl == "http://localhost:3000" && <Category />} */}
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/ContantUs" element={<ContantUs />} />
          <Route exact path="/TopicList/:id" element={<TopicList />} />
          <Route exact path="/AddPost/:departmentId" element={<AddPost />} />
          <Route exact path="/Discussion/:postId" element={<Discussion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
