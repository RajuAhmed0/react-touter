import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UsersDetails = () => {
    const user = useLoaderData()
    console.log(user);
    
    return (
        <div className='border-2 border-emerald-800 rounded-lg max-w-[400px] text-start mx-auto p-4'>
           <h1 className='text-xl font-bold'>Name: {user.name}</h1>
           <p className='font-medium'>City : {user.address.city}</p>
           <p className='font-medium'>Street : {user.address.street}</p>
           <p className='font-medium'>Suite : {user.address.suite}</p>
           <p className='font-medium'>Zipcode : {user.address.zipcode}</p>
           <p className='font-medium'>Company Name : {user.company.name}</p>
           <p className='font-medium'>CatchPhrase : {user.company.catchPhrase}</p>
        </div>
    );
};

export default UsersDetails;