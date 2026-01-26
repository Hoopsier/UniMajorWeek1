function Book({ book }) {
  let { title, author, genre, year } = book;
  return (

    <div className="book">
      <h2 className="book-title">{title}</h2>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>

  )
}

export default Book
