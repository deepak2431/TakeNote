import { combineReducers } from 'redux';
import { PanelReducer } from './Panel';
import { EditorReducer } from './Editor';

const rootReducers = combineReducers({
    Panel: PanelReducer,
    editor: EditorReducer,
});

export default rootReducers;