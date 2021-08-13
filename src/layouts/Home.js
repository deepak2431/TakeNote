import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NoteEditor from "../components/NoteEditor";
import SidePanel from "../components/SidePanel";
import NotesList from "../components/NotesList";


const Home = () => {
    return (
        <div className="home">
            <Row>
                <Col md={2} xs={12}>
                    <SidePanel />
                </Col>
                <Col md={3} xs={12}>
                    <NotesList />
                </Col>
                <Col md={7} xs={12}>
                    <NoteEditor />
                </Col>
            </Row>
        </div>
    )
};

  
export default Home;