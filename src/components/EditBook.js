import { useDispatch } from "react-redux"
import { updateBook } from "../features/books/bookSlice"
import BookForm from "./BookForm"

const EditBook = ({ book, onClose }) => {
  const dispatch = useDispatch()

  const handleSubmit = (updatedBook) => {
    dispatch(updateBook(updatedBook))
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup">
        <div className="popup-inner">
          <h2>Edit Book</h2>
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
