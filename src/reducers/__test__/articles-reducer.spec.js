import articlesReducer from '../articles-reducer';
import { UPDATE_REQUESTED_OFFSET, UPDATE_OFFSET, ARTICLES_RECEIVED } from '../../actions/articles-action';
import { ARTICLE_PUBLISHED, ARTICLE_DELETED } from '../../actions/article-action';

const initialState = {
  offset: 0,
  requestedOffset: 0,
  countPerPage: 10,
  total: 0
}

describe('Articles reducer', () => {
  it('should update state on next page request to server', () => {
    const pageOffset = 3;
    const action = {type:UPDATE_REQUESTED_OFFSET, payload:pageOffset};
    const state = articlesReducer(initialState, action);

    expect(state.requestedOffset).toBe(pageOffset)

    expect(initialState).not.toEqual(state);
  });

  it('should update state on page changed', () => {
    const pageOffset = 5;
    const action = {type:UPDATE_OFFSET, payload:pageOffset};
    const state = articlesReducer(initialState, action);

    expect(state.offset).toBe(pageOffset);

    expect(initialState).not.toEqual(state);
  });
  
  it('should update state on articles received for a page', () => {
    const payload = {
      data: {
        articles:[{}], 
        articlesCount:300
      },
      requestedOffset:2,
      countPerPage:10
    }
    const action = {
      type:ARTICLES_RECEIVED, 
      payload
    };
    const state = articlesReducer(initialState, action);
    const pageKey = `${payload.countPerPage}-${payload.requestedOffset}`
    expect(state.total).toBe(payload.data.articlesCount);
    expect(state.offset).toBe(payload.requestedOffset);
    expect(state[pageKey]).toEqual(payload.data.articles);

    expect(initialState).not.toEqual(state);
  });
  
  it('should reset to initial state on new article published', () => {
    const storeState = {
      ...initialState,
      '10-0':[{},{}],
      '10-1':[{},{}],
      offset: 1,
      requestedOffset: 1,
      total:300
    }
    const action = {type:ARTICLE_PUBLISHED};
    const state = articlesReducer(storeState, action);
    expect(state).toEqual(initialState);

    expect(storeState).not.toEqual(state);
  });
  
  it('should reset to initial state on an article deleted', () => {
    const storeState = {
      ...initialState,
      '10-0':[{},{}],
      '10-1':[{},{}],
      offset: 1,
      requestedOffset: 1,
      total:300
    }
    const action = {type:ARTICLE_DELETED};
    const state = articlesReducer(storeState, action)
    expect(state).toEqual(initialState)

    expect(storeState).not.toEqual(state);
  });
  
  it('should not update state if non of the action type match', () => {
    const storeState = {
      ...initialState,
      '10-0':[{},{}],
      '10-1':[{},{}],
      offset: 1,
      requestedOffset: 1,
      total:300
    }
    const action = {type:'UNKNOWN_ACTION'};
    const state = articlesReducer(storeState, action)
    expect(state).toEqual(storeState);
  });
})