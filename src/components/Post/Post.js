import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {

    let {userId, title, id} = props.post;

    return (
        <div style={{width: '400px', border:'1px solid grey', margin:'20px', padding:'20px'}}>
            <img style={{width:'80%'}} src="https://via.placeholder.com/600/92c952"></img>
            <h3>{title}</h3>
            <p>By : {userId}</p>
            <Link to={`/post/${id}`}><button>Read More...</button></Link>
        </div>
    );
};

export default Post;