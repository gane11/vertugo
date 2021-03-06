import { LOAD_CLUB_PICTURES } from '../reducers/clubPicturesReducer'

export const loadPictures = (clubPictures) => ({ type: LOAD_CLUB_PICTURES, clubPictures })

export const getAllClubPictures = (id) => async (dispatch) => {
    const res = await fetch(`/api/clubs/${id}/pictures`)
    if (res.ok) {

            const {clubPictures}  = await res.json()
            if(clubPictures) {

                dispatch(loadPictures(clubPictures))
            }
    }
}

