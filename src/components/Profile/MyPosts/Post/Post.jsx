import React from 'react';
import sty from './Post.module.css';

const Post = (props) => {
    return(
        <div className={sty.item}>
          <img src='https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' />
          {props.message}
          <div>Like {props.likescount}</div>
        </div>
    )
}
export default Post;