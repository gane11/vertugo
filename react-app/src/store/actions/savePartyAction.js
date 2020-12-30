import { SAVE_PARTY, LOAD_SAVED_PARTY, REMOVE_SAVED_PARTY } from '../reducers/savePartyReducer';

export const saveParty = (user_id, party_id) => {
return async dispatch => {
    try{
        const res = await fetch(`/api/users/${user_id}/parties/${party_id}/save`, {
            method: 'POST',
        });

    if (res.ok) {
        const data = await res.json()
        console.log(data)
        dispatch({
            type: SAVE_PARTY,
            saved_party: data
        });
        return data
    }
} catch (e) {
    console.log(e)
}
}
}

export const loadSavedParties = (saved_parties) => ({type:LOAD_SAVED_PARTY, saved_parties})

export const getSavedParties = (id) =>  {
    return async dispatch => {
        try{
            const res = await fetch(`/api/users/${id}/parties/save`)
            if(res.ok) {
                const savedParties = await res.json()
                console.log(savedParties)
                dispatch(loadSavedParties(savedParties))
            }
        } catch (e) {
        console.log(e)
    }
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
            if(res.ok) {
                const data = await res.json()
                const saved_party_id = data.id
                return dispatch({type: REMOVE_SAVED_PARTY,
                    id: saved_party_id})
            }
        } catch(e) {
            console.log(e)
        }
    }
}