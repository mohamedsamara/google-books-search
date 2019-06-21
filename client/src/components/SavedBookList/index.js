import React from 'react';

import BookItem from '../BookItem';

const SavedBookList = props => {
  const { books, deleteBook } = props;

  return (
    <div className='books'>
      <h3>Books</h3>
      <hr />
      {books.map((book, index) => (
        <BookItem
          key={index}
          book={book}
          deleteBook={id => deleteBook(id, index)}
          saved={true}
        />
      ))}
    </div>
  );
};

export default SavedBookList;
