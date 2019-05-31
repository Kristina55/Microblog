import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.text}</h5>
      </div>
    )
  }
}
