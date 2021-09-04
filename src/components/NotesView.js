import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DOMPurify from 'dompurify';


const NotesViewMode = () => {

    const noteId = useSelector((state) => state.editor.clickedNotesId)
    const notes = useSelector((state) => state.editor.notes)
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        }
    }

    const setNoteView = () => {
        for (let i = 0; i < notes.length; i++) {
            let note = notes[i];
            if (note.key === noteId) {
                setTitle(note.title)
                setContent(note.notes)
            }
        }
    }
    useEffect(() => {
        setNoteView();
        // eslint-disable-next-line
    }, [noteId])

    return (
        <>
            <h3 style={{ margin: 20 }}>{title}</h3>
            <div className="notes-view">
                <div className="notes-content" style={{padding: 30}} dangerouslySetInnerHTML={createMarkup(content)}></div>
            </div>
        </>
    )
}

export default NotesViewMode;