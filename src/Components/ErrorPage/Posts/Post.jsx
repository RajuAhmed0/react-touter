import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostCard from './PostCard';

const Post = () => {
    const post = useLoaderData()
    // console.log(post);
    
    return (
        <div className='grid grid-cols-2 gap-4'>
            {
                post.map((data) => <PostCard key={data.id} data={data}></PostCard>)
            }
        </div>
    );
};

export default Post;