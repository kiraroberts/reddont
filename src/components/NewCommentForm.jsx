import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

function NewCommentForm(props){
  let _name = null
  let _content = null

  function handleNewCommentFormSubmission(event) {
    event.preventDefault()
    props.onNewCommentCreation({name: _name.value, content: _content.value, id: v4()})
    _name.value = ''
    _content.value = ''
  }

  return (
    <div>
      <form onSubmit={handleNewCommentFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input}}/><br></br>
        <textarea
          id='content'
          placeholder='Comment...'
          ref={(textarea) => {_content = textarea}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

NewCommentForm.propTypes = {
  onNewCommentCreation: PropTypes.func
}

export default NewCommentForm