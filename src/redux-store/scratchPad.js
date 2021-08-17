const scratchPadReducer = (state = 0, actions) => {
    switch (actions.type) {
        case 'UPDATE_PAD_BOOL':
            return !state;
        default:
            return state;
    }
};

export default scratchPadReducer;



