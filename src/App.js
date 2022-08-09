
import Carrusel from './components/Carrusel/Carrusel';
import Layout from './components/Layout/Layout';
import { Route, Routes, useParams } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MovieSearch from './pages/MovieSearch';
import { MoviesProvider } from './context/MoviesContext';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MovieDescription from './pages/MovieDescription/MovieDescription';
import FavoriteList from './pages/FavoriteList/FavoriteList';





function App() {

  return (
    <MoviesProvider>
      <NavBar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/favorite-list" element={<FavoriteList />} />
          <Route path="/movie-search" element={<MovieSearch />} />
          <Route path="/description/:id" element={<MovieDescription />} />
        </Routes>
      </Layout>
      <Footer />
    </MoviesProvider>



  );
}

export default App;
