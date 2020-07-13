import {
  COMMENTS_RECEIVED,
  COMMENTS_LOAD_ERROR,
  COMMENTS_RESET,
  COMMENT_POST_SUCCESS,
  DELETE_POST_SUCCESS
} from '../actions/comment-action';

const initialState = {
  loading: false,
  error: null,
  comments: []
}

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_RECEIVED:
      return {
        ...state,
        comments: action.payload.comments,
        loading: false,
        error: null,
      }
    case COMMENTS_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.errorMessage,
      }
    case COMMENT_POST_SUCCESS:
      {
        let cloneState = { ...state };
        cloneState.comments = [
          action.payload.comment,
          ...cloneState.comments
        ];
        return cloneState;
      }
    case DELETE_POST_SUCCESS:
      let cloneState = { ...state };
      cloneState.comments
        = cloneState.comments.filter(c => c.id !== action.payload)
      return cloneState;
    case COMMENTS_RESET:
      return {
        ...initialState
      }
    default:
      return state;
  }
}

export default commentReducer;
