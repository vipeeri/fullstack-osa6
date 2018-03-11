import React from 'react'
import { createNewChar } from './../reducers/filterReducer'
import { connect } from 'react-redux'

class Filter extends React.Component {
    handleChange = (event) => {
      // input-kentän arvo muuttujassa event.target.value
      this.props.newChar(event.target.value)

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

 
  
  const mapDispatchToProps = {
    newChar: createNewChar
  }

  const mapStateToProps = (state) => {
    return {
      filter: state.filter
    }
  }
  

 
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  ) (Filter)