import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER, START_LOADING } from "./types"

const initialState ={
  starting: false,
  loading: false,
  alert: null
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true }
    case HIDE_LOADER:
      return { ...state, loading: false }
    case SHOW_ALERT:
      return { ...state, alert: action.payload }
    case HIDE_ALERT:
      return { ...state, alert: null }
    case START_LOADING:
      return { ...state, starting: true}
    default: return state
  }
}