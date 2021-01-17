import {LOAD_TICKETS} from '../reducers/ticketsReducer'



export const loadTickets = (tickets) => ({ type: LOAD_TICKETS, tickets })

export const getAllTickets = (id) => async (dispatch) => {
    try {
        const res = await fetch(`/api/users/${id}/tickets`)
        if (res.ok) {
            const { tickets} = await res.json()
            if (tickets) {
                dispatch(loadTickets(tickets))
            }
        }
    } catch (e) {
        console.log(e)
    }
} 
