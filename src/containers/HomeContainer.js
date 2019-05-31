import React, { Component } from "react";
import Post from "../components/Post";
import { connect } from "react-redux";

class HomeContainer extends Component {
  render() {
    let post = [];
    for (let [id, object] of Object.entries(this.props.posts)) {
      post.push(
        <li className="liStyle" key={id}>
          <Post
            title={object.title}
            description={object.description}
            body={object.body}
            id={id}
            {...this.props}
          />
        </li>
      );
    }
    return <div>{post}</div>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(HomeContainer);
