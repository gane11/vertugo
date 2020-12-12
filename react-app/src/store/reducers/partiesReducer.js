export const LOAD_PARTIES = 'LOAD_PARTIES';

export const loadParties = (parties) => ({type: LOAD_PARTIES, parties})


export default function reducer(state = {}, action) {
    switch (action.type) {
        case LOAD_PARTIES: {
            return {
                ...state, 
                parties: action.parties
            }
        }

        default: return state;
    }
}