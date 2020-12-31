import merge from 'lodash/merge'
export const LOAD_SAVED_PARTY = 'LOAD_SAVED_PARTY'
export const REMOVE_SAVED_PARTY = 'REMOVE_SAVED_PARTY'

export default function reducer(state = {}, action) {
    Object.freeze(state)

    switch (action.type) {
        case LOAD_SAVED_PARTY: {
            const savedParties = action.savedParties.map((savedParty) => ({ [savedParty.id]: savedParty }))
            return merge({}, state, ...savedParties)

        }

        case REMOVE_SAVED_PARTY: {
            return state.filter(savedParties => savedParties.id !== action.id);
        }
        default: return state;
    }
}