import { HashRouter, Routes, Route } from 'react-router-dom';
import Blog from './components/blog';
import Celebs from './components/celebs';
import Movies from './components/movies';
import MovieDetails from './components/movies/details';
import Navbar from './components/navbar';
import Pages from './components/pages';
import TvShowes from './components/tvShwoes';
import Home from './pages/home';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Movies />} path='/movies' />
        <Route element={<MovieDetails />} path='/:type/:id' />
        <Route element={<TvShowes />} path='/showes' />
        <Route element={<Pages />} path='/pages' />
        <Route element={<Blog />} path='/blog' />
        <Route element={<Celebs />} path='/celebs' />
      </Routes>
    </HashRouter>
  );
}

export default App;
