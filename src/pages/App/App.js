import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from "react-router-dom";
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import HomePage from '../HomePage/HomePage';
import CharactersPage from '../CharactersPage/CharactersPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    }
  }

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser(),
    });
    console.log(this.state.user);
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <nav>
            {this.state.user ?  (
              <>
                <Link to="" onClick={this.handleLogout} >
                  LOG OUT
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/">
                  HOME
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/characters">
                  CHARACTERS
                </Link>
              </>
            ) : (
              <>
                <NavLink exact to="/login">
                  LOG IN
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to="/signup">
                  SIGN UP
                </NavLink>
              </>
            )}
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
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route 
              exact 
              path="/signup" 
              render={({ history }) => (
                <SignupPage 
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route 
              exact
              path="/"
              render={() => (
                <HomePage />
              )}
            />
            <Route 
              exact
              path="/characters"
              render={() => (
                <CharactersPage />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
