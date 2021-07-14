import axios from 'axios'

import { prefixe } from '../../helpers/constant'
import { setToken } from '../../helpers/helpers'
import { clearError, setError, startLoading, stopLoading } from './appStateActions'
import { ADD_POST_FAILED, ADD_POST_REQUEST, ADD_POST_SUCCESS, GET_MY_POST_FAILED, GET_MY_POST_REQUEST, GET_MY_POST_SUCCESS, GET_POST_COUNT_SUCCESS, GET_POST_FAILED, GET_POST_REQUEST, GET_POST_SUCCESS } from './postTypes'

export const addPost = (newPost) => async (dispatch) => {
    try {
        dispatch(startLoading("Adding post ..."))
        dispatch(clearError())
        setToken()
        const { data } = await axios.post(`${prefixe}/api/post/addpost`, newPost)
        dispatch({
            type: ADD_POST_SUCCESS,
            payload: data
        })
        dispatch(getPost(1, 4))

    }
    catch (err) {
        dispatch(stopLoading())
        dispatch(setError(err.response.data.errors))
    }
}

export const getPost = (page, limit) => async (dispatch) => {

    try {
        dispatch(startLoading("Get Posts"))
        dispatch(clearError())
        const { data } = await axios.get(`${prefixe}/api/post/posts?page=${page}&limit=${limit}`)
        dispatch({
            type: GET_POST_SUCCESS,
            payload: data
        })
        dispatch(stopLoading())
    }
    catch (err) {
        dispatch(stopLoading())
        dispatch(setError(err.response.data.errors))
    }
}

export const getMyPost = () => async (dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Get My Posts"))
    try {
        setToken()
        const { data } = await axios.get(`${prefixe}/api/post/myposts`)
        dispatch({
            type: GET_MY_POST_SUCCESS,
            payload: data
        })
        dispatch(stopLoading())
    }
    catch (err) {
        dispatch(stopLoading())
        dispatch(setError(err.response.data.errors))
    }
}

export const getPostCount = () => async (dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Get post count"))
    try {
        const { data } = await axios.get(`${prefixe}/api/post/postcount`)
        dispatch({
            type: GET_POST_COUNT_SUCCESS,
            payload: data
        })
        dispatch(stopLoading())
    }
    catch (err) {
        dispatch(stopLoading())
        dispatch(setError(err.response.data.errors))
    }
}


