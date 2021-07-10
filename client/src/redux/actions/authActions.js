import { GET_PROFILE_FAILED, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./authTypes"
import axios from 'axios'
import { prefixe } from "../../helpers/constant"
import { setToken } from '../../helpers/helpers'
import { getMyPost } from "./postActions"


export const login = (info) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        const res = await axios.post(`${prefixe}/api/user/login`, info)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: LOGIN_FAILED,
            payload: err.response.data.errors
        })
    }
}

export const getProfile = () => async (dispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST })
    try {
        setToken()
        const { data } = await axios.get(`${prefixe}/api/user/getprofile`)
        dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: data
        })
        dispatch(getMyPost())
    }
    catch (err) {
        dispatch({
            type: GET_PROFILE_FAILED,
            payload: err.response.data.errors
        })

    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}