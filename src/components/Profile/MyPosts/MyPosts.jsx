import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = (props) => {

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div className={s.posts}>
            <Posts message='Hi, how are you?' like='29' />
            <Posts message="It's my first post" like='32' />
            <Posts />
            <Posts />
        </div>
    </div>


}

export default MyPosts;