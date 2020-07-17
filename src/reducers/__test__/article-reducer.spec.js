import articleReducer from '../article-reducer';
import { PUBLISHING_ARTICLE, PUBLISH_ERROR, ARTICLE_NOT_FOUND, DELETE_ERROR, ARTICLE_RECEIVED, ARTICLE_PUBLISHED, ARTICLE_DELETED, RESET_SUCCESS } from '../../actions/article-action';

const initialSate = {
  success:false,
  loading:false,
  error:null,
}

describe('Article reducer', () => {
  it('should update state on article publishing', () => {
    const action = {type:PUBLISHING_ARTICLE};
    const state  = articleReducer(initialSate, action);
    expect(state.loading).toBe(true);
    expect(state.success).toBe(false);
    expect(state.error).toBe(null);

    expect(initialSate).not.toEqual(state);
  });
  
  it('should update state with error message on publish error', () => {
    const storeState = {
      ...initialSate,
      loading:true,
      success:true
    }
    const action = {type:PUBLISH_ERROR, payload:{errorMessage:'publish error'}};
    const state  = articleReducer(storeState, action);
    expect(state.loading).toBe(false);
    expect(state.success).toBe(false);
    expect(state.error).toBe(action.payload.errorMessage);

    expect(storeState).not.toEqual(state);
  });
  
  it('should update state with error message on article not found error', () => {
    const storeState = {
      ...initialSate,
      loading:true,
      success:true
    }
    const action = {type:ARTICLE_NOT_FOUND, payload:{errorMessage:'article not found'}};
    const state  = articleReducer(storeState, action);
    expect(state.loading).toBe(false);
    expect(state.success).toBe(false);
    expect(state.error).toBe(action.payload.errorMessage);

    expect(storeState).not.toEqual(state);
  });
  
  it('should update state with error message on article delete error', () => {
    const storeState = {
      ...initialSate,
      loading:true,
      success:true
    }
    const action = {type:DELETE_ERROR, payload:{errorMessage:'article delete error'}};
    const state  = articleReducer(storeState, action);
    expect(state.loading).toBe(false);
    expect(state.success).toBe(false);
    expect(state.error).toBe(action.payload.errorMessage);

    expect(storeState).not.toEqual(state);
  });
  
  it('should update state on receiving article from server', () => {
    const payload = {
      article:{
        title:'Blog',
        body:'Blog body'
      }
    }

    const action = {type:ARTICLE_RECEIVED, payload};
    const state  = articleReducer(initialSate, action);
    expect(state.loading).toBe(false);
    expect(state.success).toBe(true);
    expect(state.error).toBe(null);
    expect(state.title).toBe(payload.article.title);
    expect(state.body).toBe(payload.article.body);

    expect(initialSate).not.toEqual(state);
  });
  
  it('should update state on article published', () => {
    const payload = {
      article:{
        title:'Blog',
        body:'Blog body'
      }
    }

    const action = {type:ARTICLE_PUBLISHED, payload};
    const state  = articleReducer(initialSate, action);
    expect(state.loading).toBe(false);
    expect(state.success).toBe(true);
    expect(state.error).toBe(null);
    expect(state.title).toBe(payload.article.title);
    expect(state.body).toBe(payload.article.body);

    expect(initialSate).not.toEqual(state);
  });
  
  it('should reset initial state and set success true on article deletion', () => {
    const storeState = {
      ...initialSate,
      title:'Blog',
      body:'Blog body'
    }

    const action = {type:ARTICLE_DELETED};
    const state  = articleReducer(storeState, action);
    expect(state.loading).toBe(false);
    expect(state.success).toBe(true);
    expect(state.error).toBe(null);
    expect(state.title).toBe(undefined);
    expect(state.body).toBe(undefined);

    expect(storeState).not.toEqual(state);
  });
  
  it('should update success status to false', () => {
    const storeState = {
      ...initialSate,
      success:true
    }
    const action = {type:RESET_SUCCESS}
    const state = articleReducer(storeState, action)
    expect(state.success).toBe(false);

    expect(storeState).not.toEqual(state);
  });
  
  it('should not update state if non of the action type match', () => {
    const storeState = {
      ...initialSate,
      success:true
    }
    const action = {type:"UNKNOWN_ACTION"}
    const state = articleReducer(storeState, action)

    expect(storeState).toEqual(state);
  });
})
