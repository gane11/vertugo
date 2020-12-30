export const LOAD_USER = "LOAD_USER";
export const LOGOUT_USER = "LOGOUT_USER"

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_USER:
            return {
                ...state,
                id: action.id,
                owner:action.owner,
                firstName: action.first_name,
                lastName: action.last_name,
                email: action.email,
            }

        case LOGOUT_USER: {
                const newState = { ...state }
                delete newState.user
                return newState;
            }
        default:
            return state;
    }
};


export default userReducer;