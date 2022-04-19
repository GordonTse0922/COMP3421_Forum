import axios from "axios";
import React, {useState} from "react";
import { API_URL } from "./App";

function AddPost(departmentId) {
  const userId = sessionStorage.getItem('UserId');
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("title",title);
    console.log("content",content);
    if (sessionStorage.getItem('Login') === "true") {
      await axios
      .post(`${API_URL}/post`, {
        title: title,
        content: content,
        user_id: userId,
        department_id: departmentId["departmentId"],
        // confirm_password: this.state.confirmPassward,
      })
      .then((res) => {
        console.log(res.data);
        console.log("success")
      })
      .catch((err) => {
        console.log(err);
        console.log("fail")
      });

      window.location.reload(false);
    }
    else{
      alert("You need to login first")

      window.location.reload(false);
    }
  }

  return (
    <>
      <div
        class="modal fade"
        id="addpostModal"
        role="dialog"
        aria-labelledby="addpostModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addpostModalLabel">
                iDiscuss AddPost
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

            <form id="AddPostForm" onSubmit={handleSubmit}>
              <div class="modal-body">
                <div class="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    name="title"
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label>content</label>
                  <textarea
                    class="form-control"
                    id="content"
                    name="content"
                    rows="5"
                    form="AddPostForm"
                    onChange={(event) => setContent(event.target.value)}
                  />
                </div>
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
    </>
  );
}
export default AddPost;
