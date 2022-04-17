import axios from "axios";
import * as React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    // Set initial state
    this.state = {
      email: "",
      passward: "",

      notLogin: true,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    console.log("this.state.email", this.state.email)
    console.log("this.state.pw", this.state.passward)
    axios
      .post("http://127.0.0.1:5000/login", {
        // name: this.state.name,
        email: this.state.email,
        password: this.state.passward,
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ notLogin: false });
        this.props.parentCallback(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleLogout(event) {
    event.preventDefault();
    this.setState({notLogin: true});
    this.props.parentCallback(true);
  }

  render() {
    return (
      <>
        {/* <Home notLogin={this.state.notLogin}/> */}
        <div
          class="modal fade"
          id="loginModal"
          role="dialog"
          aria-labelledby="loginModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="loginModalLabel">
                  iDiscuss Login
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={this.handleLogin}>
                <div class="modal-body">
                  <div class="form-group">
                    <label for="loginEmail">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="loginEmail"
                      name="loginEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={(event) =>
                        this.setState({ email: event.target.value })
                      }
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="loginPass">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="loginPass"
                      name="loginPass"
                      placeholder="Password"
                      onChange={(event) =>
                        this.setState({ passward: event.target.value })
                      }
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {!this.state.notLogin && (
          <div class="alert alert-success" role="alert">
            <div class="btn-group">
              <p class="text-dark">
                {" "}
                Welcome <b>{this.state.email}</b>
                {/* <Link to="/Home"> */}
                  <button
                    type="button"
                    class="btn btn-success ml-2"
                    // data-toggle="modal"
                    // data-target="#loginModal"
                    onClick={this.handleLogout}
                  >
                    logout
                  </button>
                {/* </Link> */}
              </p>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Login;
