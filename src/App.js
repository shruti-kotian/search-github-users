import React, { Component, Fragment } from 'react';
import './App.css';
import { Navbar } from './components/layout/Navbar';
import { Users } from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './components/pages/About';
import User from './components/users/User';


export default class App extends Component {

  state = {
    users: [],
    loading: false,
    repos: [],
    alert: null,
    user: {}
  }

  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ users: res.data.items, loading: false });
  }

  searchSingleUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ user: res.data, loading: false });
  }

  getRepos = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ repos: res.data, loading: false });
  }
  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } })
    setTimeout(() => { this.setState({ alert: null }) }, 3000)
  }
  render() {
    const { loading } = this.state;
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} setAlert={this.setAlert} showClear={this.state.users.length > 0 ? true : false} />
                  <Users loading={this.state.loading} userList={this.state.users} />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/users/:login' render={props => (
                <User {...props}
                  searchSingleUser={this.searchSingleUser}
                  getRepos={this.getRepos}
                  user={this.state.user}
                  repos={this.state.repos}
                  loading={loading} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>

    );
  }

}


