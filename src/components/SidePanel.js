import React from 'react';

import Nav from 'react-bootstrap/Nav';
import { Plus, PencilSquare, Star, Trash } from 'react-bootstrap-icons';

const SidePanel = () => {
    return (
        <div className="side-panel">
                <Nav className="flex-column app-sidebar">
                    <Nav.Link><Plus color="royalblue" size={40} />New Note</Nav.Link>
                    <Nav.Link><PencilSquare size={18} /> ScratchPad</Nav.Link>
                    <Nav.Link><Star /> Favourites</Nav.Link>
                    <Nav.Link><Trash /> Trash</Nav.Link>
                </Nav>
        </div>
    )
}

export default SidePanel;