import React from 'react'
import { createNew } from './../reducers/anecdoteReducer'
import { actionCreatorNotification } from './../reducers/notificationReducer'
import { connect } from 'react-redux'



class AnecdoteForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    const youDid = 'You created: '
    this.props.notificationCreate(youDid, content)
    this.props.anecdoteCreate(content)
  }
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
     )
   }
}

const mapDispatchToProps = {
  anecdoteCreate: createNew,
  notificationCreate: actionCreatorNotification.createNewNot
}


export default connect(
null,
mapDispatchToProps
) (AnecdoteForm)
