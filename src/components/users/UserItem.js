import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const UserItem = ({ userData: { login, id, avatar_url, html_url } }) => {
    //const { login, id, avatar_url, html_url } = props.userData;
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" style={{ width: "60px" }} className="round-img" />
            <h3>{login}</h3>
            <div>
                <Link to={`/users/${login}`} className="btn btn-dark btn-sm my-1 "> More </Link>
            </div>
        </div >
    )

}

UserItem.propTypes = {
    userData: PropTypes.object.isRequired
};

