import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import uuid from "uuid/v4";

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    let { post } = props;

    // Funky kluge to populate form when doing an edit on a post:
    if (post) {
      this.state = {
        title: post.title,
        description: post.description,
        body: post.body,
        id: post.id,
        showForm: false
      };
    } else {
      this.state = {
        title: "",
        description: "",
        body: "",
        id: ""
      };
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    this.setState({ showForm: true });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.edit) {
      this.props.editPost(this.state);
      this.setState({ title: "", description: "", body: "" });
      return this.props.history.push("/" + this.props.post.id);
    } else {
      this.props.addPost({ ...this.state, id: uuid(), comments: [] });
      this.setState({ title: "", description: "", body: "" });
      return this.props.history.push("/");
    }
  }

  cancel() {
    return this.props.history.push("/");
  }

  render() {
    let title = "New Post";

    if (this.props.edit) {
      title = "Edit Post";
    }

    return (
      <div>
        <h1>{title}</h1>
        <form>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <input
              type="textarea"
              name="body"
              id="body"
              onChange={this.handleChange}
              value={this.state.body}
            />
          </div>
          <button onClick={this.handleSubmit}>Save</button>
          <button onClick={this.cancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default withRouter(NewPostForm);
