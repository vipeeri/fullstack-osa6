import React from 'react'
import notificationReducer from './../reducers/notificationReducer'
import PropTypes from 'prop-types'
import { remove } from './../reducers/notificationReducer'



class Notification extends React.Component {

  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  isNull() {
    if (this.context.store.getState().notification) {
      return this.context.store.getState().notification
    }   setTimeout(() => {
      this.context.store.dispatch(remove())
    }, 5000)

  }

  render() {

    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }

    return (

      <div style={style}>
      {this.isNull()}
      </div>
    )

  }
}

Notification.contextTypes = {
  store: PropTypes.object
}

export default Notification
