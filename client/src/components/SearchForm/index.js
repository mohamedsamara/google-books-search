import React from 'react';

import './style.css';

const SearchForm = props => {
  const { handleChange, search, searchValue } = props;

  return (
    <div className='search'>
      <h3>Book Search</h3>
      <div className='input-search'>
        <input
          type='text'
          value={searchValue}
          className='theme-input'
          onChange={handleChange}
          placeholder='Please Search Book Title'
          required
        />
        <button type='submit' className='theme-btn' onClick={search}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
