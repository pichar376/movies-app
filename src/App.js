
import Carrusel from './components/Carrusel/Carrusel';
import Layout from './components/Layout/Layout';
import { Route, Routes, useParams } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { MoviesProvider } from './context/MoviesContext';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MovieDescription from './pages/MovieDescription/MovieDescription';
import FavoriteList from './pages/FavoriteList/FavoriteList';
import MovieSearch from './pages/MovieSearch/MovieSearch';
import Motion from './components/Motion';
import { AnimatePresence } from "framer-motion"





function App() {

  return (
    <MoviesProvider>
      <AnimatePresence exitBeforeEnter>

        <NavBar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/favorite-list" element={<FavoriteList />} />
            <Route path="/movie-search/:params" element={<MovieSearch />} />
            <Route path="/description/:id" element={<MovieDescription />} />
            <Route path="/motion" element={<Motion />} />
          </Routes>
        </Layout>
        <Footer />
      </AnimatePresence>
    </MoviesProvider>



  );
}

export default App;
