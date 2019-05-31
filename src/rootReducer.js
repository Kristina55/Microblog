import { ADD_POST, ADD_COMMENT } from "./actionTypes";

const INITIAL_STATE = {
  posts: {}
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      const { id, ...rest } = action.payload;
      return {
        posts: { ...state.posts, [id]: rest }
      };
    case ADD_COMMENT:
      const { postId, ...commentObj } = action.payload;
      
      const newPost = { 
        ...state.posts[postId], 
        comments: [ ...state.posts[postId].comments, commentObj ] 
      };

      return { ...state, posts: {...state.posts, [postId]: newPost } };
    default:
      return state;
  }
}

export default rootReducer;
