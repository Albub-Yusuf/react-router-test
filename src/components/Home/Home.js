import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {

    const [posts, setPost] = useState([]);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=> setPost(data))

    },[])

    return (

            <div>
                     <h3 style={{textAlign:'center'}}>Total Post : {posts.length}</h3>
        <div style={{ display:'flex', flexWrap: 'wrap', width:'80%', margin:'0 auto', textAlign:'center'}}>
            
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
            </div>
    );
};

export default Home;