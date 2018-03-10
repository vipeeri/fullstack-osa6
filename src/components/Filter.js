import React from 'react'
import PropTypes from 'prop-types'
import { createNewChar } from './../reducers/filterReducer'

class Filter extends React.Component {
    handleChange = (event) => {
      // input-kentän arvo muuttujassa event.target.value
      this.context.store.dispatch(createNewChar(event.target.value))

      // this.context.setStage(event.target.value)
    }
    render() {
      const style = {
        marginBottom: 10
      }
  
      return (
        <div style={style}>
        <br/>
          filter <input onChange={this.handleChange}/>
        </div>
      )
    }
  }

  Filter.contextTypes = {
    store: PropTypes.object
  }
  
  export default Filter