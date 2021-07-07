import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import { fetchPosts } from '../redux/actions'
import { Loader } from './Loader'

export default () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.fetchedPosts)
  const loading = useSelector(state => state.app.loading)

  if (loading) {
    return <Loader />
  }
  
  if (!posts.length) {
    dispatch(fetchPosts())
    // return <span className="text-center">
    //     <button 
    //       className="btn btn-primary"
    //       onClick={() => dispatch(fetchPosts())}
    //     >Download posts
    //     </button>
    //   </span>
  }
  
  return posts.map(post => <Post post={post.url} key={post.id} />)
}