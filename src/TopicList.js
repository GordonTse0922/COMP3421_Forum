import "./App.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import "./TopicList.css";
import { Link } from "react-router-dom";

const departmentId = 1;

function TopicList ( ){
    useEffect(() => {
        getPosts(departmentId);
    }, []);

    useEffect(() => {
        getDepartment(departmentId);
    });

    const [posts, setPosts]= useState([]);
    const [department, setDepartment] = useState();
    const [numPosts, setNumPosts] = useState(0);
    const [numComments, setNumComments] = useState(0);

    /*componentDidMount() {
        axios.get("http://127.0.0.1:5000/posts/1")
            .then(res => {
                console.log(res);
                this.setState({ posts: res.data });
            })
    }*/
    const getPosts = async id => {
        try{
            const res = await axios.get('http://127.0.0.1:5000/posts', {params: {id: id}});
            setPosts(res.data.posts);
            setNumPosts(res.data.posts.length);
            console.log(res.data.posts)
        } catch (err) {
            console.log(err.message);
        }
    }

    const getDepartment = async id => {
        try{
            const res = await axios.get("http://127.0.0.1:5000/department", {params: {id: id}});
            setDepartment(res.data.departments.name);
            console.log(department)
        } catch (err) {
            console.log(err.message);
        }
    }

    const getNumOfComment = async id => {
        try{
            const res = await axios.get("http://127.0.0.1:5000/comments", {params: {id: id}});
            setNumComments(res.data.comments.length);
            console.log(numComments)
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
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
                    <Link to="/AddPost">
                        <button 
                            className="addtopic" 
                            data-toggle="modal"
                            data-target="#addpostModal"
                        >
                        + New Topic
                        </button>
                    </Link>
                </div>
            </div>
            <div class="container">
                {posts.map((post) => (
                    <div class="post">
                        <div class="stat">
                            <div class="value">
                                <strong>{numComments}</strong>
                                <br></br>
                                comments
                            </div>
                        </div>
                        <div class="summary">
                            <p>Asked at {post.created_at}</p>
                            <h3>{post.title}</h3>
                            <div class="details">
                                {post.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopicList;
