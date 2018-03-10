import React from 'react'
import notificationReducer from './../reducers/notificationReducer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actionCreatorNotification } from './../reducers/notificationReducer'



class Notification extends React.Component {

  render() {

    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }

    setTimeout(() => {
      this.props.createNot('', '')
    }, 5000)
    return (

      <div style={style}>
      {this.props.notification}
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const mapDispatchToProps = {
  createNot: actionCreatorNotification.createNewNot
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)