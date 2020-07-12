import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import articlesReducer from './articles-reducer';
import articleReducer from './article-reducer';
import commentReducer from './comment-reducer';

const rootReducer = combineReducers({
  user:authReducer,
  articles:articlesReducer,
  singleArticle: articleReducer,
  articleComments: commentReducer,
})

export default rootReducer;

/* 
{
  user:{},
  articles: {},
  article: {}
}
*/