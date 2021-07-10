const { GET_POST_SUCCESS, GET_POST_FAILED, GET_POST_REQUEST } = require("../actions/postTypes");

const initState = {
    postList: [],
    errors: null,
    isLoading: false

}

const postReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errors: false,
                postList: payload
            }
        case GET_POST_FAILED:
            return {
                ...state,
                errors: payload,
                isLoading: false
            }
        case GET_POST_REQUEST:
            return {
                ...state,
                errors: null,
                isLoading: true
            }



        default:
            return state
    }
}

export default postReducer