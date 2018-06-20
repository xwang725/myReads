import React, {Component} from 'react';
import '../App.css';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

export default class BookShelf extends Component {

  static defaultProps = {
    shelfTitle: "Currently Reading",
    books: []
  }

  render() {

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title"> {this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {              
              this.props.books.map((book, i)  => {
                return (
                <li key={i + '_book'}>
                  <Book
                    title={book.title}
                    author={book.authors}
                    backgroundImage={book.imageLinks.thumbnail}
                    shelf={this.props.shelfTitle}
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
