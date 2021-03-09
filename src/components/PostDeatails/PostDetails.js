import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const PostDetails = () => {
    const id = useParams();
    const pid = id.id;
    const [postDetails, setPostDetails] = useState({});
    useEffect(()=>{

        const url = `https://jsonplaceholder.typicode.com/posts/${pid}`
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=> setPostDetails(data));

    },[])

 
    
    return (
        <div style={{width:'500px',textAlign:'center', margin:'50px auto', padding:'50px', boxShadow:'10px 10px 30px grey', borderRadius:'20px'}}>
           <h3>{postDetails.title}</h3>
           <p>By: {postDetails.userId}</p>
           <article>
               {postDetails.body}
           </article>
           <br/>
           <Link to="/"><button>Back</button></Link>
        </div>
    );
};

export default PostDetails;