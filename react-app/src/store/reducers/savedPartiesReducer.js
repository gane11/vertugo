import merge from 'lodash/merge'
export const LOAD_SAVED= 'LOAD_SAVED'
export const REMOVE_SAVED_PARTY = 'REMOVE_SAVED_PARTY'

export default function reducer(state = {}, action) {

    switch (action.type) {
        case LOAD_SAVED: {
            const savedParties= action.savedParties.map((savedParty) => ({ [savedParty.id]: savedParty }))
            return merge({}, state, ...savedParties)

        }

        case REMOVE_SAVED_PARTY: {
            console.log('did it')
            return state.savedParties.filter(savedParty => savedParty.id !== action.id);
        }
        default: return state;
    }
}