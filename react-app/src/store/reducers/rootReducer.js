import { combineReducers } from 'redux';
import user from './signupReducer';
import parties from './partiesReducer';
import clubs from './clubsReducer'
import club from './clubReducer'
import newClub from './createClubReducer'

const rootReducer = combineReducers({
    user,
    parties,
    clubs,
    club,
    newClub
});

export default rootReducer;