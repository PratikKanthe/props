import React, { Component } from 'react'

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h3>Hello {this.props.name}, from {this.props.place} Welcome! lets start with props</h3>
        {this.props.children}
      </div>
    )
  }
}

export default ClassProps