import React from 'react'

class Vote extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleUpVote = this.handleUpVote.bind(this)
    this.handleDownVote = this.handleDownVote.bind(this)
  }

  handleUpVote(){
    this.setState({ count: this.state.count + 1 })
  }

  handleDownVote(){
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleUpVote}>Up Vote</button>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleDownVote}>Down Vote</button>
      </div>
    )
  }
}

export default Vote