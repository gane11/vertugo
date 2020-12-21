export const SAVE_PARTY = 'SAVE_PARTY';
export const LOAD_SAVED_PARTY = 'LOAD_SAVED_PARTY'
export const REMOVE_SAVED_PARTY = 'REMOVE_SAVED_PARTY'


export default function reducer(state = {}, action) {
    switch (action.type) {
        case SAVE_PARTY:
            return {
                ...state,
                saved_party: action.saved_party
            }

        case LOAD_SAVED_PARTY:
            return action.load_saved_party

        case REMOVE_SAVED_PARTY:
            return {
            ...state,
                
            }

        default:
            return state;
    }
}

