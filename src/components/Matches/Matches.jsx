import React from 'react';
import { Link } from 'react-router-dom';

const Matches = (props) => {
    return (
        <div>
            <div>
                <h4>Match against {props.match.enemy}</h4>
                {props.match.yourStocks} - {props.match.enemyStocks}
                {props.match.yourStocks > props.match.enemyStocks ? 'Win' : 'Loss'}
            </div> 
            <button className="btn" onClick={() => props.handleDeleteMatch(props.match._id, props.character_id)}>X</button>
            <Link 
                to={{
                    pathname:`/${props.character_id}/updatematch`,
                    state: props.match
                }}
            >
                Update
            </Link>
        </div>
        
    )
}

export default Matches;