import {LOAD_CLUB} from '../reducers/clubReducer';

export const loadClub = (club) => ({type: LOAD_CLUB, club})


export const getClub = (id) => async (dispatch) => {
    const res = await fetch(`/api/clubs/${id}`)

    if(res.ok) {
        const club = await res.json()
        dispatch(loadClub(club))
    }
}