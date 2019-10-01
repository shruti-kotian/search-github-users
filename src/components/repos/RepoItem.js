import React from 'react'
import PropTypes from 'prop-types'

export const RepoItem = (props) => {
    const { html_url, name } = props.repoData; //or refer to UserItem for destructuring in args
    return (
        <div className="card">
            <h3>
                <a href={html_url}>{name}</a>
            </h3>
        </div>
    )
}

RepoItem.propTypes = {
    repoData: PropTypes.array.isRequired
}

