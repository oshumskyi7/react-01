import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 14 },
                { id: 2, message: 'It\'s my first post', likesCount: 11 },
                { id: 3, message: 'Ia', likesCount: 15 }
            ],
            newPostText: 'it-kamasutra'
        },

        dialogsPage: {
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
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;