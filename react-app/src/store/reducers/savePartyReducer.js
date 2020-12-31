import merge from 'lodash/merge'
export const SAVE_PARTY = 'SAVE_PARTY';



export default function reducer(state = {}, action) {
    

    switch (action.type) {
        case SAVE_PARTY: 
        return {
            
            ...state, 
            id: action.id,
            party_id: action.party_id,
            user_id: action.user_id
        }
        
        default:
            return state;
    }
}

