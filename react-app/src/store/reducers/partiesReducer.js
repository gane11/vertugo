import merge from 'lodash/merge'
export const LOAD_PARTIES = 'LOAD_PARTIES';


export default function reducer(state = [], action) {
    Object.freeze(state)

    switch (action.type) {
        case LOAD_PARTIES: {
            const parties = action.parties.map((party) => ({ [party.id]: party }))
            return merge({}, state, ...parties)
        }

        default: return state;
    }
}