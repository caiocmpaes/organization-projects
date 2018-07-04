import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem, Image, Badge } from 'react-bootstrap'
import ContributorCommitsLink from './ContributorCommitsLink'

const ContributorsListItem = ({ rank, avatar, login, totalCommits, totalLineAdditions,
  totalLineDeletions, weeksSinceLastCommit }) => (
    <ListGroupItem className="contributor-list-item">
      <Image className="avatar" src={avatar} rounded />
      <a href={`https://github.com/${login}`}>
        <span className="login text">
          {login}
        </span>
      </a>
      <ContributorCommitsLink login={login} totalCommits={totalCommits} />
      <span className="additions text">
        {`${totalLineAdditions} ++`}
      </span>
      <span className="deletions text">
        {`${totalLineDeletions} --`}
      </span>
      <span className="weeks text">
        {`Last commit was ${weeksSinceLastCommit} ${weeksSinceLastCommit > 1 ? 'weeks' : 'week'} ago`}
      </span>
      <Badge>
        {`#${rank}`}
      </Badge>
    </ListGroupItem>
)

ContributorsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  totalCommits: PropTypes.number.isRequired,
  totalLineAdditions: PropTypes.number.isRequired,
  totalLineDeletions: PropTypes.number.isRequired,
  weeksSinceLastCommit: PropTypes.number.isRequired
}

export default ContributorsListItem
