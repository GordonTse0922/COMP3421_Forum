import axios from "axios";
import * as React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
import { API_URL } from "./App";
import { Button, Form, Modal } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    // Set initial state
    this.state = {
      email: "",
      passward: "",
      Login: sessionStorage.getItem("Login"),
      showModal: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    console.log("this.state.email", this.state.email);
    console.log("this.state.pw", this.state.passward);
    console.log(`${API_URL}/login`);
    axios
      .post(`${API_URL}/login`, {
        // name: this.state.name,
        email: this.state.email,
        password: this.state.passward,
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ Login: true });
        this.props.parentCallback({
          login: true,
          userId: parseInt(res.data.user.id),
          userName: res.data.user.name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({ showModal: false });
  }

  handleLogout(event) {
    event.preventDefault();
    this.setState({ Login: false });
    this.props.parentCallback({ login: false });
    // sessionStorage.clear()
  }
  handleClose() {
    this.setState({ showModal: false });
  }
  handleOpen() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>PolyDiscuss Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(event) =>
                    this.setState({ email: event.target.value })
                  }
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(event) =>
                    this.setState({ passward: event.target.value })
                  }
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {this.state.Login && (
          <div class="alert alert-success" role="alert">
            <div class="btn-group">
              <p class="text-dark">
                {" "}
                Welcome <b>{sessionStorage.getItem("UserName")}</b>
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
