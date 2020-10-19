import React from 'react';
import { Link } from 'react-router-dom';

const Notes = (props) => {
    return (
        <div>
            <h5>{props.note.description}</h5>
            <button className="btn" onClick={() => props.handleDeleteNote(props.note._id, props.character_id)}>X</button>
            <Link 
                to={{
                    pathname:`/${props.character_id}/updatenote`,
                    state: props.note
                }}
            >
                Update
            </Link>
        </div>
        
    )
}

export default Notes;