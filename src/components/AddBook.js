import { useDispatch } from "react-redux"
import { addBook } from "../features/books/bookSlice"
import BookForm from "./BookForm"

const AddBook = ({ onClose }) => {
  const dispatch = useDispatch()

  const handleSubmit = (book) => {
    dispatch(addBook(book))
  }

  return (
    <>
      <h2>Add a Book</h2>
      <BookForm
        initialBook={{ name: "", price: "", category: "", description: "" }}
        mode="add"
        onSubmit={handleSubmit}
        onClose={onClose}
      />
    </>
  )
}

export default AddBook
