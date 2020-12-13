import { combineReducers } from 'redux';
import user from './signupReducer';
import parties from './partiesReducer';
import clubs from './clubsReducer'
import club from './clubReducer'


const rootReducer = combineReducers({
    user,
    parties,
    clubs,
    club
});

export default rootReducer;