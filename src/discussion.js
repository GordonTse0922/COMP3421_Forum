import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TopicList.css";
import { Link, useParams } from "react-router-dom";
import "./discussion.css";
import { API_URL } from "./App";

//const departmentId = 1;

function Discussion() {
  //const { departmentId } = useParams();

  const userId = sessionStorage.getItem('UserId');
  const postId = useParams();
  const [comments, setComments] = useState([]);
  const [numComments, setnumComments] = useState(0);
  const [content, setContent] = useState("");
  const [post, setPost] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getPosts(postId);
    getComments(postId);
  }, []);

  const getComments = async (postId) => {
    try {
      const id = postId["postId"];
      const res = await axios.get(`${API_URL}/comments`, {
        params: { postId: id },
      });
      setnumComments(res.data.comments.length);
      setComments(res.data.comments);
      console.log(res.data.comments);
      for (let i = 0; i < res.data.comments.length; i++) {
            // arr.push([res2.data.comments.length])
            setUsers((users) => [...users, res.data.comments[i].user.name]);
      }
      return res;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getPosts = async (postId) => {
    try {
      const id = postId["postId"];
      const res = await axios.get(`${API_URL}/post`, {
        params: { id: id },
      });
      setPost(res.data.post);
      console.log(res.data.post);
      return res;
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = async (event) => {
    if (sessionStorage.getItem('Login') === "true") {
        event.preventDefault();
        await axios
        .post(`${API_URL}/comment`, {
            user_id: userId,
            post_id: postId["postId"],
            content: content,
        })
        .then((res) => {
            console.log(res.data);
            console.log("sucessful");
            getPosts(postId);
            getComments(postId);
            setContent("");
        })
        .catch((err) => {
            console.log(err);
            console.log("fail");
        });
        window.location.reload(false);
    }
    else{
        alert("You need to login first")

        window.location.reload(false);
    }
  };

  return (
    <>
      <div>
        <div class="container my-2">
          <div class="jumbotron ">
            <div>
              <div class="title">
                <h1 class="display-4">{post.title}</h1>
              </div>
              <br />
              <p>{post.content}</p>
              <br />
              <h4> {numComments} Response</h4>
            </div>
          </div>
        </div>
        <div class="container">
          <div>
            <h2 class="session">Post Comment</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <textarea
                class="form-control"
                id="comment"
                name="comment"
                placeholder="Enter Comment"
                rows="4"
                onChange={(event) => setContent(event.target.value)}
              ></textarea>
              <br></br>
              <div class="row">
                <div class="col-sm-12 form-group">
                  <button class="btn btn-primary pull-right" type="submit">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="container">
          <h2 class="session">Discussion</h2>
          {comments.map((comment,index) => (
            <div class="discussion">
              <div class="discussionBox">
                <p> User {users[index]} at {comment.created_at}</p>
                <h3>{comment.title}</h3>
                <div class="details">{comment.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Discussion;
