const { GET_POST_SUCCESS, GET_POST_FAILED, GET_POST_REQUEST, GET_POST_COUNT_SUCCESS } = require("../actions/postTypes");

const initState = {
    postList: [],
    errors: null,
    isLoading: false,
    count: 0
}

const postReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_POST_SUCCESS:
            return {
                ...state,
                postList: payload.posts,

            }
        case GET_POST_COUNT_SUCCESS:
            return {
                ...state,
                count: payload.count
            }
        default:
            return state
    }
}

export default postReducer