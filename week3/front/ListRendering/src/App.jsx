import Book from './Book';
import booksData from './booksData';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
        {
          booksData.map((book) => (
            <Book key={book.id} book={book} name='' />) //Each child in a list should have a unique "key" prop.
          )
        }
      </div>
    </div>
  );
}

export default App;
