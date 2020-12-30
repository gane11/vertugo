import merge from 'lodash/merge'
export const LOAD_CLUBS = 'LOAD_CLUBS'
export const LOAD_SEARCH_CLUBS = 'LOAD_SEARCH_CLUBS'

export default function reducer(state = {}, action) {
    Object.freeze(state)

    switch(action.type) {
        case LOAD_CLUBS: {
            const clubs = action.clubs.map((club)=> ({[club.id]: club}))
              return merge({}, state, ...clubs)

        }

        case LOAD_SEARCH_CLUBS: {
            const clubs = action.clubs.map((club) => ({ [club.id]: club }))
            return merge({}, state, ...clubs)
        }
        default: return state;
    }
}