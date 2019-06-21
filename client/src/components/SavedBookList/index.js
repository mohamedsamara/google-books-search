import React from 'react';

import BookItem from '../BookItem';

const SavedBookList = props => {
  const { books, deleteBook } = props;

  return (
    <div className='books'>
      <h3>Books</h3>
      {books.map((book, index) => (
        <BookItem
          key={index}
          book={book}
          deleteBook={deleteBook}
          saved={true}
        />
      ))}
    </div>
  );
};

export default SavedBookList;
