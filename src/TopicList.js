import "./App.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import "./TopicList.css";

function TopicList (){
    useEffect(() => {
        getPosts();
        getComments();
    }, []);

    const [posts, setPosts]= useState([]);
    const [numComments, setNumComments] = useState(0);

    /*componentDidMount() {
        axios.get("http://127.0.0.1:5000/posts/1")
            .then(res => {
                console.log(res);
                this.setState({ posts: res.data });
            })
    }*/
    const getPosts = async () => {
        try{
            const res = await axios.get("http://127.0.0.1:5000/posts/1");
            setPosts(res.data.posts);
            console.log(res.data.posts)
        } catch (err) {
            console.log(err.message);
        }
    }

    const getComments = async () => {
        try{
            const res = await axios.get("http://127.0.0.1:5000/comments/1");
            setNumComments(res.data.comments.length);
            console.log(res.data.comments.length)
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div>
            <div class="container my-2">
                <div class="jumbotron ">
                    <h1 class="display-4">Welcome to *Department* Forums</h1>
                    <p class="lead"> *descrip* </p>
                    {/*<hr class="my-4"></hr>
                    <p>This is peer to peer forum for sharing knowledge with eacch other. No Spam / Advertising.
                        Do not post copyright-infringing material. ...
                        Do not post “offensive” posts, links or images. ...
                        Do not cross post questions. ...

                        Remain respectful of other members at all times. </p>*/}
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
