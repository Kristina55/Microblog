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
              <HomeContainer {...props} />
            )}
          />
          <Route
            exact
            path="/new"
            render={props => (
              <PostListContainer
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/:postId"
            render={props => (
              <PostViewContainer
                {...props}
                deletePost={this.props.deletePost}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
