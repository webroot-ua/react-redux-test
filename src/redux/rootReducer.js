import { combineReducers } from "redux"
import { commentsReducer } from "./commentsReducer"
import { postsReducer } from "./postsReducer"
import { appReducer } from "./appReducer"

export const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
  app: appReducer
})