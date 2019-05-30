import React, { Component } from "react";
import NewPostForm from "./NewPostForm";
//import Post from "./Post";
import uuid from "uuid/v4";

class PostList extends Component {
  render() {
    return (
      <div>
        <NewPostForm
          key={uuid()}
          addNewPost={this.props.addNewPost}
          showForm={this.showForm}
        />
      </div>
    );
  }
}

export default PostList;
