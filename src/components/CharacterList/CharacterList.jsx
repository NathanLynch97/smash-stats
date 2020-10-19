import React from 'react';
import {Link} from 'react-router-dom';

function CharacterList({character, handleDeleteCharacter}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{character.name}</h3>
      </div>
      <div className='panel-footer'>
        <Link
          to={{
            pathname: '/details',
            state: {character}
          }}
        >
          DETAILS
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteCharacter(character._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default CharacterList;