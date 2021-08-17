import {combineReducers} from 'redux';
import  scratchPadReducer  from './scratchPad';

const rootReducers = combineReducers({
    scratchPad: scratchPadReducer,
});

export default rootReducers;