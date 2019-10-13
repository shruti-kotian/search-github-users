import React, { Fragment, useEffect, useContext } from 'react';
import { Spinner } from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { Repos } from '../repos/Repos';
import { GithubContext } from '../../context/github/GithubContext'

export const User = ({ match }) => {

    const githubContext = useContext(GithubContext);
    useEffect(() => {
        searchSingleUser(match.params.login);
        getRepos(match.params.login);
        //eslint-disable-next-line
    }, []);

    const { loading, user, searchSingleUser, repos, getRepos } = githubContext;
    const { login, id, hireable, avatar_url, name, company, blog, location, followers, following, bio, email, html_url, public_repos, public_gists } = user;

    if (loading) {
        return <Spinner />
    }
    return (
        <Fragment>
            <Link to='/' className="btn btn-light" > Back to Home </Link>
            Hireable: {''}
            {hireable ? (<i className="fas fa-check text-success" />) : (<i className="fas fa-times-circle text-danger" />)}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="round-img" alt="" style={{ width: '150px' }} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>}
                    <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                    <ul>
                        <li>{login &&
                            (<Fragment>
                                <strong> Username: </strong> {login}
                            </Fragment>)}
                        </li>
                        <li>{company &&
                            (<Fragment>
                                <strong> Company: </strong> {company}
                            </Fragment>)}
                        </li>
                        <li>{blog &&
                            (<Fragment>
                                <strong> Website: </strong> {blog}
                            </Fragment>)}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>
            <Repos repos={repos} />
        </Fragment>

    )

}

