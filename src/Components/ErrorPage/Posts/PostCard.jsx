import React from 'react';

const PostCard = ({data}) => {
    const {title, body} = data
    return (
        <div className='border-2 border-pink-600 rounded-md p-4'>
            <h1 className='text-xl font-semibold'>Title : {title}</h1>
            <p>Description : {body}</p>
        </div>
    );
};

export default PostCard;