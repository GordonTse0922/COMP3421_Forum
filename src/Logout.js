import axios from "axios";
import * as React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";

class Logout extends React.Component {
  constructor() {
    super();
    // Set initial state
    this.state = {
      name: "",
      email: "",
      passward: "",

      notLogin: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return(
      <>
        
      </>
    );
  }
}

export default Logout;
