import { CLEAR_ERROR, SET_ERROR, START_LOADING, STOP_LOADING } from "../actions/appStateTypes"

const initState = {
    errors: null,
    isLoading: {
        state: false,
    },
}

const appStateReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case START_LOADING:
            return {
                ...state,
                isLoading: { state: true, ref: payload }
            }
        case STOP_LOADING:
            return {
                ...state,
                isLoading: { state: false }
            }
        case SET_ERROR:
            return {
                ...state,
                errors: payload
            }
        case CLEAR_ERROR:
            return {
                ...state,
                errors: null
            }
        default:
            return state
    }
}

export default appStateReducer