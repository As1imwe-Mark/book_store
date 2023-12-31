import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { createBook } from '../feature/redux/books/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.Book.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const booK = {
      item_id: `item${books.length + 1}`,
      title,
      author,
      category: 'Fiction',
    };
    dispatch(createBook(booK));
    setAuthor('');
    setTitle('');
  };
  return (
    <div className="Add">
      <h2 className="form-header">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input className="title" type="text" onChange={(e) => { setTitle(e.target.value); }} placeholder="Book Title" />
        <input className="author" type="text" onChange={(e) => { setAuthor(e.target.value); }} placeholder="Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};
export default AddBook;
