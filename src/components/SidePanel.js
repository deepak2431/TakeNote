import React from 'react';
import { useDispatch } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import { Plus, PencilSquare, Star, Trash } from 'react-bootstrap-icons';



const SidePanel = () => {

    const dispatch = useDispatch();
    return (
        <div className="side-panel">
            <Nav className="flex-column app-sidebar">
                <Nav.Link><Plus color="royalblue" size={40} />New Note</Nav.Link>
                <Nav.Link onClick={() => dispatch({type : 'UPDATE_PAD_BOOL'})}><PencilSquare size={18} /> ScratchPad</Nav.Link>
                <Nav.Link><Star /> Favourites</Nav.Link>
                <Nav.Link><Trash /> Trash</Nav.Link>
            </Nav>
        </div>
    )
}

export default SidePanel;