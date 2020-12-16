export const CREATE_CLUB = 'CREATE_CLUB';


export default function reducer(state = {}, action){
    switch (action.type) {
        case CREATE_CLUB:
            return {
                ...state.type,
                id: action.id,
                name: action.name,
                description: action.description,
                city: action.city,
                state: action.state,
                address: action.address,
                club_cover_pic: action.club_cover_pic,
                owner_id: action.owner_id
            }
            default: 
                return state;
    }
}

