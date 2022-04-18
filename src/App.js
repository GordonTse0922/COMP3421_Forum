import logo from "./logo.svg";
import * as React from "react";
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

function App() {
  return (
    <>
      <Router>
        {/* <Signup />         */}
        <Home />
        <Routes>
          <Route exact path="/Signup" element={<Signup/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/ContantUs" element={<ContantUs/>} />
          <Route exact path="/TopicList" element={<TopicList/>} />
          <Route exact path="/AddPost" element={<AddPost/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
