import { CREATE_CLUB } from '../reducers/createClubReducer';

export const createClub = (club) => {
    return async dispatch => {
        try {
            const res = await fetch(`/api/clubs`, {
                method: 'POST',
                body: club
            });

            if (res.ok) {
                const data = await res.json();
                dispatch({
                    type: CREATE_CLUB,
                    ...data
                });
                // return data;
            }

            // return await res.json();
        } catch (e) {
            console.log(e);
        }
    }
}