import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from "react-router-dom";
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import HomePage from '../HomePage/HomePage';
import CharactersPage from '../CharactersPage/CharactersPage';
import userService from '../../utils/userService';
import * as characterAPI from '../../utils/characterService';
import AddCharacterPage from '../AddCharacterPage/AddCharacterPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      characters: []
    }
  }

  handleAddCharacter = async (newCharacterData) => {
    const newCharacter = await characterAPI.create(newCharacterData);
    this.setState(
      (state) => ({
        characters: [...state.characters, newCharacter]
      }),
      () => this.props.history.push('/characters')
    )
  }
  
  handleDeleteCharacter = async (id) => {
    await characterAPI.deleteOne(id);
    this.setState(
      (state) => ({
        characters: state.characters.filter((c) => c._id !== id),
      })
    )
  }

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser(),
    });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  /*--- LifeCycle Methods ---*/
  async componentDidMount() {
    const characters = await characterAPI.getAll();
    this.setState({ characters });
  }

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
              render={({ history }) => (
                <CharactersPage 
                  user={this.state.user}
                  characters={this.state.characters}
                  handleDeleteCharacter={this.handleDeleteCharacter}
                />
              )}
            />
            <Route 
              exact
              path='/add'
              render={() => (
                <AddCharacterPage handleAddCharacter={this.handleAddCharacter} />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
