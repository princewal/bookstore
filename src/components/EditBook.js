import { useDispatch } from "react-redux"
import { updateBook } from "../features/books/bookSlice"
import BookForm from "./BookForm"

const EditBook = ({ book, onClose }) => {
  const dispatch = useDispatch()

  const handleSubmit = (updatedBook) => {
    dispatch(updateBook(updatedBook))
  }

  return (
    <>
      <h2>Edit Book</h2>
      <BookForm
        initialBook={book}
        mode="edit"
        onSubmit={handleSubmit}
        onClose={onClose}
      />
    </>
  )
}

export default EditBook
