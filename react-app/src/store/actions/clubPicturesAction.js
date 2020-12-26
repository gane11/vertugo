import { LOAD_CLUB_PICTURES } from '../reducers/clubPicturesReducer'

export const loadPictures = (pictures) => ({ type: LOAD_CLUB_PICTURES, pictures })

export const getAllClubPictures = (id) => async (dispatch) => {
    const res = await fetch(`/api/clubs/${id}`)
    if (res.ok) {
        const { pictures } = await res.json()
        dispatch(loadPictures(pictures))
    }
}

