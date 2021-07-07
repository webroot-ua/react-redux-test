import { CREATE_COMMENT, FETCH_COMMENTS } from "./types"

const initialState = {
  comments: []
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return { ...state, comments: state.comments.concat([action.payload]) }
      // return { ...state, comments: [...state.comments, action.payload] }
    case FETCH_COMMENTS:
      return { ...state, fetchedComments: action.payload}
    default: return state
  }
}