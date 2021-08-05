import React, { useState } from 'react';

import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';


const NoteEditor = () => {

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const [convertedContent, setConvertedContent] = useState("");

    const handleEditorChange = (state) => {
        setEditorState(state);
        //convertContentToHTML();
      }
    /*const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    }*/
    const createMarkup = (html) => {
        return  {
          __html: DOMPurify.sanitize(html)
        }
      }
      
    return(
        <div className="note-editor">
            <Editor 
                defaultEditorState={editorState}
                onChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
            <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
        </div>
    )
};

export default NoteEditor;