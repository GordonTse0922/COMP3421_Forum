import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TopicList.css";
import { Link, useParams } from "react-router-dom";
import Home from "./Home";
import AddPost from "./AddPost";
import { API_URL } from "./App";

//const departmentId = 1;

function TopicList() {
  const userId = sessionStorage.getItem("UserId");
  const isLogin = sessionStorage.getItem("Login");
  console.log("isLogin:", isLogin);
  const departmentId = useParams();
  console.log("this is parameters", departmentId);
  const [posts, setPosts] = useState([]);
  // const [postId, setPostId]= useState(0);
  const [department, setDepartment] = useState(0);
  const [numPosts, setNumPosts] = useState(0);
  const [numComments, setNumComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // getPosts(departmentId);
    getDepartment(departmentId);
    getPosts(departmentId);
    // getNumOfComment(postId);
  }, []);

  const getPosts = async (departmentId) => {
    try {
      departmentId = parseInt(departmentId["id"]);
      const res = await axios.get(`${API_URL}/posts`, {
        params: { id: departmentId },
      });
      setNumPosts(res.data.posts.length);
      setPosts(res.data.posts);
      console.log(res.data.posts);
      for (let i = 0; i < res.data.posts.length; i++) {
        setUsers((users) => [...users, res.data.posts[i].user.name]);
        setNumComments((numComments) => [
          ...numComments,
          res.data.posts[i].comments.length,
        ]);
      }

      console.log("numComments", numComments);
      // setPostId(res.data.pos)
      // console.log(res.data.posts);
      return res;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getDepartment = async (departmentId) => {
    try {
      departmentId = parseInt(departmentId["id"]);
      const res = await axios.get(`${API_URL}/department`, {
        params: { id: departmentId },
      });
      setDepartment(res.data.departments.name);
      console.log(department);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleAddPost = async (departmentId) => {
    try {
      departmentId = parseInt(departmentId["id"]);
      const res = await axios.get(`${API_URL}/department`, {
        params: { id: departmentId },
      });
      setDepartment(res.data.departments.name);
      console.log(department);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <div class="container my-2">
        <div class="jumbotron ">
          <div>
            <h1 class="display-4">Welcome to {department} Forums</h1>
            <br></br>
            <h3> {numPosts} Posts</h3>
          </div>
          <button
            className="addtopic"
            data-toggle="modal"
            data-target="#addpostModal"
          >
            + New Topic
          </button>
          {/*</Link>*/}
        </div>
      </div>
      <AddPost departmentId={departmentId["id"]} />
      <div class="container">
        {posts.map((post, index) => (
          <div class="post">
            <div class="stat">
              <div class="value">
                <strong>{numComments[index]}</strong>
                <br></br>
                comments
              </div>
            </div>
            <div class="summary">
              <p>
                Asked by {users[index]} at {post.created_at}
              </p>
              <Link
                to={`/Discussion/${post.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <h3>{post.title}</h3>
              </Link>
              <div class="details">{post.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TopicList;
