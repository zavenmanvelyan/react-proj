import React from 'react';
import st from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const MyPosts = React.memo((props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likescount={post.likescount}/>);

    let adduserpost = (values) => {
        debugger;
        props.adduserpost(values.posttext);
    }
    return (
        <div className={st.postsBlock}>
            <h3>My posts</h3>
            <PostAddingReduxForm onSubmit={adduserpost}/>
            <div className={st.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const maxLength10 = maxLengthCreator(10);

let PostAddingForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name='posttext' validate={[required,maxLength10]}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>
}

let PostAddingReduxForm = reduxForm({
    form: 'postadding'
})(PostAddingForm);

export default MyPosts;