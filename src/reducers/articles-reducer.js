import { ARTICLES_RECEIVED, UPDATE_REQUESTED_OFFSET, UPDATE_OFFSET } from "../actions/articles-action";
import { PUBLISHED } from "../actions/article-action";

const initialState = {
  offset:0,
  requestedOffset:0,
  countPerPage:10,
  total:0
}

const articlesReducer = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_REQUESTED_OFFSET: 
      return {
        ...state,
        requestedOffset: action.payload
      }
    case UPDATE_OFFSET:
      return {
        ...state,
        offset:action.payload
      }
    case ARTICLES_RECEIVED:
      let {
        data:{articles, articlesCount}, 
        requestedOffset, 
        countPerPage
      } = action.payload;
      return {
        ...state, 
        [`${countPerPage}-${requestedOffset}`]:articles, 
        total:articlesCount,
        offset:requestedOffset
      }
    case PUBLISHED:
      return {...initialState }
    default:
      return state;
  }
}

export default articlesReducer;

/*
{
  "10-0": [{
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
  }],
  "10-1":[],
  offset:0,
  countPerPage:10,
  total: 1
}
*/