import { SAVE_PARTY, LOAD_SAVED_PARTY } from '../reducers/savePartyReducer';

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

export const loadSavedParty = (saved_party) => ({type:LOAD_SAVED_PARTY, saved_party})

export const getSavedParties = (user_id, party_id) =>  {
    return async dispatch => {
        try{
            const res = await fetch(`/api/users/${user_id}/parties/${party_id}/save`)
            if(res.ok) {
                const saved_party = await res.json()
                dispatch(loadSavedParty(saved_party))
            }
        } catch (e) {
        console.log(e)
    }
    }
}