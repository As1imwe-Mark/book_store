import React from 'react';

/* eslint-disable react/prop-types */
const BookCard = ({ books }) => (
  <>
    {
      books.map((book) => (
        <div key={book.id} className="bookCard">
          <div className="book">
            <p>Action</p>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <div className="Book-btns">
              <button type="button">Comments</button>
              <div className="divide" />
              <button type="button">Remove</button>
              <div className="divide" />
              <button type="button">Edit</button>
            </div>
          </div>
          <div className="bookInfo">
            <div className="progress" />
            <div className="progressInfo">
              <p>
                {book.status}
                %
              </p>
              <p>Completed</p>
            </div>
            <div className="ChapterInfo">
              <p>CURRENT CHAPTER</p>
              <p>{book.chapter}</p>
              <button className="update" type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      ))
    }
  </>
);
export default BookCard;
