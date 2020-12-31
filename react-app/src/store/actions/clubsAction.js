import {LOAD_CLUBS} from '../reducers/clubsReducer'
// import { LOAD_SEARCH_CLUBS } from '../reducers/clubsReducer'



export const loadClubs = (clubs) => ({type: LOAD_CLUBS, clubs})

export const getAllClubs = () => async(dispatch) => {
    const res = await fetch('/api/clubs/')
    if(res.ok) {
        const {clubs} = await res.json()
        dispatch(loadClubs(clubs))
    }
} 



// export const loadSearchClubs = (clubs) => ({ type: LOAD_CLUBS, clubs })


// export const getAllSearchClubs = (searchValue) => async (dispatch) => {
//     const res = await fetch(`/api/clubs/${searchValue}`)
//     if (res.ok) {
//         const { clubs } = await res.json()
//         dispatch(loadClubs(clubs))
//     }
// } 
