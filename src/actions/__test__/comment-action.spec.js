import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as CommentService from '../../services/comment-service';

import {
  loadComments,
  postComment,
  deleteComment,
  COMMENTS_LOADING,
  COMMENTS_RECEIVED,
  COMMENTS_LOAD_ERROR,
  POSTING_NEW_COMMENT,
  COMMENT_POST_SUCCESS,
  COMMENT_POST_ERROR,
  DELETING_COMMENT,
  DELETE_POST_SUCCESS,
} from '../comment-action';

jest.mock('../../services/comment-service');

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const slug = 'article_title_slug';
const storeState = {
  user: {token:'token_abc'}
}

let store = null

describe('Comment action', () => {

  beforeEach(()=>{
    store = mockStore(storeState);
  })

  it('should dispatch actions for loading comments successful for specified article', async () => {

    const spy = CommentService.fetchComments.mockReturnValue(Promise.resolve({}));
    spy.mockClear();

    await store.dispatch(loadComments(slug));

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(slug, storeState.user.token);

    const expectedActions = [
      {type:COMMENTS_LOADING},
      {type:COMMENTS_RECEIVED, payload:{}}
    ]
    const storeActions = store.getActions();
    expect(expectedActions).toEqual(storeActions);

  });

  it('should dispatch actions for loading comments unsuccessful for specified article', async () => {

    const spy = CommentService.fetchComments.mockReturnValue(Promise.reject({}));
    spy.mockClear();

    await store.dispatch(loadComments(slug));

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(slug, storeState.user.token);

    const expectedActions = [
      {type:COMMENTS_LOADING},
      {type:COMMENTS_LOAD_ERROR, payload:{}}
    ]
    const storeActions = store.getActions();
    expect(expectedActions).toEqual(storeActions);
  });

  it('should dispatch actions for posting new comments successful for specified article', async () => {
    const spy = CommentService.postCommentToServer.mockReturnValue(Promise.resolve({}));
    spy.mockClear();

    await store.dispatch(postComment(slug, {}));

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(slug, storeState.user.token, {});

    const expectedActions = [
      {type:POSTING_NEW_COMMENT},
      {type:COMMENT_POST_SUCCESS, payload:{}}
    ]
    const storeActions = store.getActions();
    expect(expectedActions).toEqual(storeActions);
  });

  it('should dispatch actions for posting new comments unsuccessful for specified article', async () => {
    const spy = CommentService.postCommentToServer.mockReturnValue(Promise.reject({}));
    spy.mockClear();

    await store.dispatch(postComment(slug, {}));

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(slug, storeState.user.token, {});

    const expectedActions = [
      {type:POSTING_NEW_COMMENT},
      {type:COMMENT_POST_ERROR, payload:{}}
    ]
    const storeActions = store.getActions();
    expect(expectedActions).toEqual(storeActions);
  });

  it('should dispatch actions for deleting comment successful for specified article', async () => {
    const commentId = 'comment_123'
    const spy = CommentService.deleteCommentToServer.mockReturnValue(Promise.resolve({}));
    spy.mockClear();

    await store.dispatch(deleteComment(slug, commentId));

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(slug, storeState.user.token, commentId);

    const expectedActions = [
      {type:DELETING_COMMENT},
      {type:DELETE_POST_SUCCESS, payload:commentId}
    ]
    const storeActions = store.getActions();
    expect(expectedActions).toEqual(storeActions);
  });
  it('should dispatch actions for deleting comment unsuccessful for specified article', async () => {
    const commentId = 'comment_123'
    const spy = CommentService.deleteCommentToServer.mockReturnValue(Promise.reject({}));
    spy.mockClear();

    await store.dispatch(deleteComment(slug, commentId));

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(slug, storeState.user.token, commentId);

    const expectedActions = [
      {type:DELETING_COMMENT},
      {type:COMMENT_POST_ERROR, payload:{}}
    ]
    const storeActions = store.getActions();
    expect(expectedActions).toEqual(storeActions);
  });
})