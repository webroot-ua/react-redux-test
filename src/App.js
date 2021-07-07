import { useState } from 'react'
import Modal from './components/Modal'
import Posts from './components/Posts'
// import Comments from './components/Comments'
import CommentForm from './components/CommentForm'

function App() {
  
  const [modal, setModal] = useState({
    modal: false
  })

  return (
    <div className="container pt-3">
      <h1 className="text-center p-3">TEST APP</h1>
      <div className="row">
        <Posts />
      </div>
      <div className="text-center m-2">
        <button className="btn btn-outline-primary" onClick={() => setModal({ ...modal, modal: true })}>Open modal</button>
      </div>

      <Modal
        id={'237'}
        url={'https://picsum.photos/id/237/300/200'}
        isOpened={modal.modal}
        onModalClose={() => setModal({ ...modal, modal: false})}
      >
        <CommentForm />
      </Modal>

    </div>
  )
}

export default App
