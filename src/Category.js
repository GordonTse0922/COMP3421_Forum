import "./App.css";
import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./App";

class Category extends React.Component {
  constructor() {
    super();
    // Set initial state
    this.state = {
      departments: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.clickTopic = this.clickTopic.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${API_URL}/departments`)
      .then((res) => {
        console.log(res.data);
        this.setState({ departments: res.data.departments });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  clickTopic(){
    // event.preventDefault();

    this.props.parentCallback(true);
  }

  render() {
    const departments = this.state.departments
    return (
      <>
        <div class="container my-3">
          <h2 class="text-center"> PolyDiscuss- Browse Categories </h2>

          <div class="row">
            {this.state.departments.map((department) => (
              <div class="col-md-4 my-2 ">
                <div class="card h-100" style={{ width: '18rem', margin:'auto' }}>
                  <img src={'images/' + department.name + '.jpg'} class="card-img-top cat-img" alt="AMA" />
                  <div class="card-body">
                    <Link to={`/TopicList/${department.id}`} onClick={()=> this.clickTopic()}>
                        <h5 class="card-title">
                            {department.name}
                        </h5>
                    </Link>
                    <p class="card-text text-justify">
                      {department.description}
                    </p>
                    <Link to={`/TopicList/${department.id}`} class="btn btn-primary" onClick={()=> this.clickTopic()}>
                        <h5 class="card-title">
                            View Discussion
                        </h5>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Category;

