export const LOAD_CLUBS = 'LOAD_CLUBS'

export default function reducer(state = [], action) {
    Object.freeze(state)

    switch(action.type) {
        case LOAD_CLUBS: {
            return {
                ...state,
                clubs: action.clubs
            }
        }
        
        default: return state;
    }
}