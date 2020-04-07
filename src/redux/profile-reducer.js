import { profileApi, usersApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        { id: 1, message: 'Hi,how are you?', likescount: '23' },
        { id: 2, message: 'It\'s my first post', likescount: '12' }
    ],
    profile: null,
    status: ''
}


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newuserpost = action.posttext;
            return {
                ...state,
                posts: [...state.posts, { id: 3, message: newuserpost, likescount: '0' }],
            };
        }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(u => u.id != action.postId)
            }
        default:
            return state;
    }
}

export let addPostActionCreator = (posttext) => ({ type: ADD_POST, posttext });
export let setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})
export let setStatus = (status) => ({ type: SET_STATUS, status })
export let deletePost = (postId) => ({ type: DELETE_POST, postId })


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersApi.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export default profileReducer;