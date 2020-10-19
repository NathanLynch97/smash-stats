import React from 'react';

const Notes = (props) => {
    return (
        <div>
            {props.note.description}
        </div>
    )
}

export default Notes;