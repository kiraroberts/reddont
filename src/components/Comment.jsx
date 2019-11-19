import React from 'react'
import PropTypes from 'prop-types'
import Vote from './Vote'

function Comment(props){
  return (
    <div>
      <style global jsx>{`
      div {
        background-color: lightblue;
        }
      `}</style>
      <Vote/>
      <h3>{props.name}</h3>
      <p><em>{props.comment}</em></p>
      <hr/>
    </div>
  )
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string
}

export default Comment