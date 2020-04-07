const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =
    {
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
    }


export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages:[...state.messages,{id: 6, message: body}],
            };
        default:
            return state;
    }
}

export let sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE,newMessageBody});

export default dialogsReducer;