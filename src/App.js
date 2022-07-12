
import Carrusel from './components/Carrusel/Carrusel';
import Layout from './components/Layout/Layout';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import FavoriteList from './pages/FavoriteList';
import MovieDescription from './pages/MovieDescription';
import MovieSearch from './pages/MovieSearch';
import { MoviesProvider } from './context/MoviesContext';






function App() {
  return (
    <MoviesProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/favorite-list" element={<Carrusel />} />
          <Route path="/Movie-description" element={<MovieDescription />} />
          <Route path="/movie-search" element={<MovieSearch />} />
        </Routes>
      </Layout>
    </MoviesProvider>



  );
}

export default App;
