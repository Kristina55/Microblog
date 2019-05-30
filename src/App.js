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
  }

  addNewPost(post) {
    let newPost = { ...post, id: uuid() };
    this.setState(st => ({
      posts: [...st.posts, newPost]
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBox />
          <Routes addNewPost={this.addNewPost} posts={this.state.posts} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
