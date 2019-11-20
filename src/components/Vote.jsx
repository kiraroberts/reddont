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
        <style global jsx>{`
        i:hover {
          cursor: pointer;
          }
        `}</style>
        <i className="tiny material-icons" onClick={this.handleUpVote}>keyboard_arrow_up</i>
        <h6>{this.state.count}</h6>
        <i className="tiny material-icons" onClick={this.handleDownVote}>keyboard_arrow_down</i>
      </div>
    )
  }
}

export default Vote