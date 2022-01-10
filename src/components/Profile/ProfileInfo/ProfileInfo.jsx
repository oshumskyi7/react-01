import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    
    if(!props.profile) {
        return <Preloader />
    }
    
    return (
        <div>

            <div>
                <img src='https://cdn-images-1.medium.com/max/2000/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg' width="900"></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
               <ProfileStatus status={"Hello my friends"} />
                discription
            </div>

        </div>
    )
}

export default ProfileInfo;