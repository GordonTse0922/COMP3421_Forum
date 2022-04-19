import "./App.css";
import * as React from "react";

function LeaveHomepage(){
  sessionStorage.setItem('HomePage', "False");
}

class About extends React.Component {
  // componentDidMount(){
  //   window.location.href = "https://localhost:3000/About";
  // }
  render() {
    LeaveHomepage();
    return (
      <div class="container">
        <div class="card mb-3">
          <h5 class="card-title text-center h1 mt-4">About Us</h5>
          <div class="card-body">
            <div class="col-md-5 p-lg-5 mx-auto my-5 ">
              <h1 class="display-4 font-weight-normal">COMP3421 Project</h1>
              <p class="lead font-weight-normal">
                This discussion forum is created by group 6, you can try to use
                it.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
