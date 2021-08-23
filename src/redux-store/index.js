import {combineReducers} from 'redux';
<<<<<<< HEAD
import  {scratchPadReducer, NewNoteReducer}  from  './Panel';

const rootReducers = combineReducers({
    scratchPad: scratchPadReducer,
    newNote: NewNoteReducer
=======
import  scratchPadReducer  from './scratchPad';

const rootReducers = combineReducers({
    scratchPad: scratchPadReducer,
>>>>>>> 7ba356ec4eafab347ecd77933e844aa3ce749616
});

export default rootReducers;