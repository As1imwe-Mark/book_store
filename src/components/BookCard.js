import React from 'react';

const BookCard = () => (
  <div className="Cards">
    <div className="bookCard">
      <div className="book">
        <p>Action</p>
        <h1>The Hunger Games</h1>
        <p>Suzanne Collins</p>
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
          <p>64%</p>
          <p>Completed</p>
        </div>
        <div className="ChapterInfo">
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button className="update" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
    <div className="bookCard">
      <div className="book">
        <p>Science Fiction</p>
        <h1>Dune</h1>
        <p>Frank Herbert</p>
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
          <p>8%</p>
          <p>Completed</p>
        </div>
        <div className="ChapterInfo">
          <p>CURRENT CHAPTER</p>
          <p>
            Chapter 3:
            {'\' A Lesson Learned\''}
          </p>
          <button className="update" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
    <div className="bookCard">
      <div className="book">
        <p>Economy</p>
        <h1>Capital In The Twenty-First Century </h1>
        <p>Suzanne Collins</p>
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
          <p>0%</p>
          <p>Completed</p>
        </div>
        <div className="ChapterInfo">
          <p>CURRENT CHAPTER</p>
          <p>Introduction</p>
          <button className="update" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  </div>
);

export default BookCard;
