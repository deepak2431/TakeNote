import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from 'draft-convert';
import { useSelector, useDispatch } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from 'react-bootstrap';
import * as uuid from 'uuid';

const NoteEditor = () => {

    const dispatch = useDispatch();
    const isScratchPad = useSelector((state) => state.Panel.scratchPad)
    const editorTitle = useSelector((state) => state.editor.title)
    const editorState = useSelector((state) => state.editor.editorState)
    const [convertedContent, setConvertedContent] = useState(null);
    
    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
        dispatch({ type: 'SET_EDITOR_CONTENT', payload: convertedContent })
    }
    const handleClick = () => {
        if (editorTitle !== '') {
            let note_key = uuid.v4();
            let note = { key: note_key.toString(), title: editorTitle, notes: convertedContent }
            dispatch({ type: 'SAVE_NOTES', payload: note })
        }
    }


    return (
        <div className="note-editor" style={{ marginTop: "30px" }}>
            {!isScratchPad &&
                <Row>
                    <Col md={6} xs={12}>
                        <InputGroup className="mb-2">
                            <FormControl
                                placeholder="Enter the note title"
                                value={editorTitle}
                                onChange={(e) => {
                                    dispatch({ type: 'SET_TITLE', payload: e.target.value })
                                }}
                            />
                        </InputGroup>
                    </Col>
                </Row>
            }
            <Editor
                defaultEditorState={editorState}
                onEditorStateChange={updatedState => {
                    dispatch({ type: 'SET_EDITOR_STATE', payload: updatedState })
                    convertContentToHTML()
                }}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
            {!isScratchPad &&
                <Button
                    style={{ margin: "30px", float: "right" }}
                    onClick={handleClick}
                >
                    Save Note
            </Button>}
        </div>
    )
};

export default NoteEditor;