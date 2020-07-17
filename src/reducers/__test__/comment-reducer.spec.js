import commentReducer from '../comment-reducer';
import { COMMENTS_RESET, DELETE_POST_SUCCESS, COMMENT_POST_SUCCESS, COMMENTS_LOAD_ERROR, COMMENTS_RECEIVED } from '../../actions/comment-action';

const initialState = {
  loading: false,
  error: null,
  comments: []
}

describe('Comment reducer', () => {
  it('should update state on comments list received', () => {
    const comments = [{id:'1'}, {id:'2'}];

    const action = { type: COMMENTS_RECEIVED, payload:{comments} };
    const state = commentReducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
    expect(state.comments.length).toBe(2);
    
    expect(state).not.toEqual(initialState);
  });
  
  it('should update state on comments load error', () => {
    const error = {errorMessage:'comments load error'};
    const action = { type: COMMENTS_LOAD_ERROR, payload:error };
    const state = commentReducer(initialState, action);
    
    expect(state.loading).toBe(false);
    expect(state.error).toEqual(error.errorMessage);

    expect(state).not.toEqual(initialState);
  });
  
  it('should update state on comment posted successfully', () => {
    const comment = { id:'1' };
    const storeState = {
      ...initialState,
      comments:[{id:'2'},{id:'3'}]
    }
    const action = { type: COMMENT_POST_SUCCESS, payload:{comment} }
    const state = commentReducer(storeState, action);
    
    expect(state.comments.length).toBe(3);
    expect(state.comments[0].id).toBe(comment.id);

    expect(state).not.toEqual(storeState);
  });
  
  it('should update state on comment deleted successfully', () => {
    const deleteCommentId = '1';
    const storeState = {
      ...initialState,
      comments:[{id:deleteCommentId},{id:'2'}]
    }
    const action = { type: DELETE_POST_SUCCESS, payload:deleteCommentId }
    const state = commentReducer(storeState, action);
    
    expect(state.comments.length).toBe(1);
    expect(state.comments[0].id).not.toEqual(deleteCommentId);

    expect(state).not.toEqual(storeState);
  });
  
  it('should reset state on comments reset request', () => {
    const storeState = {
      ...initialState,
      comments:[{},{}]
    }
    const action = { type: COMMENTS_RESET }
    const state = commentReducer(storeState, action);
    expect(state).toEqual(initialState)

    expect(state).not.toEqual(storeState);
  });
  
  it('should not update state if non of the action type match', () => {
    const storeState = {
      ...initialState,
      comments:[{},{}]
    }
    const action = { type:'UNKNOWN_ACTION' }
    const state = commentReducer(storeState, action);
    expect(state).toEqual(storeState);
  });
})