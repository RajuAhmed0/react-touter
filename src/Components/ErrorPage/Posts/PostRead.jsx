import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostRead = () => {
   const  params = useParams()
    const [postData, setPostData] = useState({})
    // console.log(data);
    

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        .then(res => res.json())
        .then(data => setPostData(data))
    }, [])  
    return (
        <div className='border-2 border-cyan-400 rounded-lg'>
            <p className='text-xl font-bold'>UserId : {postData.id}</p>
            <h1 className='text-xl font-bold'>Title : {postData.title}</h1>
        </div>
    );
};

export default PostRead;