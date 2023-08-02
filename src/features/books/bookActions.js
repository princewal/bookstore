// src/actions/bookActions.js
export const ADD_BOOK = "ADD_BOOK"
export const UPDATE_BOOK = "UPDATE_BOOK"
export const DELETE_BOOK = "DELETE_BOOK"

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
})

export const updateBook = (book) => ({
  type: UPDATE_BOOK,
  payload: book,
})

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: id,
})
