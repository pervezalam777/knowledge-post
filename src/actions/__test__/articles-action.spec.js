import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as ArticlesService from '../../services/articles-service';

import {
  updateRequestedOffset,
  getArticles,
  UPDATE_REQUESTED_OFFSET,
  LOADING_ARTICLES,
  ARTICLES_RECEIVED,
  UPDATE_OFFSET,

} from '../articles-action'

jest.mock('../../services/articles-service');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Articles ', ()=>{
  it('should dispatch update requested offset value', () => {
    const action = updateRequestedOffset(10);
    expect(action).toEqual({type:UPDATE_REQUESTED_OFFSET, payload:10});
  });

  it('should dispatch actions for fetching articles based on offset value', async () => {
    const serverResponse = {articles:[{}]}
    const storeState = { 
      articles: {
        countPerPage:10,
        requestedOffset:1
      } 
    }
    const spy = ArticlesService.fetchArticles.mockReturnValue(Promise.resolve(serverResponse));
    const store = mockStore(storeState)

    await store.dispatch(getArticles());

    const expectedActions = [
      { type: LOADING_ARTICLES },
      { type: ARTICLES_RECEIVED, 
        payload: {
          data:serverResponse, 
          requestedOffset:storeState.articles.requestedOffset, 
          countPerPage:storeState.articles.countPerPage
        }
      }
    ]

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(storeState.articles.countPerPage, storeState.articles.requestedOffset);

    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  })

  it('should dispatch actions for cached articles based on offset value', async () => {
    const storeState = { 
      articles: {
        countPerPage:10,
        requestedOffset:1,
        "10-1": []
      } 
    }

    const store = mockStore(storeState)

    await store.dispatch(getArticles());

    const expectedActions = [
      { type: LOADING_ARTICLES },
      { type: UPDATE_OFFSET, payload: storeState.articles.requestedOffset }
    ]

    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  })
})