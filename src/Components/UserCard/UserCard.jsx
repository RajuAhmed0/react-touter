import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({user}) => { 

    const {id, name, email, phone, website} = user

    return (
        <div className='border-2 border-orange-600 rounded-md text-start p-6 '>
            <h1 className='text-xl font-semibold'>Name: {name}</h1>
            <p className='font-medium'>Email: {email}</p>
            <p className='font-medium'>Mobail No: {phone}</p>
            <small className='block font-medium'>Web: {website}</small>
            <Link to={`/users/${id}`}><button className='text-center bg-violet-700 py-3 px-6 rounded-md mt-2 font-semibold text-white'>See Details</button></Link>
        </div>
    );
};

export default UserCard;