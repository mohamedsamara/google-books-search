import React from 'react';

import BookItem from '../BookItem';

const BookList = props => {
  const { books, saveBook } = props;

  return (
    <div className='books'>
      <h3>Books</h3>
      <hr />
      {books.map((book, index) => (
        <BookItem key={index} book={book.volumeInfo} saveBook={saveBook} />
      ))}
    </div>
  );
};

export default BookList;
