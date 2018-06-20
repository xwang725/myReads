import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import '../App.css';
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'

const SHELVES = [
  "currentlyReading",
  "wantToRead",
  "read"
]

export default class BookList extends Component {

  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        currentlyReading: books.filter(book => book.shelf === SHELVES[0]),
        wantToRead: books.filter(book => book.shelf === SHELVES[1]),
        read: books.filter(book => book.shelf === SHELVES[2])
      })
    })
  }

  componentDidMount() {
    this.getAllBooks();
  }

  handleUpdateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then( data => {
        this.getAllBooks();
      })
    
  }

  camelCaseToRegular(word) {
    return word
    // insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
    //uppercase the first character
    .replace(/^./, function(str){ return str.toUpperCase(); })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        
        <div className="list-book-content">
          <div>
            {
              SHELVES.map((shelf, i) => {
                return(
                  <BookShelf
                    key={i + "_shelf"}
                    shelfTitle={this.camelCaseToRegular(shelf)}
                    books={this.state[shelf]}
                    handleUpdateBookShelf={this.handleUpdateBookShelf}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search">
              Add a book
          </Link>
        </div>
      </div>
    )
  }
}