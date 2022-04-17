import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import ContantUs from "./contact"
import TopicList from "./TopicList" 

function App() {
  return (
    <>
      <Router>
        {/* <Signup />         */}
        <Home />
        <Routes>
          <Route exact path="/Signup" element={<Signup/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Logout" element={<Logout/>} />
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/ContantUs" element={<ContantUs/>} />
          <Route exact path="/TopicList" element={<TopicList/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
