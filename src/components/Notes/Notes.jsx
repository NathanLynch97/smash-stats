import React from 'react';

const Notes = (props) => {
    return (
        <div>
            <h5>{props.note.description}</h5>
            <button className="btn" onClick={() => props.handleDeleteNote(props.note._id, props.character_id)}>X</button>
        </div>
        
    )
}

export default Notes;