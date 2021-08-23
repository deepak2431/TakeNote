export const scratchPadReducer = (state = 0, actions) => {
    switch (actions.type) {
        case 'UPDATE_PAD_BOOL':
            return !state;
        default:
            return state;
    }
};
export const NewNoteReducer = (state = 0, actions) => {
    switch(actions.type) {
        case 'INIT_NEW_NOTE':
            return !state;
        default:
            return state;
    }
}
