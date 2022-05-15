import React from 'react';
import Navbar from './components/navbar/navbar';
import Movies from './pages/movies';
import TvSeries from './pages/tv-series';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-series" element={<TvSeries />} />
      </Routes>
      <Footer />
    </Router>
  );
}
