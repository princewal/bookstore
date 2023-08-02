import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { updateBook } from "../features/books/bookSlice"
import BookForm from "./BookForm"

const EditBook = ({ book, onClose }) => {
  const dispatch = useDispatch()

  const handleSubmit = (updatedBook) => {
    dispatch(updateBook(updatedBook))
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-inner">
          <h2>Edit Book</h2>
          {/* <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Book Name"
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <label htmlFor="price">Price:</label>
            <input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              required
            />
            {errors.price && <span className="error">{errors.price}</span>}

            <label htmlFor="category">Category:</label>
            <input
              id="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              required
            />
            {errors.category && (
              <span className="error">{errors.category}</span>
            )}

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button className="btn" type="submit">
              Edit Book
            </button>
            <button className="btn btn-close" type="button" onClick={onClose}>
              Cancel
            </button>
          </form> */}
          <BookForm
            initialBook={book}
            mode="edit"
            onSubmit={handleSubmit}
            onClose={onClose}
          />
          ;
        </div>
      </div>
    </div>
  )
}

export default EditBook
