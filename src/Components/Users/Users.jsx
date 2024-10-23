import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UserCard from '../UserCard/UserCard';

const Users = () => {
    const users = useLoaderData()
    // console.log(users);
    
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                users.map((user)=> <UserCard key={user.id} user={user}></UserCard>)
            }
        </div>
    );
};

export default Users;