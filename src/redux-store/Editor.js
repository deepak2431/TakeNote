import { EditorState } from 'draft-js';
const initialState = {
    title: '',
    editorContent: null,
    notes: [],
    editorState: EditorState.createEmpty(),
    notesViewMode: false,
    clickedNotesId: '',
}

export const EditorReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'SET_TITLE':
            return {
                ...state,
                title: actions.payload
            }
        case 'SET_EDITOR_CONTENT':
            return {
                ...state,
                editorContent: actions.payload
            }
        case 'SAVE_NOTES': {
            return {
                ...state,
                notes: [...state.notes, actions.payload]
            }
        }
        case 'SET_EDITOR_STATE': {
            return {
                ...state,
               editorState: actions.payload
            }
        }
        case 'SET_NOTES_VIEW_MODE': {
            return {
                ...state,
               notesViewMode: actions.payload
            }
        }
        case 'SET_SET_NOTES_ID': {
            return {
                ...state,
                clickedNotesId: actions.payload
            }
        }
        default:
            return state;
    }
};
