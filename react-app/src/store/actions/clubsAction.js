import {LOAD_CLUBS} from '../reducers/clubsReducer'

export const loadClubs = (clubs) => ({type: LOAD_CLUBS, clubs})

export const getAllClubs = () => async(dispatch) => {
    const res = await fetch('/api/clubs/')
    if(res.ok) {
        const {clubs} = await res.json()
        dispatch(loadClubs(clubs))
    }
} 

