import { GET_PROFILE_FAILED, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from "../actions/authTypes"
import { GET_MY_POST_FAILED, GET_MY_POST_REQUEST, GET_MY_POST_SUCCESS } from "../actions/postTypes"

const initState = {
    token: localStorage.getItem('token'),
    isAuth: Boolean(localStorage.getItem('isAuth')),
    user: JSON.parse(localStorage.getItem('user')),
}

const authReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            localStorage.setItem('isAuth', true)
            return {
                ...state,
                isAuth: true,
                token: payload.token
            }
        case GET_PROFILE_SUCCESS:
            localStorage.setItem('user', JSON.stringify(payload))
            return {
                ...state,
                user: payload
            }
        case LOGOUT:
            localStorage.clear()
            return {
                ...state,
                isAuth: false,
                user: null,
                token: null,
            }
        case GET_MY_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errors: null,
                user: {
                    ...state.user,
                    posts: payload
                }
            }
        default:
            return state
    }
}

export default authReducer