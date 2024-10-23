import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostCard from './PostCard';

const Post = () => {
    const post = useLoaderData()
    // console.log(post);
    
    return (
        <div className='md:grid grid-cols-2 gap-4 lg:mx-0 mx-1'>
            {
                post?.map((data) => <PostCard key={data.id} data={data}></PostCard>)
            }
        </div>
    );
};

export default Post;