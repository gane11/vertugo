import merge from 'lodash/merge'
export const LOAD_TICKETS = 'LOAD_TICKETS';
export const REMOVE_TICKET = 'REMOVE_TICKET'


export default function reducer(state = {}, action) {
    // Object.freeze(state)

    switch (action.type) {
        case LOAD_TICKETS: {
            const tickets = action.tickets.map((ticket) => ({ [ticket.id]: ticket}))
            return merge({}, state, ...tickets)
        }

        case REMOVE_TICKET: {
            console.log(action.id)
            delete state[action.id]
        }

        default: return state;
    }
}