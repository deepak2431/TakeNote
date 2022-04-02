import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl, Stack, Nav } from 'react-bootstrap';
import { JournalCheck, Star, Trash } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

const NotesCard = ({ title, keys, content }) => {

    const dispatch = useDispatch();
    return (
        <div className="notes-card">
            <div className="notes-title">
                <h6
                    style={{ padding: 20, color: 'white' }}
                >
                    {title}
                    <br></br>
                    <JournalCheck />
                </h6>
                <Stack direction="horizontal" gap={1}>
                <Button
                    style={{ background: 'white', color: 'black', padding: 5, margin: 5 }}
                    onClick={() => {
                        dispatch({ type: 'SET_NOTES_VIEW_MODE', payload: true })
                        dispatch({ type: 'SET_SET_NOTES_ID', payload: keys })
                    }}
                >
                    View Notes
                </Button>
                <Nav.Link onClick={() => {
                    let note = {key: keys, title: title, notes: content }
                    dispatch({ type: 'SET_FAV_NOTES', payload: note})
                }}>
                    <Star/>
                </Nav.Link>
                <Nav.Link><Trash /></Nav.Link>
                </Stack>
            </div>
        </div>
    )
}

const NotesList = () => {

    const allNotes = useSelector((state) => state.editor.notes)
    const favNotes = useSelector((state) => state.editor.favNotes)
    const isFavMode = useSelector((state) => state.Panel.isFavMode)

    const notes = isFavMode ? favNotes : allNotes
    
    return (
        <div className="notes-list">
            <InputGroup className="mb-2" style={{ padding: "20px" }}>
                <FormControl
                    placeholder="Search Notes"
                />
            </InputGroup>
            {
                notes.map((note) => {
                    return (
                        <NotesCard
                            title={note.title}
                            keys={note.key}
                            content={note.notes}
                        />
                    )
                })
            }
        </div>
    )
}

export default NotesList;