import React, { useState } from "react"
import BookList from "./components/BookList"
import AddBook from "./components/AddBook"
import EditBook from "./components/EditBook"

const App = () => {
  const [showAddForm, setShowAddForm] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)

  const handleBookClick = (book) => {
    setSelectedBook(book)
  }

  const handleAddButtonClick = () => {
    setShowAddForm(true)
  }

  const handleCloseForm = () => {
    setShowAddForm(false)
    setSelectedBook(null)
  }

  return (
    <div className="container">
      <h1>Bookstore App</h1>
      <div>
        <button className="btn btn-add" onClick={handleAddButtonClick}>
          Add a Book
        </button>
      </div>
      <BookList onBookClick={handleBookClick} />
      {showAddForm && <AddBook onClose={handleCloseForm} />}
      {selectedBook && (
        <EditBook book={selectedBook} onClose={handleCloseForm} />
      )}
    </div>
  )
}

export default App
