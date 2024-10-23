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
        <div>
            <h1 className='text-xl font-bold '>{postData.title}</h1>
        </div>
    );
};

export default PostRead;