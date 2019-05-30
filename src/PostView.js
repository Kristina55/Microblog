import React, { Component } from 'react'
import NewPostForm from './NewPostForm';

export default class PostView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showForm: false
    };

    this.showEditForm = this.showEditForm.bind(this);
    this.deletePost = this.deletePost.bind(this);
  };

  showEditForm() {
    this.setState({ showForm: true });
  }

  deletePost() {
    this.props.deletePost(this.props.posts[0].id);
    return this.props.history.push("/");
  }

  render() {
    let post = this.props.posts.find(p => p.id === this.props.match.params.postId);

    let form = this.state.showForm ? <NewPostForm edit={true} post={post} editPost={this.props.editPost} /> : '';
    return (
      <div>
        {form}
        <h1>Post View</h1>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <p>{post.body}</p>
        <button onClick={this.showEditForm}>Edit</button>
        <button onClick={this.deletePost}>Delete</button>
      </div>
    )
  }
}
