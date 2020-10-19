import React from 'react';
import CharacterDetailCard from '../../components/CharacterDetailCard/CharacterDetailCard';
import Matches from '../../components/Matches/Matches';
import Notes from '../../components/Notes/Notes';
import { Link } from 'react-router-dom';

const DetailsPage = (props) => {
    const character = props.location.state.character;
    return (
        <>
            <CharacterDetailCard 
                key={character._id}
                character={character}
            />
            <Link
                to={{
                    pathname: '/moves',
                    state: character
                }}
             >
                MOVES
            </Link>
            <br />
            <h3>Matches:</h3>
            <Link to={`/${character._id}/addmatch`}>
                ADD MATCH
            </Link>
            {character.matches.map(match => 
                <Matches 
                    match={match}
                    character_id={character._id}
                    handleDeleteMatch={props.handleDeleteMatch}
                    key={match._id}
                />    
            )}
            <h3>Notes:</h3>
            <Link to={`/${character._id}/addnote`}>
                ADD NOTE
            </Link>
            {character.notes.map(note => 
                <div>
                    <Notes 
                        note={note}
                        character_id={character._id}
                        handleDeleteNote={props.handleDeleteNote}
                        key={note._id}
                    />
                </div>
                
            )}
        </>
    )
}

export default DetailsPage;