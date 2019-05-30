import React, { Component } from "react";
import "./App.css";
import NavBox from "./NavBox";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import uuid from "uuid/v4";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.addNewPost = this.addNewPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  addNewPost(post) {
    let newPost = { ...post, id: uuid() };
    this.setState(st => ({
      posts: [...st.posts, newPost]
    }));
  }

  editPost(post) {
    let currentPosts = this.state.posts;

    // Loop through our posts and update the post with post.id
    for (let p of currentPosts) {
      if (p.id === post.id) {
        p.title = post.title;
        p.description = post.description;
        p.body = post.body;
      }
    }
  }

  deletePost(id) {
    this.setState({
      posts: this.state.posts.filter(p => p.id !== id)
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBox />
          <Routes 
            addNewPost={this.addNewPost} 
            posts={this.state.posts} 
            editPost={this.editPost} 
            deletePost={this.deletePost} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
