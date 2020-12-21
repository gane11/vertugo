import { combineReducers } from 'redux';
import user from './signupReducer';
import parties from './partiesReducer';
import clubs from './clubsReducer'
import club from './clubReducer'
import newClub from './createClubReducer'
import saveParty from './savePartyReducer'

const rootReducer = combineReducers({
    user,
    parties,
    clubs,
    club,
    newClub,
    saveParty
});

export default rootReducer;