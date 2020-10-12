import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from "react-router-dom";
import './App.css';
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink exact to="/login">
              LOG IN
            </NavLink>
            &nbsp;
            <NavLink exact to="/signup">
              SIGN UP
            </NavLink>
          </nav>
        </header>
        <main>
          <Switch>
            <Route 
              exact 
              path="/login" 
              render={({ history }) => (
                <LoginPage 
                  history={history}
                />
              )}
            />
          </Switch>
          <Switch>
            <Route 
              exact 
              path="/signup" 
              render={({ history }) => (
                <SignupPage 
                  history={history}
                />
              )}
            />
          </Switch>
          Hello
        </main>
      </div>
    );
  }
}

export default App;
