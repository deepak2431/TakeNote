import {combineReducers} from 'redux';
import  {scratchPadReducer, NewNoteReducer}  from  './Panel';

const rootReducers = combineReducers({
    scratchPad: scratchPadReducer,
    newNote: NewNoteReducer
});

export default rootReducers;