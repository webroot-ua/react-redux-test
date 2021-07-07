import { CREATE_COMMENT, FETCH_COMMENTS, FETCH_POSTS, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER, START_LOADING } from "./types";

export function createComment(comment) {
  return {
    type: CREATE_COMMENT,
    payload: comment
  }
}

export function fetchComments() {
  return async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
    const json = await response.json
    dispatch({ type: FETCH_COMMENTS, payload: json})
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function starting() {
  return {
    type: START_LOADING
  }
}

export function fetchPosts() {
  return async dispatch => {
    try {
      dispatch(showLoader())
      const response = await fetch('https://boiling-refuge-66454.herokuapp.com/images')
      const json = await response.json()
      // const json = require('../images.json') // local json
      // setTimeout( () => {
      //   dispatch({ type: FETCH_POSTS, payload: json })
        // dispatch(hideLoader())
      // }, 500)
      dispatch({ type: FETCH_POSTS, payload: json })
      dispatch(hideLoader())
    } catch (e) {
      dispatch(showAlert('Something wrong with connection'))
      dispatch(hideLoader())
    }
  }
}