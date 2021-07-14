import { combineReducers } from "redux";
import appStateReducer from "./appStateReducer";
import authReducer from "./authReducer";
import postReducer from "./postReducer";


export default combineReducers({
    auth: authReducer,
    posts: postReducer,
    appState: appStateReducer
})