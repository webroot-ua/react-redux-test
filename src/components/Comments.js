import React from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

const Comments = ({ syncComments }) => {
  if (!syncComments.length) {
    return (
      <div className="text-center">
        <p>No comments yet</p>
      </div>
    )
  }
  return syncComments.map(comment => <Comment comment={comment} key={comment.id} />)
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    syncComments: state.comments.comments
  }
}

export default connect(mapStateToProps, null)(Comments)