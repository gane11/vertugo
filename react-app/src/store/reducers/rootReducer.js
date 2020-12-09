import { combineReducers } from 'redux';
import user from './signupReducer';


const rootReducer = combineReducers({
    user,
});

export default rootReducer;