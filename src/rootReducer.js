import { ADD_POST, ADD_COMMENT, EDIT_POST} from "./actionTypes";

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
      // Grab post id out of payload leaving the comment object:
      const { postId, ...commentObj } = action.payload;
      
      // Alyssa flexing her JS/Redux muscles:
      // Spread the post from state - then spread the comments
      // from the post we want to push to.
      // Note - not a "NEW" post here... It's really updating
      // an existing post.
      const newPost = { 
        ...state.posts[postId], 
        comments: [ ...state.posts[postId].comments, commentObj ] 
      };

      // Then update the state with the updated post:
      return { ...state, posts: {...state.posts, [postId]: newPost } };
    case EDIT_POST:
      // Grab id:
      let editId = action.payload.id;
      
      // remove relics from edit form (id, 'showForm')
      delete action.payload.id;
      delete action.payload.showForm;

      // Plug any comments we have for this post back into payload:
      action.payload.comments = state.posts[editId].comments;

      // Now return the updated state:
      return { ...state, posts: {...state.posts, [editId]: action.payload } };
    default:
      return state;
  }
}

export default rootReducer;
