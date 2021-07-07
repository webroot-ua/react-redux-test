import React from 'react'

export default ({ comment }) => {
  return (
    <div className="col shadow p-3 mb-3 bg-body rounded">
      <div className="modal__comment d-flex justify-content-between">
        <p>18.12.2019</p>
        <p>{comment.name}1</p>
      </div>
      {comment.comment}
    </div>
  )
}