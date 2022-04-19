import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TopicList.css";
import { Link, useParams } from "react-router-dom";
import Home from "./Home";
import AddPost from "./AddPost";

//const departmentId = 1;

function TopicList() {
    const userId = sessionStorage.getItem('UserId')
    console.log("userId:", userId)
  //const { departmentId } = useParams();

  // const userId = useParams();
  const departmentId = useParams();
  console.log("this is parameters", departmentId);
  const [posts, setPosts] = useState([]);
  // const [postId, setPostId]= useState(0);
  const [department, setDepartment] = useState(0);
  const [numPosts, setNumPosts] = useState(0);
  const [numComments, setNumComments] = useState([]);
  const [users, setUsers] = useState([]);
  // const [addedPost, addPost] = useState(false);

  useEffect(() => {
    // getPosts(departmentId);
    getDepartment(departmentId);
    getPosts(departmentId);
    // getNumOfComment(postId);
  }, []);

  const getPosts = async (departmentId) => {
    try {
      departmentId = parseInt(departmentId["id"]);
      const res = await axios.get("http://127.0.0.1:5000/posts", {
        params: { id: departmentId },
      });
      setNumPosts(res.data.posts.length);
      setPosts(res.data.posts);
      console.log(res.data.posts);
      for (let i = 0; i < res.data.posts.length; i++) {
        await axios
          .get("http://127.0.0.1:5000/user", { params: { id:  res.data.posts[i].user_id} })
          .then((res2) => {
            console.log(res2.data);
            // arr.push([res2.data.comments.length])
            setUsers((users) => [
              ...users,
              res2.data.user.name,
            ]);
          })
          .catch((err) => {
            setUsers((users) => [
              ...users,
              "Null",
            ]);
            console.log(err);
          });

        let id = res.data.posts[i].id;
        console.log("id:", id);
        await axios
          .get("http://127.0.0.1:5000/comments", { params: { postId: id } })
          .then((res2) => {
            console.log(res2.data.comments.length);
            console.log(res2.data);
            // arr.push([res2.data.comments.length])
            setNumComments((numComments) => [
              ...numComments,
              res2.data.comments.length,
            ]);
          })
          .catch((err) => {
            setNumComments((numComments) => [...numComments, 0]);
            console.log(err);
          });
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
    const res = await axios.get("http://127.0.0.1:5000/department", {
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
    const res = await axios.get("http://127.0.0.1:5000/department", {
      params: { id: departmentId },
    });
    setDepartment(res.data.departments.name);
    console.log(department);
  } catch (err) {
    console.log(err.message);
  }
};
// const getNumOfComment = async postId => {
//     try{
//         postId = parseInt(postId['id'])
//         const res = await axios.get("http://127.0.0.1:5000/comments", {params: {id: departmentId}});
//         setNumComments(res.data.comments.length);
//         console.log(numComments)
//     } catch (err) {
//         console.log(err.message);
//     }
// }
  return (
    <>
      <div>
        <div class="container my-2">
          <div class="jumbotron ">
            <div>
              <h1 class="display-4">Welcome to {department} Forums</h1>
              <br></br>
              <h3> {numPosts} Posts</h3>
              {/*<hr class="my-4"></hr>
                          <p>This is peer to peer forum for sharing knowledge with eacch other. No Spam / Advertising.
                              Do not post copyright-infringing material. ...
                              Do not post “offensive” posts, links or images. ...
                              Do not cross post questions. ...

                              Remain respectful of other members at all times. </p>*/}
            </div>
            {/*<Link to={`/AddPost/${departmentId['id']}`}>*/}
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
                <p>Asked by {users[index]} at {post.created_at}</p>
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
    </>
  );
}
export default TopicList;
