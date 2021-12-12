import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img src='https://cdn-images-1.medium.com/max/2000/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg' width="900"></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + discription
            </div>

        </div>
    )
}

export default ProfileInfo;