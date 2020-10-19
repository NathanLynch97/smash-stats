import React from 'react';
import './CharacterDetailCard.css';

const CharacterDetailsCard = (props) => {
    return (
        <div className="CharacterDetailCard">
            <h2>{props.character.name}</h2>
            <img src={`${props.character.img}`} alt="character details"/>
        </div>
    )
}

export default CharacterDetailsCard;