import axios from "axios";
import * as React from "react";


class AddPost extends React.Component {
  constructor() {
    super();
    // Set initial state
    this.state = {
      title: "",
      content: "",

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("title",this.state.title);
    console.log("content",this.state.content);

    axios
      .post("http://127.0.0.1:5000/post", {
        title: this.state.title,
        content: this.state.content,
        // confirm_password: this.state.confirmPassward,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
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

              <form id="AddPostForm" onSubmit={this.handleSubmit}>
                <div class="modal-body">
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      name="title"
                      onChange={(event) =>
                        this.setState({ title: event.target.value })
                      }
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
                      onChange={(event) =>
                        this.setState({ content: event.target.value })
                      }
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
}
export default AddPost;
