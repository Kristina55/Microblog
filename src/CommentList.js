import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
  render() {
    const comments = this.props.comments.map(c => <Comment id={c.id} text={c.commentText} />)
    return (
      <div>
        {comments}
      </div>
    )
  }
}
