import React from 'react'

export default ({ comment }) => {
  return (
    <div className="col shadow p-3 mb-3 bg-body rounded">
      <div className="modal__comment d-flex justify-content-between">
        <p>{new Date(Date.now()).toDateString()}</p>
        <p>{comment.name}</p>
      </div>
      {comment.comment}
    </div>
  )
}