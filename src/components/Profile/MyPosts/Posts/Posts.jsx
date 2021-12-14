import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {

    return (


        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfyn0fO1gUKPA_CMtHQn_dDLsBVvOppdbKRQ&usqp=CAU'></img>
            {props.message}
            <div>
                
                <span>{props.likesCount} like</span>

            </div>
        </div>



    )

}

export default Posts;