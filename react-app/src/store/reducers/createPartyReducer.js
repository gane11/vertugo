export const CREATE_PARTY = 'CREATE_PARTY';


export default function reducer(state = {}, action) {
    switch (action.type) {
        case CREATE_PARTY:
            return {
                ...state,
                id: action.id,
                description: action.description,
                start_date: action.start_date,
                end_date: action.end_date,
                club_id: action.club_id,
                ticket_count: action.ticket_count,
                party_cover_pic: action.party_cover_pic
            }
        default:
            return state;
    }
}

