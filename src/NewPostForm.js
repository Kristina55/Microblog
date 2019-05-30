import React, { Component } from "react";
//import "./NewPostForm.css";
import { Redirect, withRouter } from "react-router-dom";

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      body: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNewPost(this.state);
    this.setState({ title: "", description: "", body: "" });
    return this.props.history.push("/");
  }

  cancel() {
    return this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h1>New Post</h1>
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
