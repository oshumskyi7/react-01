import { renderEntireTree } from "../render";



let state = {
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

}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.newPostText = '';
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export default state;