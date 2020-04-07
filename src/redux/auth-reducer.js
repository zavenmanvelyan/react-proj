import { authApi } from "../api/api";
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =
{
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data,
                isAuth: action.data.isAuth
            }
        default:
            return state;
    }
}

export let setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });

export const getAuthUserData = () => async (dispatch) => {
    let response = await authApi.me()
    if (response.data.resultCode === 0) {
        let { id, login, email } = { ...response.data.data }
        dispatch(setAuthUserData(id, email, login, true));
    }

}
export const login = (email, password, rememberMe) => async (dispatch) => {
        let response = await authApi.login(email, password, rememberMe);
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
            else {
                let message = response.data.messages.length > 0 ? response.data.messages : "Some error";
                dispatch(stopSubmit("login", { _error: message }))
            }
    }
export const logout = () => async (dispatch) => {
        let response = await authApi.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData((null, null, null, false)));
            }
    }

export default authReducer;