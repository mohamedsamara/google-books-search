import React from 'react';

import './style.css';

const BookItem = props => {
  const { book, saveBook, deleteBook, saved } = props;

  return (
    <div className='book'>
      <div className='book-box'>
        <h4>{book.title}</h4>
        {book.description && <p>{book.description}</p>}

        {book.authors && (
          <p>
            By: <strong>{book.authors.join(', ')} </strong>
          </p>
        )}

        <div className='img-container'>
          {saved && book.img && <img src={book.img} alt={''} />}
          {!saved && book.imageLinks && (
            <img src={book.imageLinks.smallThumbnail} alt={''} />
          )}
        </div>
        <div className='actions'>
          <a
            href={book.infoLink}
            target='_blank'
            rel='noopener noreferrer'
            className='theme-link'
          >
            View
          </a>
          {saved ? (
            <button
              type='submit'
              className='theme-btn'
              onClick={() => deleteBook(book._id)}
            >
              Delete
            </button>
          ) : (
            <button
              type='submit'
              className='theme-btn'
              onClick={() => saveBook(book)}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookItem;
