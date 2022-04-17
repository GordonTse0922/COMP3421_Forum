import "./App.css";
import * as React from "react";

class Category extends React.Component {
  
  render() {
    return (
      <>
        <div class="container my-3">
          <h2 class="text-center"> iDiscuss- Browse Categories </h2>

          <div class="row">
            <div class="col-md-4 my-2 ">
              <div class="card h-100" style={{ width: '18rem', margin:'auto' }}>
                <img src="images/AMA.jpg" class="card-img-top cat-img" alt="AMA" />
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">AMA</a>
                  </h5>
                  <p class="card-text text-justify">
                    Department of Applied Mathematics
                  </p>
                  <a href="" class="btn btn-primary">
                    View Discussion
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 my-2 ">
              <div class="card h-100" style={{ width: '18rem', margin:'auto' }}>
                <img src="images/ITC.jpg" class="card-img-top cat-img" alt="ITC" />
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">ITC</a>
                  </h5>
                  <p class="card-text text-justify">
                    Institute of Textiles and Clothing
                  </p>
                  <a href="" class="btn btn-primary">
                    View Discussion
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 my-2 ">
              <div class="card h-100" style={{ width: '18rem', margin:'auto' }}>
                <img src="images/CEE.jpg" class="card-img-top cat-img" alt="CEE" />
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">CEE</a>
                  </h5>
                  <p class="card-text text-justify">
                    Department of Civil and Environmental Engineering
                  </p>
                  <a href="" class="btn btn-primary">
                    View Discussion
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 my-2 ">
              <div class="card h-100" style={{ width: '18rem', margin:'auto' }}>
                <img src="images/COMP.jpg" class="card-img-top cat-img" alt="COMP" />
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">COMP</a>
                  </h5>
                  <p class="card-text text-justify">
                    Department of Computing
                  </p>
                  <a href="" class="btn btn-primary">
                    View Discussion
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 my-2 ">
              <div class="card h-100" style={{ width: '18rem', margin:'auto' }}>
                <img src="images/MM.jpg" class="card-img-top cat-img" alt="MM" />
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">MM</a>
                  </h5>
                  <p class="card-text text-justify">
                    Department of Management and Marketing
                  </p>
                  <a href="" class="btn btn-primary">
                    View Discussion
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 my-2 ">
              <div class="card h-100" style={{ width: '18rem', margin:'auto' }}>
                <img src="images/EE.jpg" class="card-img-top cat-img" alt="EE" />
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">EE</a>
                  </h5>
                  <p class="card-text text-justify">
                    Department of Electrical Engineering
                  </p>
                  <a href="" class="btn btn-primary">
                    View Discussion
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Category;