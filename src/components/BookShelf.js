import React, {Component} from 'react';
import '../App.css';
import Book from './Book';

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
                    book={book}
                    shelf={this.props.shelfTitle}
                    handleUpdateBookShelf={this.props.handleUpdateBookShelf}
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
