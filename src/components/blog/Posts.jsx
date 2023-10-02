// import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home">
      <div className="container">
        <Link to="/blog/this-is-a-post-title">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="https://images.pexels.com/photos/3703429/pexels-photo-3703429.jpeg?auto=compress&cs=tinysrgb&w=800/900x400"
                alt="Postbox"
              />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">This is a post title</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;