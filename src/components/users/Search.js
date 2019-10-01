import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
    state = {
        text: ""
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired

    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter a name', 'light');
        }
        else {
            this.props.searchUsers(this.state.text);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="text"
                        placeholder="Search Users..."
                        value={this.state.text}
                        onChange={this.onChange} />
                    <input type="submit" value="Search" className='btn btn-dark btn-block' />
                </form>
                {this.props.showClear && <button className="btn btn-light btn-block" onClick={this.props.clearUsers} > Clear </button>}

            </div >
        )
    }
} 