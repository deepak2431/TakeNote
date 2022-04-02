const initialState = {
    scratchPad: false,
    isFavMode: false,
}
export const PanelReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'SCRATCH_PAD_MODE': {
            return {
                ...state,
                scratchPad: actions.payload,
            }
        }
        case 'NEW_NOTE_CLICKED': 
        return {
            ...state,
            scratchPad: actions.payload,
        }
        case 'SET_FAV_MODE': 
        return {
            ...state,
            isFavMode: actions.payload
        }
        default:
            return state;
    }
};

