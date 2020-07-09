import { PUBLISH_ERROR, PUBLISHED, PUBLISHING_ARTICLE, ARTICLE_NOT_FOUND, ARTICLE_RECEIVED, RESET_SUCCESS } from "../actions/article-action";

const initialSate = {
  success:false,
  loading:false,
  error:null,
  fetchError:null
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
      return {
        ...state,
        error: action.payload.errorMessage,
        loading:false,
        success:false
      }
    case ARTICLE_RECEIVED:
    case PUBLISHED:
      return {
        ...state,
        ...action.payload.article,
        error:null,
        loading:false,
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

/*
{

  "slug": "how-to-train-your-dragon",
  "title": "How to train your dragon",
  "description": "Ever wonder how?",
  "body": "It takes a Jacobian",
  "tagList": ["dragons", "training"],
  "createdAt": "2016-02-18T03:22:56.637Z",
  "updatedAt": "2016-02-18T03:48:35.824Z",
  "favorited": false,
  "favoritesCount": 0,
  "author": {
    "username": "jake",
    "bio": "I work at statefarm",
    "image": "https://i.stack.imgur.com/xHWG8.jpg",
    "following": false
  }
}
*/