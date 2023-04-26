import React, { Component } from 'react'

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h3>Hello {this.props.name}, lets start with props</h3>
      </div>
    )
  }
}

export default ClassProps