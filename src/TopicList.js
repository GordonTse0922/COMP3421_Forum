import "./App.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import "./TopicList.css";
import { Link, useParams} from "react-router-dom";
import Home from "./Home";

//const departmentId = 1;

function TopicList (){
    //const { departmentId } = useParams();

    const departmentId = useParams();
    const [posts, setPosts]= useState([]);
    const [department, setDepartment] = useState(0);
    const [numPosts, setNumPosts] = useState(0);
    const [numComments, setNumComments] = useState(0);

    useEffect(() => {
        getDepartment(departmentId);
        getPosts(departmentId);
    },[]);
    // useEffect(()=>getPosts(departmentId)
    // .then(response=>{
    //     console.log(response.data.posts);
    // }),[])

    // useEffect(() => {
    // }, numPosts);

    const getPosts = async departmentId => {
        try{
            departmentId = parseInt(departmentId['id'])
            const res = await axios.get('http://127.0.0.1:5000/posts', {params: {id: departmentId}});
            setNumPosts(res.data.posts.length);
            setPosts(res.data.posts);
            console.log(res.data.posts);
            return res;
        } catch (err) {
            console.log(err.message);
        }
    }

    const getDepartment = async departmentId => {
        try{
            departmentId = parseInt(departmentId['id'])
            const res = await axios.get("http://127.0.0.1:5000/department", {params: {id: departmentId}});
            setDepartment(res.data.departments.name);
            console.log(department)
        } catch (err) {
            console.log(err.message);
        }
    }

    const getNumOfComment = async departmentId => {
        try{
            departmentId = parseInt(departmentId['id'])
            const res = await axios.get("http://127.0.0.1:5000/comments", {params: {id: departmentId}});
            setNumComments(res.data.comments.length);
            console.log(numComments)
        } catch (err) {
            console.log(err.message);
        }
    }

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
                    <Link to={`/AddPost/${departmentId['id']}`}>
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
                            <p>Asked by at {post.created_at}</p>
                            <Link to={`/Discussion/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                <h3>{post.title}</h3>
                            </Link>
                            <div class="details">
                                {post.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div></>
    );
}

export default TopicList;
