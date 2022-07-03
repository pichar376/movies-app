
import Carrusel from './components/Carrusel/Carrusel';
import Layout from './components/Layout/Layout';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import FavoriteList from './pages/FavoriteList';
import MovieDescription from './pages/MovieDescription';
import MovieSearch from './pages/MovieSearch';






function App() {
  return (
    <div>
      <Layout>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/Favorite-list" element={<FavoriteList />} />
            <Route exact path="/Movie-description" element={<MovieDescription />} />
            <Route exact path="/movie-search" element={<MovieSearch />} />
          </Routes>
        </HashRouter>
      </Layout>
    </div>


  );
}

export default App;
