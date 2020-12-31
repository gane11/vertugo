export const BUY_TICKET = 'BUY_TICKET';


export default function reducer(state = {}, action) {
    switch (action.type) {
        case BUY_TICKET:
            return {
                ...state,
                id: action.id,
                expired: action.expired,
                start_date: action.start_date,
                end_date: action.end_date,
                qr_code: action.qr_code,
                party_id: action.party_id,
                user_id: action.user_id
            }
        default:
            return state;
    }
}

