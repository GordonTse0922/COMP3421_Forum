import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Category from "./Category";
import Signup from "./Signup";
import Login from "./Login";
import AddPost from "./AddPost";
import TopicList from "./TopicList";



class Home extends React.Component {
  constructor() {
    super();
    // Set initial state
    this.state = {
      // notSignup: true,
      showAbout: false,
      showContact: false,
      showTopic: false,
      showLogin: false,
      showSignup: false,
      showCategory:false,
      notLogin: true,
      topicId: 0
    };
    this.checkClickTopic = this.checkClickTopic.bind(this);
    this.parentCallback = this.parentCallback.bind(this);
    this.child = React.createRef();
  }
  parentCallback(userToken){
    var isLogin=userToken["login"];
    if(isLogin){
      sessionStorage.setItem('Login', userToken["login"]);
      sessionStorage.setItem('UserId', userToken["userId"]);
      sessionStorage.setItem('UserName', userToken["userName"]);
      this.setState({notLogin:false});
    }else{
      sessionStorage.setItem('Login', false);
      sessionStorage.removeItem('UserId');
      sessionStorage.removeItem('UserName');
      this.setState({notLogin:true});
    }
  }
  update(isLogin){
    this.setState({showLogin:isLogin});
  }



  checkClickTopic(childData){
    this.setState({ showTopic: childData });
    // this.setState({topicId: id});
    console.log("showTopic", childData);
  }
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand logo" href="#">
            PolyDiscuss
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
                {/* <a class="nav-link cool-link" href="http://localhost:3000" onClick={() => this.setState({showCategory:true})}>
                  Home <span class="sr-only">(current)</span>
                </a> */}
                <Link to="/" class="nav-link cool-link" onClick={() => this.setState({showCategory:true})}>Home</Link>
              </li>

              {/* <li class="nav-item active">
                <a
                  class="nav-link dropdown-toggle"
                  href={<Home />}
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
              </li> */}

              <li class="nav-item active">
                <Link to="/About" class="nav-link cool-link" onClick={() => this.setState({showCategory:false})}>About</Link>
              </li>

              <li class="nav-item active">
                <Link to="/ContantUs" class="nav-link cool-link" onClick={() => this.setState({showCategory:false})}>Contact</Link>
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
                onClick={() => {this.setState({ showLogin: true });this.child.current.handleOpen();}}
              >
                login
              </button>
              {/* </Link> */}
            </div>
          </div>
        )}

        <Login parentCallback={this.parentCallback}  ref={this.child}  />
        <Signup />
        {/* {(!this.state.showAbout && !this.state.showContact && !this.state.showTopic) && (
          <Category parentCallback={this.checkClickTopic} />

        )} */}
        {this.state.showCategory && (
          <Category />
        )}
        {/* {this.state.showTopic && (
          <TopicList />
        )} */}
      </>
    );
  }
}

export default Home;
