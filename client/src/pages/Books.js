import React, { Component } from 'react';

import API from '../utils/API';

import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';
import MessageBox from '../components/MessageBox';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      books: [],
      notif: {
        isActive: false,
        type: '',
        message: ''
      }
    };
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ searchValue: e.target.value });
  }

  search() {
    API.searchBooks(this.state.searchValue)
      .then(response => {
        this.setState({
          books: response.data,
          searchValue: '',
          notif: {
            isActive: true,
            type: 'success',
            message: `Search Found for ${this.state.searchValue}`
          }
        });
      })
      .catch(err => {
        this.setState({
          notif: {
            isActive: true,
            type: 'danger',
            message: `Search Not Found for ${this.state.searchValue}`
          }
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
        this.setState({
          notif: {
            isActive: true,
            type: 'success',
            message: `${bookData.title} Successfully Saved`
          }
        });

        setTimeout(() => {
          this.props.history.push('/saved');
        }, 3000);
      })
      .catch(err => {
        this.setState({
          notif: {
            isActive: true,
            type: 'danger',
            message: 'Something Went Wrong! Please try again!'
          }
        });
      });
  }

  render() {
    const { books, searchValue, notif } = this.state;

    return (
      <div className='Book'>
        <MessageBox notif={notif} />
        <SearchForm
          searchValue={searchValue}
          handleChange={e => this.handleChange(e)}
          search={() => this.search()}
        />
        {books.length > 0 ? (
          <BookList books={books} saveBook={book => this.saveBook(book)} />
        ) : (
          <p className='no-data'>No Books Found</p>
        )}
      </div>
    );
  }
}

export default Books;
