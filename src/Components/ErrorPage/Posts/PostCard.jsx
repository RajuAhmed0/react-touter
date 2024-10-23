import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCard = ({data}) => {
 const navigate = useNavigate()

 const readBtn = (id) => {
    navigate(`/posts/${id}`)
 }
    return (
        <div className='border-2 border-pink-600 rounded-md p-4'>
            <h1 className='text-xl font-semibold'>Title : {data.title}</h1>
            <p>Description : {data.body}</p>
            <button onClick={() => readBtn(data.id)} className='text-center bg-orange-500 py-3 px-6 rounded-md mt-2 font-semibold text-white'>Read More</button>
        </div>
    );
};

export default PostCard;