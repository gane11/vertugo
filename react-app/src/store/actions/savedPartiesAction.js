import {LOAD_SAVED, REMOVE_SAVED_PARTY } from '../reducers/savedPartiesReducer';

// export const loadSavedParties = (savedParties) => ({ type: LOAD_SAVED_PARTY, savedParties })

// export const getSavedParties = (id) => {
//     return async dispatch => {
//         try {
//             const res = await fetch(`/api/users/${id}/parties/save`)
//             if (res.ok) {
//                 const {savedParties} = await res.json()
//                 dispatch(loadSavedParties(savedParties))
//             }
//         } catch (e) {
//             console.log(e)
//         }
//     }
// }


export const loadSaved = (savedParties) => ({ type: LOAD_SAVED, savedParties })

export const getSavedParties = (id) => async (dispatch) => {
    try {
    const res = await fetch(`/api/users/${id}/parties/save`)
    if (res.ok) {
        const { savedParties } = await res.json()
        if(savedParties) {
            dispatch(loadSaved(savedParties)) 
            }
    }
} catch (e) {
    console.log(e)
}
} 


export const removeSavedParty = (user_id, party_id) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`/api/users/${user_id}/parties/${party_id}/save`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (res.ok) {
                const data = await res.json()
                const saved_party_id = data.id
                return dispatch({
                    type: REMOVE_SAVED_PARTY,
                    id: saved_party_id
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
}