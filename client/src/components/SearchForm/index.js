import React from 'react';

const SearchForm = props => {
  const { handleChange, search } = props;

  return (
    <div className='search'>
      <h3>Book Search</h3>
      <label>Enter a book to search:</label>
      <br />
      <input
        type='text'
        onChange={handleChange}
        placeholder='Book Title'
        required
      />
      <br />
      <button type='submit' onClick={search}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
