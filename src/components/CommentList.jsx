import React from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

function CommentList(props){
  props.commentList.sort((a, b) => b.count - a.count);
  return (
    <div>
      <hr/>
      {props.commentList.map((comment) =>
        <Comment name={comment.name}
          content={comment.content}
          key={comment.id}/>
      )}
    </div>
  )
}

CommentList.propTypes = {
  commentList: PropTypes.array
}

export default CommentList