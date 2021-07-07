import React from 'react'
import { connect } from 'react-redux'
import { createComment, showAlert } from '../redux/actions'
import { Alert } from './Alert'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      comment: ''
    }
  }

  submitHandler = event => {
    event.preventDefault()
    const {name} = this.state
    const {comment} = this.state
    // console.log(this.state.name)
    // console.log(this.state.comment)
    if (!name.trim()) {
      return this.props.showAlert('Name cannot be empty')
    }
    if (!comment.trim()) {
      return this.props.showAlert('Comment cannot be empty')
    }
    const newComment = {
      name, comment, id: Date.now().toString()
    }
    // console.log(newComment)
    this.props.createComment(newComment)
    this.setState({ name: '', comment: '' })
  }  

  changeInputHandler = event => {
    event.persist()
    this.setState( prev => ({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}
        <div className="form">
          {/* <label htmlFor="comment" className="form-label">Comment</label> */}
          <div className="mb-3">
            <input 
              type="text" 
              className="form-control" 
              id="name"
              value={this.state.name}
              onChange={this.changeInputHandler}
              name="name"
              placeholder="Ваше имя"
            />
          </div>
          <div className="mb-3">
            <input 
              type="text" 
              className="form-control" 
              id="comment"
              value={this.state.comment}
              onChange={this.changeInputHandler}
              name="comment"
              placeholder="Ваш комментарий"
            />
          </div>
          <div className="text-center">
            <button className="btn btn-primary w-100" type="submit" >Оставить комментарий</button>
          </div>
        </div>
      </form>
    )
  }

}

const mapDispatchToProps = {
  createComment, showAlert
}

const mapStateToProps = state => ({
  alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)