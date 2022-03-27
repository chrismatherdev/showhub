import './index.css';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Movies from './pages/movies';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-series" />
        </Routes>
        <Homepage />
      </Router>
    </>
  );
}

export default App;
