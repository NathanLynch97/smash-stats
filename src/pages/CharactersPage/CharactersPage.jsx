import React from 'react';
import { Link } from "react-router-dom";
import CharacterList from '../../components/CharacterList/CharacterList';

function CharactersPage(props) {
    return (
      <>
        {!props.user ? (
          <></>
        ) : (
          <>
          <h1>Character List</h1>
          <Link exact to='/add'>
              ADD CHARACTER
          </Link>
          <div>
            {props.characters.map(character => 
              <CharacterList 
                character={character}
                handleDeleteCharacter={props.handleDeleteCharacter}
                key={character._id}
              />
            )}
          </div>
          </>
        )}
      </>
    );
  }

export default CharactersPage;