import merge from 'lodash/merge'
export const LOAD_CLUB_PICTURES = 'LOAD_CLUB_PICTURES'

export default function reducer(state = {}, action) {
    Object.freeze(state)

    switch (action.type) {
        case LOAD_CLUB_PICTURES: {
                const clubPictures = action.clubPictures.map((clubPicture) => ({ [clubPicture.id]: clubPicture }))
              return merge({}, state, ...clubPictures)

            }

        
        default: return state;
    }
}