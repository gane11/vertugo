import {LOAD_TICKETS, REMOVE_TICKET} from '../reducers/ticketsReducer'



export const loadTickets = (tickets) => ({ type: LOAD_TICKETS, tickets })

export const getAllTickets = (id) => async (dispatch) => {
    try {
        const res = await fetch(`/api/users/${id}/tickets`)
        if (res.ok) {
            const { tickets} = await res.json()
            console.log(tickets)
            if (tickets) {
                dispatch(loadTickets(tickets))
            }
        }
    } catch (e) {
        console.log(e)
    }
} 


export const removeTicket = (id) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`/api/tickets/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                return dispatch({
                    type: REMOVE_TICKET,
                    id: data.id
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
}