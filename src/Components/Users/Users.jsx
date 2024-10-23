import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UserCard from '../UserCard/UserCard';

const Users = () => {
    const users = useLoaderData()
    // console.log(users);
    
    return (
        <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 lg:mx-0 mx-1'>
            {
                users.map((user)=> <UserCard key={user.id} user={user}></UserCard>)
            }
        </div>
    );
};

export default Users;