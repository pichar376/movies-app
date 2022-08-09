import { useContext } from "react";
import { MoviesProvider } from "../../context/MoviesContext";

const useMovieCard = () => {

  const { addToList, movies } = useContext(MoviesProvider);


  const list = () => {

    const moviesResId = movies.allMovies.map((movie) => movie.res.id);

    const listToFilter = Object.values(addToList).map((id) => moviesResId.filter((movieId) => movieId === id));
  }

  return {
    list
  }
}

export default useMovieCard;