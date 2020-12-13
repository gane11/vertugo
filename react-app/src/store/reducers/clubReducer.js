export const LOAD_CLUB = 'LOAD_CLUB'

export default function reducer(state = null, action) {
    switch (action.type) {
        case LOAD_CLUB: {
            return action.club
        }

        default:
            return state
    }
}