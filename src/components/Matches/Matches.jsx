import React from 'react';

const Matches = (props) => {
    return (
        <div>
            <h1>Match against {props.match.enemy}</h1>
            {props.match.yourStocks} - {props.match.enemyStocks}
            {props.match.yourStocks > props.match.enemyStocks ? 'Win' : 'Loss'}
        </div>
    )
}

export default Matches;