import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Book from './components/Book';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
