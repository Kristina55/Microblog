import { ADD_POST, ADD_COMMENT, EDIT_POST } from "./actionTypes";

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

export function editPost(post) {
  return {
    type: EDIT_POST,
    payload: post
  };
}
