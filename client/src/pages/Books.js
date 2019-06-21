import React, { Component } from 'react';

import API from '../utils/API';

import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      books: []
    };
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ search: e.target.value });
  }

  search() {
    API.searchBooks(this.state.search).then(response => {
      this.setState({
        books: response.data,
        search: ''
      });
    });
  }

  saveBook(book) {
    const bookData = {
      title: book.title,
      authors: book.authors,
      link: book.infoLink,
      img: book.imageLinks.smallThumbnail,
      description: book.description
    };

    API.saveBook(bookData)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { books } = this.state;

    return (
      <div className='Book'>
        <SearchForm
          handleChange={e => this.handleChange(e)}
          search={() => this.search()}
        />
        {books.length > 0 ? (
          <BookList books={books} saveBook={book => this.saveBook(book)} />
        ) : (
          'No Books Found'
        )}
      </div>
    );
  }
}

export default Books;
