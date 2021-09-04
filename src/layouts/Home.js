import React from 'react';
import {useSelector} from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NoteEditor from "../components/NoteEditor";
import SidePanel from "../components/SidePanel";
import NotesList from "../components/NotesList";
import NotesViewMode from '../components/NotesView';

const Home = () => {
    const isNotesViewMode = useSelector(state => state.editor.notesViewMode)
    return (
        <div className="home">
            <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Col md={2} xs={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <SidePanel />
                </Col>
                <Col md={2} xs={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <NotesList />
                </Col>
                <Col md={7} xs={12} style={{ paddingLeft: "20px", paddingRight: 0 }}>
                    {isNotesViewMode ? <NotesViewMode /> :  <NoteEditor /> }
                </Col>
            </Row>
        </div>
    )
};

  
export default Home;