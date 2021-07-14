const { START_LOADING, STOP_LOADING, SET_ERROR, CLEAR_ERROR } = require("./appStateTypes")

export const startLoading = (ref) => {
    return {
        type: START_LOADING,
        payload: ref
    }
}

export const stopLoading = () => {
    return {
        type: STOP_LOADING
    }
}

export const setError = (errors) => {
    return {
        type: SET_ERROR,
        payload: errors
    }
}
export const clearError = () => {
    return {
        type: CLEAR_ERROR
    }
}

