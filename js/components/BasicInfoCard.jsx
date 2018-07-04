import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const BasicInfoCard = ({ name, url, description }) => (
  <div>
    <h1>
      <a href={url}>
        {name}
      </a>
    </h1>
    <h2>
      {description}
    </h2>
  </div>
)

BasicInfoCard.propTypes = {
  name:        PropTypes.string.isRequired,
  url:         PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  const name = state.details.repositoryName
  const repository = state.repositories.get(name)
  return {
    name,
    url: repository.url,
    description: repository.description
  }
}

export default connect(
  mapStateToProps
)(BasicInfoCard)
