import { useContext } from "react";
import MoviesContext, { MoviesProvider } from "../../../context/MoviesContext";

const useFavoriteList = () => {

  const { movies, addToList, setAddToList, addAndDeleteMovie } = useContext(MoviesContext);

  const handleDelete = (movieId) => {
    const saveId = Object.keys(addToList).map((el) => parseInt(el));
    const valuesMovie = Object.values(addToList);

    const newList = movies.allMovies.filter((movie) => movie.res.id === movieId);
    console.log(addToList)

    return addAndDeleteMovie(movieId, true)





  }

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
    handleDelete,
    moviesWithOutRepeating
  }
}

export default useFavoriteList;