import React from 'react';

const Moves = (props) => {
    const character = props.location.state;
    return (
        <div>
            {character.moves.map(move =>
                <div>Move: {move.name} Damage: {move.damage}</div>
            )}
        </div>
    )
}

export default Moves;