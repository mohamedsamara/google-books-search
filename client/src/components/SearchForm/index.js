import React from 'react';

import './style.css';

const SearchForm = props => {
  const { handleChange, search } = props;

  return (
    <div className='search'>
      <h3>Book Search</h3>
      <input
        type='text'
        className='theme-input'
        onChange={handleChange}
        placeholder='Please Search Book Title'
        required
      />
      <button type='submit' className='theme-btn' onClick={search}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
