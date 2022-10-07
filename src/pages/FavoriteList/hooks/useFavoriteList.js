import { useContext } from "react";
import Swal from "sweetalert2";
import useMovieCard from "../../../components/MovieCard/useMovieCard";
import MoviesContext, { MoviesProvider } from "../../../context/MoviesContext";

const useFavoriteList = () => {

  const { movies, addToList, setAddToList, addAndDeleteMovie } = useContext(MoviesContext);

  const {
    addToMyList,
  } = useMovieCard();


  const idMovies = Object.values(addToList)
  let movieList = [];
  let moviesWithOutRepeating = [];
  if (!movies.allMovies) {
    return
  }
  movieList = movies.allMovies.filter((movie) => idMovies.includes(movie.res.id));




  moviesWithOutRepeating = movieList.filter(
    (currentMovie, currentIndex, array) => {
      return (
        array.findIndex(
          (arrayElement) =>
            JSON.stringify(arrayElement) === JSON.stringify(currentMovie)
        ) === currentIndex
      );
    }
  );




  return {
    movieList,
    moviesWithOutRepeating,
  }
}

export default useFavoriteList;