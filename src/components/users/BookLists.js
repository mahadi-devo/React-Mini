import React, { Component } from 'react';
import Spinner from '../layouts/Spinner';
import BookItem from '../users/BookItem';

export class BookLists extends Component {
  componentDidMount() {
    this.props.getBooks(this.props.match.params.list_name);
  }

  render() {
    const { loading, books } = this.props;

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className='container'>
          <h3>{this.props.match.params.list_name} List Books</h3>
          <div style={userStyle}>
            {books.map((book) => (
              <BookItem key={book.rank} book={book} />
            ))}
          </div>
        </div>
      );
    }
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};
export default BookLists;
