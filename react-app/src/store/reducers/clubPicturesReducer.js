import merge from 'lodash/merge'
export const LOAD_CLUB_PICTURES = 'LOAD_CLUB_PICTURES'

export default function reducer(state = {}, action) {

    switch (action.type) {
        case LOAD_CLUB_PICTURES: {
            return {
                ...state,
                clubPictures: action.clubPictures.clubPictures
            }

        }
        default: return state;
    }
}