export const LOAD_USER = "LOAD_USER";
export const LOGIN_USER = "LOGIN_USER"

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

        // case LOGIN_USER: 
        //     return {
        //         ...state,

        //     }
        default:
            return state;
    }
};


export default userReducer;