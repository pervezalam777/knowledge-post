import { PUBLISH_ERROR, PUBLISHED, PUBLISHING_ARTICLE, ARTICLE_NOT_FOUND, ARTICLE_RECEIVED } from "../actions/article-action";

const initialSate = {
  published:false,
  publishing:false,
  publishError:null,
  fetchError:null
}

const articleReducer = (state = initialSate, action) => {
  switch(action.type){
    case PUBLISHING_ARTICLE:
      return {
        ...state,
        publishError:null,
        publishing:true,
        published:false
      }
    case PUBLISH_ERROR:
      return {
        ...state,
        publishError: action.payload.errorMessage,
        publishing:false,
        published:false
      }
    case ARTICLE_NOT_FOUND:
      return {
        ...state,
        fetchError:action.payload.errorMessage,
      }
    case PUBLISHED:
      return {
        ...state,
        ...action.payload.article,
        publishError:null,
        publishing:false,
        published:true
      }
    
    case ARTICLE_RECEIVED:
      return {
        ...state,
        ...action.payload.article,
        fetchError:null,
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