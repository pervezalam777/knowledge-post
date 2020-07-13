import { 
  PUBLISH_ERROR, 
  ARTICLE_PUBLISHED, 
  PUBLISHING_ARTICLE, 
  ARTICLE_NOT_FOUND, 
  ARTICLE_RECEIVED, 
  RESET_SUCCESS, 
  DELETE_ERROR, 
  ARTICLE_DELETED
} from '../actions/article-action';

const initialSate = {
  success:false,
  loading:false,
  error:null,
}

const articleReducer = (state = initialSate, action) => {
  switch(action.type){
    case PUBLISHING_ARTICLE:
      return {
        ...state,
        error:null,
        loading:true,
        success:false
      }
    case PUBLISH_ERROR:
    case ARTICLE_NOT_FOUND:
    case DELETE_ERROR:
      return {
        ...state,
        error: action.payload.errorMessage,
        loading:false,
        success:false
      }
    case ARTICLE_RECEIVED:
    case ARTICLE_PUBLISHED:
      return {
        ...state,
        ...action.payload.article,
        error:null,
        loading:false,
        success:true
      }
    case ARTICLE_DELETED:
      return {
        ...initialSate,
        success:true
      }
    case RESET_SUCCESS: 
      return {
        ...state,
        success:false
      }
    default:
      return state;
  }
}

export default articleReducer;
