import {combineReducers} from 'redux';
import appTestReducer from './app.reducer';

const reducers = combineReducers({
    appReducer: appTestReducer,
});

export default reducers;