import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi,how are you?', likescount: '23'},
                {id: 2, message: 'It\'s my first post', likescount: '12'}
            ],
            newtextpost: 'it-kamasutra'
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Dymich'},
                {id: '2', name: 'Andrey'},
                {id: '3', name: 'Sveta'},
                {id: '4', name: 'Sasha'},
                {id: '5', name: 'Viktor'},
                {id: '6', name: 'Valera'}
            ],
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'How is your It-kamasutra'},
                {id: '3', message: 'Yo'}
            ],
            newmessagebody:''
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("state changed");
    },
    addPost() {
        let newuserpost = this._state.profilePage.newtextpost;
        this._state.profilePage.posts.push(
            {id: 3, message: newuserpost, likescount: '0'}
        )
        this._state.profilePage.newtextpost = '';
        this._callSubscriber(this._state);
    },
    updateNewTextPost(newTextPost) {
        this._state.profilePage.newtextpost = newTextPost;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);

        this._callSubscriber(this._state);
    }
}


export default store;