import { BUY_TICKET } from '../reducers/buyTicketReducer';

export const buyTicket = (ticket) => {
    return async dispatch => {
        try {
            const res = await fetch(`/api/tickets/`, {
                method: 'POST',
                body: ticket
            });

            if (res.ok) {
                const data = await res.json();
                console.log(data)
                dispatch({
                    type: BUY_TICKET,
                    ...data
                });
                return data;
            }

            // return await res.json();
        } catch (e) {
            console.log(e);
        }
    }
}