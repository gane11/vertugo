import merge from 'lodash/merge'
export const LOAD_TICKETS = 'LOAD_TICKETS';


export default function reducer(state = {}, action) {
    Object.freeze(state)

    switch (action.type) {
        case LOAD_TICKETS: {
            const tickets = action.tickets.map((ticket) => ({ [ticket.id]: ticket}))
            return merge({}, state, ...tickets)
        }

        default: return state;
    }
}