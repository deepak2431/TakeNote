import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import { EditorState } from 'draft-js';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from 'react-bootstrap';

const NoteEditor = () => {

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const [convertedContent, setConvertedContent] = useState(null);

    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    }
    const createMarkup = (html) => {
        return  {
          __html: DOMPurify.sanitize(html)
        }
      }
      
    return(
        <div className="note-editor" style={{marginTop: "30px"}}>
            <Row>
                <Col md={6} xs={12}>
                <InputGroup className="mb-2">
                <FormControl 
                    placeholder="Enter the note title"
                />
            </InputGroup>
                </Col>
                <Col md={3} xs={12}>
                    <Button>Save Title</Button>
                </Col>
            </Row>
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
            <Button style={{margin: "30px", float: "right"}}>Save Note</Button>
        </div>
    )
};

export default NoteEditor;