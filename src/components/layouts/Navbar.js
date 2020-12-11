import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1 className='all-center'>{title}</h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'NEW YORK TIMES BOOK API',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
