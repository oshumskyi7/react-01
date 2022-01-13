const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your bla bla?' },
        { id: 3, message: 'Now' },

    ],
    dialogs: [
        { id: 1, name: 'Oleg' },
        { id: 2, name: 'Andrii' },
        { id: 3, name: 'Vadym' },
        { id: 4, name: 'Olya' },
        { id: 5, name: 'Valera' }
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;