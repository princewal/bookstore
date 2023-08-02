import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { deleteBook } from "../features/books/bookSlice"

const BookList = ({ onBookClick }) => {
  const books = useSelector((state) => state.books.books)
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id))
  }

  return (
    <div className="book-container">
      <ul className="booklist">
        {books.map((book) => (
          <li className="booklist-item" key={book.id}>
            <div onClick={() => onBookClick(book)}>
              <div className="book-name">
                <h2>{book.name}</h2>
              </div>
              <div className="book-info">
                <span>${book.price}</span> - <span>{book.category}</span>
              </div>
              <div className="book-description">{book.description}</div>
            </div>
            <div className="book-btns">
              <button
                className="btn btn-delete"
                onClick={() => handleDeleteBook(book.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
