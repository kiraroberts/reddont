import React from 'react'
import PropTypes from 'prop-types'
import Vote from './Vote'

function Comment(props){
  return (
    <div>
      {/* <style global jsx>{`
      .voteFloat {
        float: left;
        }
      `}</style> */}
      <div className="row">
        <div className="col s12 m">
          <div className="card teal lighten-2">
            <div className="card-content white-text">
              <div className="row valign-wrapper">
                <div className="col s1">
                  <Vote/>
                </div>
                <div className="col s11">
                  <h4>{props.name}</h4>
                  <hr/>
                  <p><em>{props.content}</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string
}

export default Comment