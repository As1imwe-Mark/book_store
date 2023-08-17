import BookCard from './BookCard';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      status: 64,
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      status: 8,
      chapter: 'Chapter 3: "A Lesson Learned" ',
    },
    {
      id: 3,
      title: 'Capital In The Twenty-First Century',
      author: 'Suzanne Collins',
      status: 0,
      chapter: 'Introduction',
    },
  ];
  return (
    <div>
      <BookCard books={books} />
    </div>

  );
};

export default BookList;
