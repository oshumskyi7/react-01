const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            ]
        }

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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text 
    }
}

export default store;
window.store = store;