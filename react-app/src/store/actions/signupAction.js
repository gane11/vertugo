import { LOAD_USER, LOGOUT_USER } from '../reducers/signupReducer';


export const signupUser = (user) => {
    return async dispatch => {
        try {
            const res = await fetch(`/api/auth/signup`, {
                method: 'POST',
                body: user
            });

            if (res.ok) {
                const data = await res.json();
                dispatch({
                    type: LOAD_USER,
                    ...data
                });
                localStorage.removeItem('user_id')
                localStorage.setItem("user_id", data.id);
                return data;
            }

            return await res.json();
        } catch (e) {
            console.log(e);
        }
    }
}

export const loadUser = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}`)

    if (response.ok) {
        const data = await response.json();
        dispatch({
            type: LOAD_USER,
            ...data
        });
    }
}

export const logoutUser = () => async (dispatch,) => {
    const response = await fetch(`api/auth/logout`)

    if (response.ok) {
        const data = await response.json()
        dispatch({
            type: LOGOUT_USER,
            ...data
        });
    }
};