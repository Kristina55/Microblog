import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import Home from "./Home";
import PostView from "./PostView";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
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
          <Route
            exact
            path="/:postId"
            render={props => (
              <PostView 
                {...props} 
                posts={this.props.posts} 
                editPost={this.props.editPost} 
                deletePost={this.props.deletePost}
                addComment={this.props.addComment}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
