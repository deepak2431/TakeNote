import React, { useState, useEffect } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import { EditorState } from 'draft-js';
import { useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from 'react-bootstrap';

// Save notes as a object with title and content in redux store


const NoteEditor = () => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const [convertedContent, setConvertedContent] = useState(null);
    const [title, setTitle] = useState();
    const [isSaveClicked, setIsSaveClicked] = useState(false);


    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    }
    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        }
    }
    const handleTitleForm = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }
    const handleSaveButton = () => {
        if (isScratchPad) {
            return;
        }
        else {
            setIsSaveClicked(true);
        }
    }
    const isScratchPad = useSelector((state) => state.scratchPad)
    const isNewNote = useSelector((state) => state.newNote)

    useEffect(() => {
        setConvertedContent(null);
        setTitle('');
        setIsSaveClicked(null);
    }, [isNewNote, isScratchPad])

    return (
        <div className="note-editor" style={{ marginTop: "30px" }}>
            {(!isScratchPad && !isSaveClicked) &&
                <Row>
                    <Col md={6} xs={12}>
                        <InputGroup className="mb-2">
                            <FormControl
                                placeholder="Enter the note title"
                                onChange={handleTitleForm}
                                value={title}
                            />
                        </InputGroup>
                    </Col>
                    <Col md={3} xs={12}>
                        <Button onClick={handleSaveButton}>Save Title</Button>
                    </Col>
                </Row>
            }
            {(isSaveClicked && !isScratchPad) &&
                <Row>
                    <Col md={6} xs={12}>
                        <h3>{title}</h3>
                    </Col>
                </Row>
            }
            <Editor
                defaultEditorState={editorState}
                onEditorStateChange={updatedState => {
                    setEditorState(updatedState)
                    convertContentToHTML()
                }}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
            <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
            {!isScratchPad && <Button style={{ margin: "30px", float: "right" }}>Save Note</Button>}
        </div>
    )
};

export default NoteEditor;