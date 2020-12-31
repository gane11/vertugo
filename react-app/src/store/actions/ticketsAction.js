import {LOAD_TICKETS} from '../reducers/ticketsReducer'


export const loadTickets = (tickets) => ({type: LOAD_TICKETS, tickets})

export const getAllTickets = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/tickets`)
    if(res.ok) {
        const {tickets} = await res.json()
        dispatch(loadTickets(tickets))
    }
}