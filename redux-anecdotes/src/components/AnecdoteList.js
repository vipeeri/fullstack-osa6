import React from 'react'
import { actionCreatorNotification } from './../reducers/notificationReducer'
import { createNew } from './../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { actionCreatorAnecdote } from './../reducers/anecdoteReducer'


class AnecdoteList extends React.Component {

  render() {
  
    return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.visibleAnecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
              <div>
             has: {anecdote.votes}
             </div>
              <button onClick={() => {
      this.props.anecdoteVoteCreate(anecdote)
      this.props.notificationCreate('you voted: ', anecdote.content)
              }
      }>
      VOTE
      </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const anecdotesToShow = (anecdotes, filter) => {
  const sorted = anecdotes.filter(anecdote =>
    anecdote.content.includes(filter)
  )
    return (
      sorted.sort((a, b) => b.votes - a.votes)
    )
  
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}


const mapDispatchToProps = {
  anecdoteVoteCreate: actionCreatorAnecdote.voteAnecdote,
  notificationCreate: actionCreatorNotification.createNewNot
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (AnecdoteList)
