import React, { Component } from 'react';

import API from '../utils/API';

import SavedBookList from '../components/SavedBookList';

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedBooks: []
    };
  }

  componentDidMount() {
    API.getBooks()
      .then(response => {
        this.setState({ savedBooks: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteBook(Id) {
    API.deleteBook(Id)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { savedBooks } = this.state;

    return (
      <div className='saved'>
        {savedBooks.length > 0 ? (
          <SavedBookList
            books={savedBooks}
            deleteBook={Id => this.deleteBook(Id)}
          />
        ) : (
          <p className='no-data'>No Saved Books Yet!</p>
        )}
      </div>
    );
  }
}

export default Saved;
