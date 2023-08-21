// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const books = [];
const bookSlice = createSlice({
  name: 'book',
  initialState: { books },

  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },

    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.Id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
