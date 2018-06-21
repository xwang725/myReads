import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import '../App.css';

class Book extends Component {

  state = {
    shelf: "none"
  }

  componentDidMount() {
    this.getBookShelf();
  }

  changeShelf = (evt) => {
    this.props.handleUpdateBookShelf(
      this.props.book, 
      evt.target.value
    )
  }

  getBookShelf = () => {
    BooksAPI.get(this.props.book.id)
      .then(b => {
        this.setState({
          shelf: b.shelf
        })
      })
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.shelf} onChange={this.changeShelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ this.props.book.title }</div>
        <div className="book-authors">{ this.props.book.authors && this.props.book.authors.join("\n") }</div>
      </div>
    )
  }

}

export default Book