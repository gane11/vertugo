export const SAVE_PARTY = 'SAVE_PARTY';


export default function reducer(state = {}, action) {
    switch (action.type) {
        case SAVE_PARTY:
            return {
                ...state,
                saved_party: action.saved_party
            }
        default:
            return state;
    }
}

