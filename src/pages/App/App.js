import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from "react-router-dom";
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import HomePage from '../HomePage/HomePage';
import CharactersPage from '../CharactersPage/CharactersPage';
import userService from '../../utils/userService';
import * as characterAPI from '../../utils/characterService';
import * as noteAPI from '../../utils/noteService';
import * as matchAPI from '../../utils/matchService';
import AddCharacterPage from '../AddCharacterPage/AddCharacterPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import AddNoteForm from '../../components/AddNoteForm/AddNoteForm';
import UpdateNoteForm from '../../components/UpdateNoteForm/UpdateNoteForm';
import AddMatchForm from '../../components/AddMatchForm/AddMatchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      characters: [],
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

  handleAddNote = async (newNoteData, id) => {
    const newNote = await noteAPI.create(newNoteData, id);
    const newCharactersArray = this.state.characters.map((c) =>
      c._id === newNote._id ? newNote : c
    )
    this.setState(
      { characters: newCharactersArray },
      () => this.props.history.push('/characters')
    )
  }

  handleUpdateNote = async (updatedNoteData, id) => {
    const updatedNote = await noteAPI.update(updatedNoteData, id);
    const newCharactersArray = this.state.characters.map((c) =>
    c._id === updatedNote._id ? updatedNote : c
  )
  this.setState(
    { characters: newCharactersArray },
    () => this.props.history.push('/characters')
  )
  }

  handleDeleteNote = async (n_id, id) => {
    const deletedNote = await noteAPI.deleteOne(n_id, id);
    const newCharactersArray = this.state.characters.map((c) =>
      c._id === deletedNote._id ? deletedNote : c
    )
    this.setState(
      { characters: newCharactersArray },
      () => this.props.history.push('/characters')
    )
  }

  handleAddMatch = async (newMatchData, id) => {
    const newMatch = await matchAPI.create(newMatchData, id);
    const newCharactersArray = this.state.characters.map((c) =>
      c._id === newMatch._id ? newMatch : c
    )
    this.setState(
      { characters: newCharactersArray },
      () => this.props.history.push('/characters')
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
            <Route 
              exact
              path='/details'
              render={({location}) => (
                <DetailsPage 
                  location={location} 
                  handleAddNote={this.handleAddNote}
                  handleDeleteNote={this.handleDeleteNote}
                />
              )}
            />
            <Route 
              exact
              path='/:id/addnote'
              render={({match}) => (
                <AddNoteForm 
                  match={match}
                  handleAddNote={this.handleAddNote} 
                />
              )}
            />
            <Route 
              exact
              path='/:id/updatenote'
              render={({match, location}) => (
                <UpdateNoteForm 
                  match={match}
                  location={location}
                  handleUpdateNote={this.handleUpdateNote}
                />
              )}
            />
            <Route 
              exact
              path='/:id/addmatch'
              render={({match}) => (
                <AddMatchForm 
                  match={match}
                  handleAddMatch={this.handleAddMatch}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
