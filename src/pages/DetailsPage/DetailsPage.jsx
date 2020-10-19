import React from 'react';
import CharacterDetailsCard from '../../components/CharacterDetailCard/CharacterDetailCard';
import Matches from '../../components/Matches/Matches';
import Notes from '../../components/Notes/Notes';

const DetailsPage = (props) => {
    const character = props.location.state.character;
    return (
        <>
            <CharacterDetailsCard 
                key={character._id}
                character={character}
            />
            {character.matches.map(match => 
                <Matches 
                    match={match}
                />    
            )}
            {character.notes.map(note => 
                <Notes 
                    note={note}
                />
            )}
        </>
    )
}

export default DetailsPage;