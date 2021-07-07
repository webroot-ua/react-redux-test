import React from 'react'
// import Modal from './Modal'

export default ({ post }) => {
  return (
    <div className="col">
      <img src={post} className="card-img-top" alt="" />
    </div>
  )
}

// onClick={() => showModal(post.url)} 