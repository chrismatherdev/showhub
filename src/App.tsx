import Navbar from './components/navbar';
import './index.css';
import Hero from './components/hero';
import HomepageShows from './components/homepage-shows';
import Movies from './pages/movies';
import TvSeries from './pages/tv-series';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResults from './components/search/search-results';

export default function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-series" element={<TvSeries />} />
        </Routes>
        <Hero />
        <HomepageShows />
        <SearchResults />
      </div>
    </Router>
  );
}
