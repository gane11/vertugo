import { combineReducers } from 'redux';
import user from './signupReducer';
import parties from './partiesReducer'


const rootReducer = combineReducers({
    user,
    parties
});

export default rootReducer;