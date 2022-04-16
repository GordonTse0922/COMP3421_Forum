import axios from "axios";
import * as React from "react";
import Home from "./Home";

class Signup extends React.Component {
  constructor() {
    super();
    // Set initial state
    this.state = {
      name: "",
      email: "",
      passward: "",
      confirmPassword: "",

      notSignup: true,
      hideModal: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("name",this.state.name);
    console.log("email",this.state.email);
    console.log("password",this.state.passward);

    axios
      .post("http://127.0.0.1:5000/user", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.passward,
        // confirm_password: this.state.confirmPassward,
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ notSignup: false });
        console.log("notSignup", this.state.notSignup);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        {/* <Home notSignup={this.state.notSignup} /> */}

        <div
          class="modal fade"
          id="signupModal"
          role="dialog"
          aria-labelledby="signupModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="signupModalLabel">
                  iDiscuss Signup
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

              <form onSubmit={this.handleSubmit}>
                <div class="modal-body">
                  <div class="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      class="form-control"
                      id="signupUsername"
                      name="signupUsername"
                      placeholder="Ex. Martin123"
                      onChange={(event) =>
                        this.setState({ name: event.target.value })
                      }
                    />
                  </div>
                  <div class="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="signupEmail"
                      name="signupEmail"
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
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="signupPassword"
                      name="signupPassword"
                      placeholder="Ex. abcd1234"
                      onChange={(event) =>
                        this.setState({ passward: event.target.value })
                      }
                    />
                  </div>
                  <div class="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="cPassword"
                      name="cPassword"
                      placeholder="Confirm Password"
                      onChange={(event) =>
                        this.setState({ confirmPassword: event.target.value })
                      }
                    />
                  </div>
                  {/* <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label">Check me out</label>
                  </div> */}
                  <br />
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

        {!this.state.notSignup && (
          <div
            class="alert alert-success alert-dismissible fade show my-0"
            role="alert"
          >
            <strong>Success !</strong> You can login now.
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

      </>
    );
  }
}
export default Signup;
