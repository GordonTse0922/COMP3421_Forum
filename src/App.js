import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Signup from "./Signup";
import Login from "./Login";
import ContantUs from "./contact";
import TopicList from "./TopicList";
import Discussion from "./discussion";
import { Col } from "react-bootstrap";
export const API_URL = 'https://comp3421-server.herokuapp.com';
function App() {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/ContantUs" element={<ContantUs />} />
          <Route exact path="/TopicList/:id" element={<TopicList />} />
          <Route exact path="/Discussion/:postId" element={<Discussion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
