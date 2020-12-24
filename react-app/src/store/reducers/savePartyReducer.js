import merge from 'lodash/merge'
export const SAVE_PARTY = 'SAVE_PARTY';
export const LOAD_SAVED_PARTY = 'LOAD_SAVED_PARTY'
export const REMOVE_SAVED_PARTY = 'REMOVE_SAVED_PARTY'


export default function reducer(state = [], action) {
    Object.freeze(state)

    switch (action.type) {
        case SAVE_PARTY:
            return {
                ...state,
                saved_party: action.saved_party
            }

        case LOAD_SAVED_PARTY: {
            const saved_parties = action.saved_parties.map((saved_party) => ({ [saved_party.id]: saved_party}))
            return merge({}, state, ...saved_parties)

        }
        case REMOVE_SAVED_PARTY:
           return state.filter(saved_parties => {
               return saved_parties.id !== action.id
           })

        default:
            return state;
    }
}
