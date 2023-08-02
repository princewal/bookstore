import { useDispatch } from "react-redux"
import { addBook } from "../features/books/bookSlice"
import BookForm from "./BookForm"

const AddBook = ({ onClose }) => {
  const dispatch = useDispatch()

  const handleSubmit = (book) => {
    dispatch(addBook(book))
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup">
        <div className="popup-inner">
          <h2>Add a Book</h2>
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
            <label htmlFor="description">Description:</label>
            <textarea
              id="desription"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <button className="btn" type="submit">
              Add Book
            </button>
            <button className="btn btn-close" type="button" onClick={onClose}>
              Cancel
            </button>
          </form> */}
          <BookForm
            initialBook={{ name: "", price: "", category: "", description: "" }}
            mode="add"
            onSubmit={handleSubmit}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  )
}

export default AddBook
