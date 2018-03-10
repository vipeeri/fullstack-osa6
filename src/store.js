import { createStore, combineReducers } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer
  })
  

const store = createStore(reducer)


/* store.subscribe(() =>
  console.log(store.getState())
) */

export default store