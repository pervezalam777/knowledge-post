import { fetchArticles } from '../services/articles-service';

export const LOADING_ARTICLES = 'loading_articles';
export const ARTICLES_RECEIVED = 'articles_received';
export const UPDATE_REQUESTED_OFFSET = 'update_requested_offset';
export const UPDATE_OFFSET = 'update_offset';

const loadingArticles = () => ({ type: LOADING_ARTICLES });
const articlesReceived = (data) => ({ type: ARTICLES_RECEIVED, payload: data })
const updateOffsetOnly = (requestedOffset) => ({type:UPDATE_OFFSET, payload:requestedOffset})

export const updateRequestedOffset = (offset) => ({
  type: UPDATE_REQUESTED_OFFSET, payload:offset
})

export function getArticles(){
  return async (dispatch, getState) => {
    dispatch(loadingArticles());
    let state = getState();
    let {articles:{requestedOffset, countPerPage}} = state;
    let key = `${countPerPage}-${requestedOffset}`;
    if(state.articles[key]){
      dispatch(updateOffsetOnly(requestedOffset))
      return;
    }

    let data = await fetchArticles(countPerPage, requestedOffset);
    dispatch(articlesReceived({data, requestedOffset, countPerPage}));
  }
}

