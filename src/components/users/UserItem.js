import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ list: { list_name, newest_published_date } }) => {
  return (
    <div className='card text-center'>
      <h3>{list_name}</h3>
      <p>{newest_published_date}</p>
      <Link to={`/books/${list_name}`} className='btn btn-dark btn-sm my-1'>
        More Details
      </Link>
    </div>
  );
};

UserItem.protoTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
