import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import HomepageShows from './components/homepage-shows/homepage-shows';
import Movies from './pages/movies';
import TvSeries from './pages/tv-series';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResults from './components/search/search-results';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-series" element={<TvSeries />} />
      </Routes>
      <Hero />
      <HomepageShows />
      <SearchResults />
      <Footer />
    </Router>
  );
}
