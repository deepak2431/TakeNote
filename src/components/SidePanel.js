import React from 'react';
import { EditorState } from 'draft-js';
import { useDispatch } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import { Plus, PencilSquare, Star, Trash } from 'react-bootstrap-icons';

const SidePanel = () => {

    const dispatch = useDispatch();
    return (
        <div className="side-panel">
            <Nav className="flex-column app-sidebar">
                <Nav.Link onClick={() => {
                    dispatch({ type: 'SET_NOTES_VIEW_MODE', payload: false })
                    dispatch({ type: 'NEW_NOTE_CLICKED', payload: false })
                    dispatch({ type: 'SET_TITLE', payload: '' })
                    dispatch({ type: 'SET_EDITOR_STATE', payload: EditorState.createEmpty() })
                }}
                >
                    <Plus color="royalblue" size={40} />New Note</Nav.Link>
                <Nav.Link onClick={() => {
                    dispatch({ type: 'SET_NOTES_VIEW_MODE', payload: false })
                    dispatch({ type: 'SCRATCH_PAD_MODE', payload: true })
                }}>
                    <PencilSquare size={18} /> ScratchPad</Nav.Link>
                <Nav.Link><Star /> Favourites</Nav.Link>
                <Nav.Link><Trash /> Trash</Nav.Link>
            </Nav>
        </div>
    )
}

export default SidePanel;