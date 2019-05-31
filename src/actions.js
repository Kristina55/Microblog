import { ADD_POST, ADD_COMMENT } from "./actionTypes";

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment
  };
}
