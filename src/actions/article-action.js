import { publishToServer, fetchArticleBySlug } from "../services/article-service"


export const PUBLISHING_ARTICLE = 'PUBLISHING_ARTICLE';
export const PUBLISH_ERROR = 'PUBLISH_ERROR';
export const PUBLISHED = 'PUBLISHED';
export const LOADING_ARTICLE = 'LOADING_ARTICLE';
export const ARTICLE_RECEIVED = 'ARTICLE_RECEIVED';
export const ARTICLE_NOT_FOUND = 'ARTICLE_NOT_FOUND';

const publishingArticle = () => ({type:PUBLISHING_ARTICLE});
const publishError = err => ({type:PUBLISH_ERROR, payload:err});
const publishSuccess = data => ({type:PUBLISHED, payload:data});
const loadingArticle = () => ({type:LOADING_ARTICLE})
const articleLoaded = (data) => ({type:ARTICLE_RECEIVED, payload:data})
const articleNotFound = (err) => ({type:ARTICLE_NOT_FOUND, payload:err})

export const publishArticle = (data) => {
  return async (dispatch, getState) => {
    dispatch(publishingArticle())
    try{
      let token = getState().user.token;
      let response = await publishToServer(data, token);
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
      dispatch(articleLoaded({article: post[0]}))
    }
    try {
      let res = await fetchArticleBySlug(slug)
      dispatch(articleLoaded(res))
    } catch (error) {
      dispatch(articleNotFound(error))
    }
  }
}