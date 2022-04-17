import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Category from "./Category";
import Signup from "./Signup";
import Login from "./Login";

// const navigate = useNavigate();

class Home extends React.Component {
  constructor() {
    super();
    // Set initial state
    this.state = {
      // notSignup: true,
      showLogin: false,
      showSignup: false,
      notLogin: true,
    };
    this.checkLogin = this.checkLogin.bind(this);
  }

  checkLogin(childData) {
    console.log("childData", childData);
    this.setState({ notLogin: childData });
  }

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand logo" href="#">
            iDiscuss
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto mx-auto ">
              <li class="nav-item active">
                <a class="nav-link cool-link" href={<Home />}>
                  Home <span class="sr-only">(current)</span>
                </a>
                {/* <Link to="/">Home</Link> */}
              </li>

              <li class="nav-item active">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Top Category
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                ></div>
              </li>
              <li class="nav-item active">
                <Link to="/About" class="nav-link cool-link">About</Link>
              </li>

              <li class="nav-item active">
                <Link to="/ContantUs" class="nav-link cool-link">Contact</Link>
              </li>

              <li class="nav-item active">
                <Link to="/TopicList" class="nav-link cool-link">TestTopic</Link>
              </li>
            </ul>
          </div>
        </nav>
        {this.state.notLogin && (
          <div class="alert alert-success">
            <div class="btn-group">
              Create an account for this website {/* <Link to="/Signup"> */}
              <button
                type="button"
                class="btn btn-success ml-2"
                data-toggle="modal"
                data-target="#signupModal"
                onClick={() => this.setState({ showSignup: true })}
              >
                signup
              </button>
              {/* </Link> */}
              {/* <Link to="/Login"> */}
              <button
                type="button"
                class="btn btn-success ml-2"
                data-toggle="modal"
                data-target="#loginModal"
                onClick={() => this.setState({ showLogin: true })}
              >
                login
              </button>
              {/* </Link> */}
            </div>
          </div>
        )}
        <Category/>
        <Login parentCallback={this.checkLogin} />
        <Signup />
      </>
    );
  }
}
export default Home;
