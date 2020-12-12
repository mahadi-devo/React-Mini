import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';

const Users = ({ lists, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {lists.map((list) => (
          <UserItem key={list.list_name_encoded} list={list} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
