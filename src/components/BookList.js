import BookCard from './BookCard';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'Capital In The Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <div>
      <BookCard books={books} />
    </div>

  );
};

export default BookList;
