import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from 'react-bootstrap';

// Need to implement filter method for search input
// Map all the form field and display it with title
// onCLick of notes display the notes with it's content


const NotesList = () => {
    return (
        <div className="notes-list">
            <InputGroup className="mb-2" style={{padding: "20px"}}>
                <FormControl
                    placeholder="Search Notes"
                />
            </InputGroup>
            
        </div>
    )
}

export default NotesList;