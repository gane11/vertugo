import merge from 'lodash/merge'
export const LOAD_CLUB_PICTURES = 'LOAD_CLUB_PICTURES'

const CLEAR_CLUB_PICTURES = 'CLEAR_CLUB_PICTURES';

export const clearAllClubPictures = () => ({
    type: CLEAR_CLUB_PICTURES,
});

export default function reducer(state = {}, action) {
   

    switch (action.type) {
        case LOAD_CLUB_PICTURES: {
                const clubPictures = action.clubPictures.map((clubPicture) => ({ [clubPicture.id]: clubPicture }))
              return merge({}, state, ...clubPictures)

            }
        case CLEAR_CLUB_PICTURES: {
            return {};
        }
        
        default: return state;
    }
}