import { CREATE_PARTY } from '../reducers/createPartyReducer';

export const createParty = (party) => {
    return async dispatch => {
        try {
            const res = await fetch(`/api/parties/`, {
                method: 'POST',
                body: party
            });

            if (res.ok) {
                const data = await res.json();
                dispatch({
                    type: CREATE_PARTY,
                    ...data
                });
                return data;
            }

            // return await res.json();
        } catch (e) {
            console.log(e);
        }
    }
}