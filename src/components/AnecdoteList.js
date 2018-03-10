import React from 'react'
import PropTypes from 'prop-types'
import { createNewNot } from './../reducers/notificationReducer'


class AnecdoteList extends React.Component {

  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleDispatchAndNotification(anecdote) {
    const youDid = 'You voted: '
    this.context.store.dispatch({ type: 'VOTE', id: anecdote.id })
    this.context.store.dispatch(createNewNot(youDid, anecdote.content))
  }

  handleFilter(anecdote) {
    if (anecdote.content.includes(this.context.store.getState().filter)) {
      return anecdote.content
    }
  }

  buttonRender(e) {
    if (e.content.includes(this.context.store.getState().filter)) {

    return (
      <div>
      has {e.votes}
      <button onClick={() => 
        this.handleDispatchAndNotification(e)
        }>
        VOTE
        </button>
        </div>
  )}
  }

  render() {
    const anecdotes = this.context.store.getState().anecdotes

  
 
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {this.handleFilter(anecdote)}
              {this.buttonRender(anecdote)}
            </div>
          </div>
        )}
      </div>
    )
  }
}

AnecdoteList.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteList
