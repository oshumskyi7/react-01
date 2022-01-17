import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    
    if(!profile) {
        return <Preloader />
    }
    
    return (
        <div>

            <div>
                <img src='https://cdn-images-1.medium.com/max/2000/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg' width="900"></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} />
               <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                discription
            </div>

        </div>
    )
}

export default ProfileInfo;