import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import articlesReducer from './articles-reducer';
import articleReducer from './article-reducer';

const rootReducer = combineReducers({
  user:authReducer,
  articles:articlesReducer,
  selectedArticle: articleReducer
})

export default rootReducer;

/* 
{
  user:{},
  articles: {},
  selectedArticle: {}
}
*/