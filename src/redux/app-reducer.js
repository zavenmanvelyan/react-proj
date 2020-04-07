import {authApi} from "../api/api";
import {stopSubmit} from 'redux-form'
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'SET_INITIALIZED';


let initialState =
    {
        initialized:false,
    }


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true

            }
        default:
            return state;
    }
}

export let initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise]).then(()=>{
            dispatch(initializedSuccess());
        })

    }
}

export default appReducer;