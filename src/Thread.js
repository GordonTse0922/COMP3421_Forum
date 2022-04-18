import "./App.css";
import * as React from "react";
import Slide from "./Slide";

class Thread extends React.Component {
  render() {
    return (
      <>
        {this.props.notLogin}
      </>
    );
  }
}
export default Thread;