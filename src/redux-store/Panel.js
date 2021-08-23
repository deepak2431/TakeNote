<<<<<<< HEAD
export const scratchPadReducer = (state = 0, actions) => {
    switch (actions.type) {
        case 'UPDATE_PAD_BOOL':
            return !state;
=======
const PanelReducer = (state = false, actions) => {
    switch (actions.type) {
        case 'UPDATE_PAD_BOOL':
            return !state;

>>>>>>> 7ba356ec4eafab347ecd77933e844aa3ce749616
        default:
            return state;
    }
};
<<<<<<< HEAD
export const NewNoteReducer = (state = 0, actions) => {
    switch(actions.type) {
        case 'INIT_NEW_NOTE':
            return !state;
        default:
            return state;
    }
}
=======

export default PanelReducer;
>>>>>>> 7ba356ec4eafab347ecd77933e844aa3ce749616
