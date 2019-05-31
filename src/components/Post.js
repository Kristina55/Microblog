import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  render() {
    return (
      <div>
        <Link to={"/" + this.props.id}>
          <h1>{this.props.title}</h1>
        </Link>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Post;
