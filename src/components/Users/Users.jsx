import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {


        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://yt3.ggpht.com/ytc/AKedOLTV_dOqZ3x2Abks5a9q_Fltp28m9NUoNMpkm6F3Bg=s900-c-k-c0x00ffffff-no-rj',
                followed: false,
                fullName: 'Oleg',
                status: 'Senior',
                location: { city: 'Kyiv', country: 'Ukraine' }
            },
            {
                id: 2,
                photoUrl: 'https://yt3.ggpht.com/ytc/AKedOLTV_dOqZ3x2Abks5a9q_Fltp28m9NUoNMpkm6F3Bg=s900-c-k-c0x00ffffff-no-rj',
                followed: true,
                fullName: 'Puto',
                status: 'Junior',
                location: { city: 'Barcelona', country: 'Spain' }
            },
            {
                id: 3,
                photoUrl: 'https://yt3.ggpht.com/ytc/AKedOLTV_dOqZ3x2Abks5a9q_Fltp28m9NUoNMpkm6F3Bg=s900-c-k-c0x00ffffff-no-rj',
                followed: false,
                fullName: 'Kuba',
                status: 'Meadle',
                location: { city: 'Krakow', country: 'Poland' }
            }
        ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;