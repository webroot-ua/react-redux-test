import React from 'react'
import Comments from './Comments'

const Modal = props => {

  return (
    <div className={`modal__wrapper ${props.isOpened ? "open" : "close"}`} style={{...props.style}}>
      <div className="modal__body">
        <div className="modal__close" onClick={props.onModalClose}>&#xD7;</div>
        <div className="row modal__grid">
          <div className="col">
            <div className="d-block d-sm-none">
              <img className="img-fluid modal__img" src={props.url} alt="" />
            </div>
            <div className="d-none d-sm-block">
            <img className="img-fluid modal__img px-4" src={props.url} alt="" />
              {props.children}
            </div>
          </div>
          <div className="col modal__comments">
            <div className="modal__comment">
              <Comments />
            </div>
          </div>
        </div>
        <div className="d-block d-sm-none">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal