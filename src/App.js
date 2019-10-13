import React from 'react';
import './App.css';
import { Navbar } from './components/layout/Navbar';
import { Alert } from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './components/pages/About';
import { User } from './components/users/User';
import { GithubState } from './context/github/GithubState';
import { AlertState } from './context/alert/AlertState';
import { Home } from './components/layout/Home';
import { NotFound } from './components/layout/NotFound';


export const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/users/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );

}


