import React, { Component, PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';





const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = React.memo(props =>  {
            console.log("RENDER");
            let postsElements =
                props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} />);
    
            let newPostElement = React.createRef();
    
            let onAddPost = (values) => {
                props.addPost(values.newPostText);
    
            }
    
            return (
                <div className={s.postsBlock}>
                    <h3>My posts</h3>
                    <AddNewPostFormRedux onSubmit={onAddPost} />
                    <div className={s.posts}>
                        {postsElements}
                    </div>
                </div>
    
            )
        }
);

export default MyPosts;