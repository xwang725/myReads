import React, {Component} from 'react';
import '../App.css';
import * as BooksAPI from '../BooksAPI';
import {Link} from 'react-router-dom'
import Book from './Book';


export default class Search extends Component {

  state = {
    query: "",
    books: []
  }

  handleQueryInput = (evt) => {
    const query = evt.target.value ? evt.target.value : ""
    this.setState({
      query: query
    })

    if(query) {
      BooksAPI.search(query)
      .then( books => {
        this.setState({
          books: books
        })
      })
    } else {
      this.setState({
        books: []
      })
    }
  }

  handleUpdateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
  }

  render() {
    let books = this.state.books
    
    // handle query errors
    if(books.length === 0 || books.items)
      books = []

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/">
            <div className="close-search">Close</div>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleQueryInput}
              value={this.state.query}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              books && books.map((book, i) => {
                return (
                  <li key={i + '_book'}>
                    <Book
                      book={book}
                      handleUpdateBookShelf={this.handleUpdateBookShelf}
                    />
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}