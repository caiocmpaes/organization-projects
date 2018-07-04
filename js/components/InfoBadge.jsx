import React from 'react'
import PropTypes from 'prop-types'
import Octicon from 'react-octicon'

const InfoBadge = ({ text, octicon, url }) => {
  const infoBadge = (
    <div>
      <Octicon mega name={octicon} />
      <h4>
        {text}
      </h4>
    </div>
  )

  return url ? (
    <a href={url}>
      {infoBadge}
    </a>
  ) : infoBadge
}

InfoBadge.propTypes = {
  text:    PropTypes.node.isRequired,
  octicon: PropTypes.string.isRequired,
  url:     PropTypes.string
}

InfoBadge.defaultProps = {
  url: null
}

export default InfoBadge
