const PanelReducer = (state = false, actions) => {
    switch (actions.type) {
        case 'UPDATE_PAD_BOOL':
            return !state;

        default:
            return state;
    }
};

export default PanelReducer;