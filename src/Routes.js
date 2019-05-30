import React, { Component } from "react";
import { Route } from "react-router-dom";
import PostList from "./PostList";
import Home from "./Home";

class Routes extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={props => <Home {...props} posts={this.props.posts} />}
        />
        <Route
          exact
          path="/new"
          render={props => (
            <PostList
              {...props}
              addNewPost={this.props.addNewPost}
              posts={this.props.posts}
            />
          )}
        />
      </div>
    );
  }
}

export default Routes;
