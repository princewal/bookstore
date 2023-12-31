import React, { useState } from "react"

const BookForm = ({ initialBook, mode, onSubmit, onClose }) => {
  const [id, setId] = useState(initialBook.id || Date.now())
  const [name, setName] = useState(initialBook.name)
  const [price, setPrice] = useState(initialBook.price)
  const [category, setCategory] = useState(initialBook.category)
  const [description, setDescription] = useState(initialBook.description)
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const updatedBook = {
      ...initialBook,
      id,
      name,
      price,
      category,
      description,
    }
    onSubmit(updatedBook)
    onClose()
  }

  const handlePopover = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      onClose()
    }
  }

  const validateForm = () => {
    const errors = {}
    if (!name) {
      errors.name = "Book name is required"
    }
    if (!price || isNaN(price) || parseFloat(price) <= 0) {
      errors.price = "Invalid price"
    }
    if (!category) {
      errors.category = "Category is required"
    }

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  return (
    <div className="popup-overlay" onClick={handlePopover}>
      <div className="popup">
        <h2>{mode === "add" ? "Add Book" : "Edit Book"}</h2>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="hidden"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
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
            type="text"
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
          {errors.category && <span className="error">{errors.category}</span>}

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
          <button className="btn" type="submit">
            {mode === "add" ? "Add Book" : "Save"}
          </button>
          <button className="btn btn-close" type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookForm
