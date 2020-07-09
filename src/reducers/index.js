import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import articlesReducer from './articles-reducer';
import articleReducer from './article-reducer';

const rootReducer = combineReducers({
  user:authReducer,
  articles:articlesReducer,
  singleArticle: articleReducer
})

export default rootReducer;

/* 
{
  user:{},
  articles: {},
  article: {}
}
*/