import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PostListContainer from "./containers/PostListContainer";
import HomeContainer from "./containers/HomeContainer";
import PostViewContainer from "./containers/PostViewContainer";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <HomeContainer {...props} posts={this.props.posts} />
            )}
          />
          <Route
            exact
            path="/new"
            render={props => (
              <PostListContainer
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
              <PostViewContainer
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
