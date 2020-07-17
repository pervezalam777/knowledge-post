import { 
  publishToServer, 
  fetchArticleBySlug, 
  updateToServer, 
  deleteArticleOnServer 
} from '../services/article-service';


export const PUBLISHING_ARTICLE = 'PUBLISHING_ARTICLE';
export const PUBLISH_ERROR = 'PUBLISH_ERROR';
export const ARTICLE_PUBLISHED = 'PUBLISHED';
export const LOADING_ARTICLE = 'LOADING_ARTICLE';
export const ARTICLE_RECEIVED = 'ARTICLE_RECEIVED';
export const ARTICLE_NOT_FOUND = 'ARTICLE_NOT_FOUND';
export const RESET_SUCCESS = 'RESET_SUCCESS';
export const ARTICLE_DELETED = 'ARTICLE_DELETED';
export const DELETE_ERROR = 'DELETE_ERROR';
export const DELETING_IN_PROGRESS = 'DELETING_IN_PROGRESS';

const publishingArticle = () => ({type:PUBLISHING_ARTICLE});
const publishError = err => ({type:PUBLISH_ERROR, payload:err});
const publishSuccess = data => ({type:ARTICLE_PUBLISHED, payload:data});
const loadingArticle = () => ({type:LOADING_ARTICLE})
const articleLoaded = (data) => ({type:ARTICLE_RECEIVED, payload:data})
const articleNotFound = (err) => ({type:ARTICLE_NOT_FOUND, payload:err})
const articleDeleted = () => ({type:ARTICLE_DELETED})
const deleteError = (err) => ({type:DELETE_ERROR, payload:err})
const deletingInProgress = () => ({type:DELETING_IN_PROGRESS})

export const resetSuccess = () => ({type:RESET_SUCCESS})

export const publishArticle = (data, slug) => {
  return async (dispatch, getState) => {
    dispatch(publishingArticle())
    try{
      let token = getState().user.token;
      let response = slug 
        ? await updateToServer(data, token, slug)
        : await publishToServer(data, token);
      dispatch(publishSuccess(response));
    } catch(error){
      dispatch(publishError(error))
    }
  }
}

//NOTE: User more likely want to read post from the last 
// visible list, So due the this possibility searching in last 
// list would avoid server call.
const findInLocalState = (slug, state) => {
  let {articles:{requestedOffset, countPerPage}} = state;
  let key = `${countPerPage}-${requestedOffset}`;
  let articles = state.articles[key]
  if(articles && articles.length > 0){
    return articles.filter(article => article.slug === slug);
  }
  return [];
} 

export const getArticle = (slug) => {
  return async (dispatch, getState) => {
    dispatch(loadingArticle())
    let post = findInLocalState(slug, getState())
    if(post.length > 0){
      await Promise.resolve();
      dispatch(articleLoaded({article: post[0]}))
      return;
    }
    try {
      let res = await fetchArticleBySlug(slug)
      dispatch(articleLoaded(res))
    } catch (error) {
      dispatch(articleNotFound(error))
    }
  }
}

export const deleteArticle = (slug) => {
  return async (dispatch, getState) => {
    dispatch(deletingInProgress())
    try {
      let token = getState().user.token;
      await deleteArticleOnServer(slug, token);
      dispatch(articleDeleted())
    } catch (error) {
      dispatch(deleteError(error))
    }
  }
}