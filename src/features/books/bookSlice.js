import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  books: [
    {
      id: 135957052,
      name: "Pragmatic Programmer, The: Your journey to mastery",
      price: 39.99,
      category: "computer science",
      description:
        "The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. ",
    },
    {
      id: 735619670,
      name: "Code Complete",
      price: 68.74,
      category: "computer science",
      description:
        "Widely considered one of the best practical guides to programming, Steve McConnell’s original code complete has been helping developers write better software for more than a decade. Now this classic book has been fully updated and revised with leading-edge practices—and hundreds of new code samples—illustrating the art and science of software construction.",
    },
    {
      id: 9780765382030,
      name: "The Three-Body Problem",
      price: 23.82,
      category: "science fiction",
      description: "",
    },
  ],
}

const bookSlice = createSlice({
  name: "booklist",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    updateBook: (state, action) => {
      const bookIndex = state.books.findIndex(
        (book) => book.id === action.payload.id
      )
      if (bookIndex !== -1) {
        state.books[bookIndex] = action.payload
      }
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload)
    },
  },
})

export const { addBook, updateBook, deleteBook } = bookSlice.actions
export default bookSlice.reducer
