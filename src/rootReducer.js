import { ADD_POST, ADD_COMMENT } from "./actionTypes";

const INITIAL_STATE = {
  posts: {}
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      const { id, ...rest } = action.payload;
      return {
        posts: { ...state.posts, [id]: { ...rest } }
      };
    case ADD_COMMENT:
      return console.log("ADD COMMENT");
    default:
      return state;
  }
}

export default rootReducer;
