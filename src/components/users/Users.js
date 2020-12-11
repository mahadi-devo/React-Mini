import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';

const Users = ({ books, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {books.map((book) => (
          <UserItem key={book.isbns.isbn10} book={book} />
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
