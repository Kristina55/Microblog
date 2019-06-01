import React, { Component } from "react";
import NewPostForm from "../components/NewPostForm";
import CommentList from "../CommentList";
import { connect } from "react-redux";
import uuid from "uuid/v4";
import { addComment, editPost } from "../actions";

class PostViewContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
      showForm: false
    };

    this.showEditForm = this.showEditForm.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  showEditForm() {
    this.setState({ showForm: true });
  }

  deletePost() {
    this.props.deletePost(this.props.posts[0].id);
    return this.props.history.push("/");
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addComment(e) {
    e.preventDefault();
    const id = this.props.match.params.postId;

    // Create a simple comment obj to pass to action:
    let commentObj = {
      postId: id,
      commentId: uuid(),
      commentText: this.state.comment
    }

    // Call the action to add the comment:
    this.props.addComment(commentObj);

    // Need to "re-render" this componet:
    return this.props.history.push(`/${id}`);
  }

  render() {
    let post = this.props.posts[this.props.match.params.postId];

    let form = this.state.showForm ? (
      <NewPostForm edit={true} post={post} editPost={this.props.editPost} />
    ) : (
        ""
      );
    return (
      <div>
        {form}
        <h1>Post View</h1>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <p>{post.body}</p>
        <button onClick={this.showEditForm}>Edit</button>
        <button onClick={this.deletePost}>Delete</button>
        <hr />
        <form onSubmit={this.addComment}>
          <input
            type="text"
            name="comment"
            placeholder="comment"
            onChange={this.handleChange}
          />
          <button type="submit">Add Comment</button>
        </form>
        <CommentList comments={post.comments} />
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
  { addComment, editPost }
);

export default connectedComponent(PostViewContainer);
