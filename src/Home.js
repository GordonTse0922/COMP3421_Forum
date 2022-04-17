import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./Signup";

// const navigate = useNavigate();

class Home extends React.Component {
  constructor() {
    super();
    // Set initial state
    this.state = {
      // notSignup: true,
    };
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
                <Link to="/">Home</Link>
              </li>

              <li class="nav-item dropdown">
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
              <li class="nav-item">
                {/* <a class="nav-link cool-link" href="https://localhost:3000/About">
    About
  </a> */}
                {/* <Route path="/about" component={About} /> */}
                <Link to="/About">About</Link>
              </li>

              <li class="nav-item">
                <Link to="/ContantUs">Contact</Link>
              </li>

              <li class="nav-item">
                <Link to="/TopicList">TestTopic</Link>
              </li>
            </ul>
          </div>
          {/* <form class="form-inline my-2 my-lg-0 " method="GET">
            <input
              class="form-control mr-sm-2"
              type="search"
              name="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form> */}
        </nav>
        {/* {this.props.notSignup && ( */}
        <div class="alert alert-success">
          <div class="btn-group">
            Create an account for this website{" "}
            <Link to="/Signup">
              <button
                type="button"
                class="btn btn-success ml-2"
                data-toggle="modal"
                data-target="#signupModal"
              >
                signup
              </button>
            </Link>
            <Link to="/Login">
              <button
                class="btn btn-success ml-2"
                data-toggle="modal"
                data-target="#loginModal"
              >
                login
              </button>
            </Link>
          </div>
        </div>
        {/* )}  */}
      </>
    );
  }
}
export default Home;
