import React from 'react';
import CharacterDetailsCard from '../../components/CharacterDetailCard/CharacterDetailCard';
import Matches from '../../components/Matches/Matches';
import Notes from '../../components/Notes/Notes';
import { Link } from 'react-router-dom';

const DetailsPage = (props) => {
    const character = props.location.state.character;
    return (
        <>
            <CharacterDetailsCard 
                key={character._id}
                character={character}
            />
            <br />
            <Link to={`/${character._id}/addmatch`}>
                ADD MATCH
            </Link>
            {character.matches.map(match => 
                <Matches 
                    match={match}
                    key={match._id}
                />    
            )}
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