import { EditorState } from 'draft-js';
const initialState = {
    title: '',
    editorContent: null,
    note: {},
    editorState: EditorState.createEmpty(),
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
                note: actions.payload
            }
        }
        case 'SET_EDITOR_STATE': {
            return {
                ...state,
               editorState: actions.payload
            }
        }
        default:
            return state;
    }
};
