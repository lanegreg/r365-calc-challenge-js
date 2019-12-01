import React from 'react'
import PropTypes from 'prop-types'

const Result = props => {
  return (
    <div className="result">
      <span className="command">{props.command}</span>
      <span className="pointer"> --&gt; </span>
      <span className="equation">{props.equation}</span>
      <span role="img" aria-label="emoji">
        {' '}
        {props.emoji}
      </span>
    </div>
  )
}

Result.propTypes = {
  emoji: PropTypes.string,
  command: PropTypes.string.isRequired,
  equation: PropTypes.string.isRequired
}

export { Result }
