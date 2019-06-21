import React, { Component } from 'react';

import API from '../utils/API';

import SavedBookList from '../components/SavedBookList';
import MessageBox from '../components/MessageBox';

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedBooks: [],
      notif: {
        isActive: false,
        message: ''
      }
    };
  }

  componentDidMount() {
    API.getBooks()
      .then(response => {
        this.setState({
          savedBooks: response.data
        });
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

  deleteBook(Id, Index) {
    this.setState(state => {
      const savedBooks = state.savedBooks.filter((item, j) => Index !== j);

      return {
        savedBooks
      };
    });

    API.deleteBook(Id)
      .then(response => {
        this.setState({
          notif: {
            isActive: true,
            type: 'success',
            message: 'Successfully Deleted!'
          }
        });
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
    const { savedBooks, notif } = this.state;

    return (
      <div className='saved'>
        <MessageBox notif={notif} />
        {savedBooks.length > 0 ? (
          <SavedBookList
            books={savedBooks}
            deleteBook={(id, index) => this.deleteBook(id, index)}
          />
        ) : (
          <p className='no-data'>No Saved Books Yet!</p>
        )}
      </div>
    );
  }
}

export default Saved;
