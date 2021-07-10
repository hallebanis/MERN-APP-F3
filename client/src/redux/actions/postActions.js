import axios from 'axios'

import { prefixe } from '../../helpers/constant'
import { setToken } from '../../helpers/helpers'
import { ADD_POST_FAILED, ADD_POST_REQUEST, ADD_POST_SUCCESS, GET_MY_POST_FAILED, GET_MY_POST_REQUEST, GET_MY_POST_SUCCESS, GET_POST_FAILED, GET_POST_REQUEST, GET_POST_SUCCESS } from './postTypes'

export const addPost = (newPost) => async (dispatch) => {
    dispatch({ type: ADD_POST_REQUEST })
    try {
        setToken()
        const { data } = await axios.post(`${prefixe}/api/post/addpost`, newPost)
        dispatch({
            type: ADD_POST_SUCCESS,
            payload: data
        })
        dispatch(getPost())
        dispatch(getMyPost())

    }
    catch (err) {
        dispatch({
            type: ADD_POST_FAILED,
            payload: err.response.data.errors
        })

    }
}

export const getPost = () => async (dispatch) => {
    dispatch({ type: GET_POST_REQUEST })
    try {
        const { data } = await axios.get(`${prefixe}/api/post/posts`)
        dispatch({
            type: GET_POST_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: GET_POST_FAILED,
            payload: err.response.data.errors
        })

    }
}

export const getMyPost = () => async (dispatch) => {
    dispatch({ type: GET_MY_POST_REQUEST })
    try {
        setToken()
        const { data } = await axios.get(`${prefixe}/api/post/myposts`)
        dispatch({
            type: GET_MY_POST_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: GET_MY_POST_FAILED,
            payload: err.response.data.errors
        })

    }
}


