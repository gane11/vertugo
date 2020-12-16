import { SAVE_PARTY } from '../reducers/savePartyReducer';

export const saveParty = (savedParty) => async (dispatch) => {
    try{
        const res = await fetch(`/api/users/${user_id}/parties/${party_id}/save/`, {
            method: 'POST',
            body: savedParty
        });

    if (res.ok) {
        const data = await res.json()
        dispatch({
            type: SAVE_PARTY,
            ...data
        });
        return data
    }
} catch (e) {
    console.log(e)
}
}