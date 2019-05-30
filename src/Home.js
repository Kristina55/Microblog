import React, { Component } from "react";
import Post from "./Post";
import "./Home.css";

class Home extends Component {
  render() {
    const post = this.props.posts.map(post => (
      <li className="liStyle" key={post.id}>
        <Post
          title={post.title}
          description={post.description}
          body={post.body}
          id={post.id}
        />
      </li>
    ));
    return <div>{post}</div>;
  }
}

export default Home;
