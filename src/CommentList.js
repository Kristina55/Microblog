import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
  render() {
    const comments = this.props.comments.map(c => <div key={c.commentId}><Comment id={c.commentId} text={c.commentText} /></div>)
    return (
      <div>
        {comments}
      </div>
    )
  }
}
