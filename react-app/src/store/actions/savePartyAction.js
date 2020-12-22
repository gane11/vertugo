import { SAVE_PARTY, LOAD_SAVED_PARTY, REMOVE_SAVED_PARTY } from '../reducers/savePartyReducer';

export const saveParty = (user_id, party_id) => {
return async dispatch => {
    try{
        const res = await fetch(`/api/users/${user_id}/parties/${party_id}/save`, {
            method: 'POST',
        });

    if (res.ok) {
        const data = await res.json()
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

export const getSavedParties = (user_id) =>  {
    return async dispatch => {
        try{
            const res = await fetch(`/api/users/${user_id}/parties/save/`)
            if(res.ok) {
                const {saved_parties} = await res.json()
                dispatch(loadSavedParties(saved_parties))
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
                return dispatch({type: REMOVE_SAVED_PARTY,
                    saved_party: data})
            }
        } catch(e) {
            console.log(e)
        }
    }
}