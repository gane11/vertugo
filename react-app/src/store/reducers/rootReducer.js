import { combineReducers } from 'redux';
import user from './signupReducer';
import parties from './partiesReducer';
import clubs from './clubsReducer'
import club from './clubReducer'
import newClub from './createClubReducer'
import saveParty from './savePartyReducer'
import clubPictures from './clubPicturesReducer'
import savedParties from './savedPartiesReducer'
import buyTicket from './buyTicketReducer'
import tickets from './ticketsReducer'

const rootReducer = combineReducers({
    user,
    parties,
    clubs,
    club,
    newClub,
    saveParty,
    clubPictures,
    savedParties,
    buyTicket,
    tickets
});

export default rootReducer;