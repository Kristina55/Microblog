import React, { Component } from "react";
import NewPostForm from "../components/NewPostForm";
//import Post from "./Post";
import uuid from "uuid/v4";
import { addPost } from "../actions";
import { connect } from "react-redux";

class PostListContainer extends Component {
  render() {
    return (
      <div>
        <NewPostForm
          key={uuid()}
          addNewPost={this.props.addNewPost}
          showForm={this.showForm}
          {...this.props}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { addPost }
);

export default connectedComponent(PostListContainer);
