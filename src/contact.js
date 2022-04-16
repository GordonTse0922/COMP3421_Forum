import axios from "axios";
import * as React from "react";

class ContantUs extends React.Component {  
    constructor() {
        super();
        // Set initial state
        this.state = {
            name: "",
            email: "",
            feedback: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("name",this.state.name);
        console.log("email",this.state.email);
        console.log("feedback",this.state.feedback);
    
        axios
          .post("http://127.0.0.1:5000/contact", {
            name: this.state.name,
            email: this.state.email,
            feedback: this.state.feedback
          })
          .then((res) => {
            console.log(res.data);
            console.log("sucessful")
          })
          .catch((err) => {
            console.log(err);
            console.log("fail")
          });
    }

    render(){
        return (
            <div class="container">
                <h2 class="text-center">CONTACT</h2>
                <div class="row mt-5">
                    <div class="col">
                        <form onSubmit={this.handleSubmit}>
                            <div class="row">
                                <div class="col-sm-6 form-group">
                                    <input class="form-control" id="name" name="name" placeholder="Name" type="text" 
                                        onChange={(event) =>
                                            this.setState({ name: event.target.value })
                                        }
                                        required>
                                    </input>
                                </div>
                                <div class="col-sm-6 form-group">
                                    <input class="form-control" id="email" name="email" placeholder="Email" type="email" 
                                        onChange={(event) =>
                                            this.setState({ email: event.target.value })
                                        }
                                        required>
                                        </input>
                                </div>
                            </div>
                                <textarea class="form-control" id="feedback" name="feedback" placeholder="Feedback" rows="10"
                                    onChange={(event) =>
                                        this.setState({ feedback: event.target.value })
                                    }>
                                </textarea><br></br>
                            <div class="row">
                                <div class="col-sm-12 form-group">
                                    <button class="btn btn-primary pull-right" type="submit">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          );
        };
    }


export default ContantUs;