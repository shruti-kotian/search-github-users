import React from 'react'
import { RepoItem } from './RepoItem'
import PropTypes from 'prop-types'


export const Repos = ({ repos }) => {
    return repos.map(repo => (<RepoItem key={repo.id} repoData={repo} />))

}

Repos.propTypes = {
    repos: PropTypes.array.isRequired
}
