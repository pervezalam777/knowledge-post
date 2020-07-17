import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as ArticleService from '../../services/article-service';

import {
  getArticle,
  publishArticle,
  deleteArticle,
  resetSuccess,
  RESET_SUCCESS,
  LOADING_ARTICLE,
  ARTICLE_RECEIVED,
  PUBLISHING_ARTICLE,
  ARTICLE_PUBLISHED,
  PUBLISH_ERROR,
  ARTICLE_DELETED,
  DELETING_IN_PROGRESS,
  DELETE_ERROR
} from '../article-action'

jest.mock('../../services/article-service');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Article ', () => {
  it('should dispatch reset success message', () => {
    const store = mockStore({});
    store.dispatch(resetSuccess());
    const action = store.getActions();
    expect(action).toEqual([{type:RESET_SUCCESS}]);
  })

  it('should dispatch action for fetching article based on slug', async () => {
    const storeState = { 
      articles: {
        countPerPage:10,
        requestedOffset:1
      }
    }
    const serverResponse= {
      article:{
        slug:'abcd_xyz',
        body:'some text'
      }
    }
    const store = mockStore(storeState);
    
    const spy = ArticleService.fetchArticleBySlug.mockReturnValue(Promise.resolve(serverResponse))

    await store.dispatch(getArticle(serverResponse.article.slug));

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(serverResponse.article.slug);

    const expectedActions = [
      {type:LOADING_ARTICLE},
      {type:ARTICLE_RECEIVED, payload:serverResponse}
    ]
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  });

  it('should dispatch actions if the article already loaded.', async () => {
    const slug = 'article_abcd';
    const storeState = { 
      articles: {
        countPerPage:10,
        requestedOffset:1,
        '10-1': [
          { slug: 'test', body:'not a match article'},
          { slug, body:'a match article'}
        ]
      }
    }

    const store = mockStore(storeState);

    const spy = ArticleService.fetchArticleBySlug.mockReturnValue(Promise.resolve({}))
    spy.mockClear();

    await store.dispatch(getArticle(slug));

    expect(spy).not.toHaveBeenCalled();
    
    const expectedActions = [
      {type:LOADING_ARTICLE},
      {type:ARTICLE_RECEIVED, payload:{article:storeState.articles['10-1'][1]}}
    ]
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  });

  it('should dispatch actions for publishing successful article', async () => {
    const articleData = {title:"test", body:"test body"};
    const storeState = {
      user:{token:'token_abc'}
    }
    const store = mockStore(storeState);
    const spy = ArticleService.publishToServer.mockReturnValue(Promise.resolve({}));
    spy.mockClear();

    await store.dispatch(publishArticle(articleData))
    
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(articleData, storeState.user.token);

    const expectedActions = [
      {type:PUBLISHING_ARTICLE},
      {type:ARTICLE_PUBLISHED, payload:{}}
    ]
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  });

  it('should dispatch actions for publishing unsuccessful article', async () => {
    const error = {errorMessage:'some error'};
    const storeState = {
      user:{token:'token_abc'}
    }
    const store = mockStore(storeState);
    const spy = ArticleService.publishToServer.mockReturnValue(Promise.reject(error));
    spy.mockClear();

    await store.dispatch(publishArticle({}))
    
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({}, storeState.user.token);

    const expectedActions = [
      {type:PUBLISHING_ARTICLE},
      {type:PUBLISH_ERROR, payload:error}
    ]
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);

  });

  it('should dispatch actions for updating successful article', async() => {
    const slug = 'slug_abc'
    const articleData = {title:"test", body:"test body"};
    const storeState = {
      user:{token:'token_abc'}
    }
    const store = mockStore(storeState);
    const spy = ArticleService.updateToServer.mockReturnValue(Promise.resolve({}));
    spy.mockClear();
    
    await store.dispatch(publishArticle(articleData, slug))

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(articleData, storeState.user.token, slug);

    const expectedActions = [
      {type:PUBLISHING_ARTICLE},
      {type:ARTICLE_PUBLISHED, payload:{}}
    ]
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  });

  it('should dispatch actions for updating unsuccessful article', async () => {
    const slug = 'slug_abc'
    const error = {errorMessage:'some error'};
    const storeState = {
      user:{token:'token_abc'}
    }
    const store = mockStore(storeState);
    const spy = ArticleService.updateToServer.mockReturnValue(Promise.reject(error));
    spy.mockClear();

    await store.dispatch(publishArticle({}, slug))
    
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({}, storeState.user.token, slug);

    const expectedActions = [
      {type:PUBLISHING_ARTICLE},
      {type:PUBLISH_ERROR, payload:error}
    ]
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  });

  it('should dispatch actions for successful article deletion', async () => {
    const slug = 'slug_abc'
    const storeState = {
      user:{token:'token_abc'}
    }
    const store = mockStore(storeState);
    const spy = ArticleService.deleteArticleOnServer.mockReturnValue(Promise.resolve({}));
    spy.mockClear();

    await store.dispatch(deleteArticle(slug));

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(slug, storeState.user.token);

    const expectedActions = [
      {type:DELETING_IN_PROGRESS},
      {type:ARTICLE_DELETED}
    ]
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  });

  it('should dispatch actions for unsuccessful article deletion', async () => {
    const slug = 'slug_abc'
    const storeState = {
      user:{token:'token_abc'}
    }
    const store = mockStore(storeState);
    const spy = ArticleService.deleteArticleOnServer.mockReturnValue(Promise.reject({}));
    spy.mockClear();

    await store.dispatch(deleteArticle(slug));

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(slug, storeState.user.token);

    const expectedActions = [
      {type:DELETING_IN_PROGRESS},
      {type:DELETE_ERROR, payload:{}}
    ]
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  });
})