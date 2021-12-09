import React from 'react';
import MyPosts from './MyPosts/MyPosts';

import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://cdn-images-1.medium.com/max/2000/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg' width="900"></img>
        </div>
        <div>
            ava + discription
        </div>
    <MyPosts />
    </div>

}

export default Profile;