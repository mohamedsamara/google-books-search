import React from 'react';

const BookItem = props => {
  const { book, saveBook, deleteBook, saved } = props;

  return (
    <div className='book'>
      <div className='book-box'>
        <h1>{book.title}</h1>
        <p>{book.description}</p>
        <p>By: {book.authors ? book.authors.join(', ') : 'N/A'}</p>
        <a href={book.infoLink} target='_blank' rel='noopener noreferrer'>
          View
        </a>
        {saved ? (
          <button type='submit' onClick={() => deleteBook(book._id)}>
            Delete
          </button>
        ) : (
          <button type='submit' onClick={() => saveBook(book)}>
            Save
          </button>
        )}

        {saved && book.img && <img src={book.img} alt={''} />}

        {!saved && book.imageLinks && (
          <img src={book.imageLinks.smallThumbnail} alt={''} />
        )}
      </div>
    </div>
  );
};

export default BookItem;
