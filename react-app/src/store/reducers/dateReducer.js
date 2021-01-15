export const LOAD_DATE = 'LOAD_DATE'

export default function reducer(state = null, action) {
    switch (action.type) {
        case LOAD_DATE: {
            return action.date
        }

        default:
            return state
    }
}