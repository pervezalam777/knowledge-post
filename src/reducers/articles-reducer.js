import {
  ARTICLES_RECEIVED,
  UPDATE_REQUESTED_OFFSET,
  UPDATE_OFFSET
} from '../actions/articles-action';

import {
  ARTICLE_PUBLISHED,
  ARTICLE_DELETED
} from '../actions/article-action';

const initialState = {
  offset: 0,
  requestedOffset: 0,
  countPerPage: 10,
  total: 0
}

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REQUESTED_OFFSET:
      return {
        ...state,
        requestedOffset: action.payload
      }
    case UPDATE_OFFSET:
      return {
        ...state,
        offset: action.payload
      }
    case ARTICLES_RECEIVED:
      let {
        data: { articles, articlesCount },
        requestedOffset,
        countPerPage
      } = action.payload;
      return {
        ...state,
        [`${countPerPage}-${requestedOffset}`]: articles,
        total: articlesCount,
        offset: requestedOffset
      }
    case ARTICLE_PUBLISHED:
    case ARTICLE_DELETED:
      return { ...initialState }
    default:
      return state;
  }
}

export default articlesReducer;
