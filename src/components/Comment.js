import React from 'react'

export default ({ comment }) => {
  return (
    <div className="col mb-3">
      <p>18.12.2019</p>
      {comment.comment}
    </div>
  )
}