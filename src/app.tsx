import React from 'react';
import Navbar from './components/navbar/navbar';
import Movies from './pages/movies';
import TvSeries from './pages/tv-series';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Loader from './components/loader/loader';
import { useShow } from './hooks/use-show';

export default function App() {
  const { loading } = useShow();

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-series" element={<TvSeries />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}
