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

    // this.addNewPost = this.addNewPost.bind(this);
    // this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    //this.addComment = this.addComment.bind(this);
  }

  // addNewPost(post) {
  //   let newPost = { ...post, id: uuid(), comments: [] };
  //   this.setState(st => ({
  //     posts: [...st.posts, newPost]
  //   }));
  // }

  // editPost(post) {
  //   let currentPosts = this.state.posts;

  //   // Loop through our posts and update the post with post.id
  //   for (let p of currentPosts) {
  //     if (p.id === post.id) {
  //       p.title = post.title;
  //       p.description = post.description;
  //       p.body = post.body;
  //     }
  //   }
  // }

  deletePost(id) {
    this.setState({
      posts: this.state.posts.filter(p => p.id !== id)
    });
  }

  // addComment(comment) {
  //   const postId = comment.id;
  //   const commentText = comment.comment;
  //   const commentId = uuid();
  //   const commentObj = { id: commentId, commentText: commentText };
  //   let post = this.state.posts.find(p => p.id === postId);
  //   post.comments.push(commentObj);
  // }

  render() {
    return (
      <div className="App">
        <NavBox />
        <Routes
          deletePost={this.deletePost}
        />
      </div>
    );
  }
}
export default App;
