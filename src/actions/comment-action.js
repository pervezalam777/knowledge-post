import { fetchComments, postCommentToServer, deleteCommentToServer, updateCommentToServer } from "../services/comment-service";

export const COMMENTS_LOADING = "COMMENTS_LOADING";
export const COMMENTS_LOAD_ERROR = 'COMMENTS_LOAD_ERROR';
export const COMMENTS_RECEIVED = 'COMMENTS_RECEIVED';
export const COMMENTS_RESET = 'COMMENTS_RESET';

export const COMMENT_POST_ERROR = 'COMMENT_POST_ERROR';
export const COMMENT_POST_SUCCESS = 'COMMENT_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const COMMENT_UPDATE_SUCCESS = 'COMMENT_UPDATE_SUCCESS';

const loading = () => ({type:COMMENTS_LOADING});
const loadError = (error) => ({type:COMMENTS_LOAD_ERROR, payload:error});
const commentsLoaded = (data) => ({type:COMMENTS_RECEIVED, payload:data});

const postError = (error) => ({type:COMMENT_POST_ERROR, payload:error})
const postSuccess = (data) => ({type:COMMENT_POST_SUCCESS, payload:data})
const postUpdateSuccess = (id) => ({type:COMMENT_UPDATE_SUCCESS, payload:id})
const deleteSuccess = (id) => ({type:DELETE_POST_SUCCESS, payload:id})

export const commentsReset = () => ({type:COMMENTS_RESET})

export const loadComments = (slug) => {
  return async (dispatch, getState) => {
    dispatch(loading())
    try {
      let token = getState().user.token;
      let response = await fetchComments(slug, token);
      dispatch(commentsLoaded(response))
    } catch (error) {
      dispatch(loadError(error))
    } 
  }
}

export const postComment = (slug, data) => {
  return async (dispatch, getState) => {
    try{
      let token = getState().user.token;
      let response = await postCommentToServer(slug, token, data);
      dispatch(postSuccess(response))
    } catch (error) {
      dispatch(postError(error))
    }
  }
}

export const deleteComment = (slug, id) => {
  return async (dispatch, getState) => {
    try{
      let token = getState().user.token;
      await deleteCommentToServer(slug, token, id);
      dispatch(deleteSuccess(id))
    } catch (error) {
      dispatch(postError(error))
    }
  }
}

export const updateComment = (slug, id, body) => {
  return async (dispatch, getState) => {
    try{
      let token = getState().user.token;
      let response = await updateCommentToServer(slug, token, id, body);
      dispatch(postUpdateSuccess(response))
    } catch (error) {
      dispatch(postError(error))
    }
  }
}