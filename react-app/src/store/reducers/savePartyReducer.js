import merge from 'lodash/merge'
export const SAVE_PARTY = 'SAVE_PARTY';
export const LOAD_SAVED_PARTY = 'LOAD_SAVED_PARTY'
export const REMOVE_SAVED_PARTY = 'REMOVE_SAVED_PARTY'


export default function reducer(state = [], action) {
    

    switch (action.type) {
        case SAVE_PARTY: 
            return [...state, action.savedParty]

        case LOAD_SAVED_PARTY: 
            return [...state, action.savedParty]
           
            

        case REMOVE_SAVED_PARTY:
            const newState = [...state]
           return state.filter(savedParty => {
               return savedParty.id !== action.id
           })

        default:
            return state;
    }
}

