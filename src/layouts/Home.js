import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NoteEditor from "../components/NoteEditor";
import SidePanel from "../components/SidePanel";
import NotesList from "../components/NotesList";

const Home = () => {
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
                    <NoteEditor />
                </Col>
            </Row>
        </div>
    )
};

  
export default Home;