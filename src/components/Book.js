import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import '../App.css';

class Book extends Component {

  state = {
    shelf: "None"
  }

  componentDidMount() {
    this.setState({
      shelf: this.props.shelf
    })
  }

  static defaultProps = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    backgroundImage: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
    shelf:"wantToRead"
  }

  changeShelf = (evt) => {
    // TODO: need to update to DB as well
    this.setState({
      shelf: evt.target.value
    })
  }

  render() {

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.backgroundImage})` }}></div>
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
        <div className="book-title">{ this.props.title }</div>
        <div className="book-authors">{ this.props.author }</div>
      </div>
    )
  }

}

export default Book