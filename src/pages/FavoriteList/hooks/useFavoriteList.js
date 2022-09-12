import { useContext } from "react";
import MoviesContext, { MoviesProvider } from "../../../context/MoviesContext";

const useFavoriteList = () => {

  const { movies, addToList, setAddToList, addAndDeleteMovie } = useContext(MoviesContext);

  const handleDelete = (movieId) => {
    const saveId = Object.keys(addToList).map((el) => parseInt(el))
    const newList = saveId.filter((movie) => movie != movieId)

    return addAndDeleteMovie(movieId, true)

  }

  const idMovies = Object.values(addToList)
  let movieList = [];
  if (movies.allMovies) {

    movieList = movies.allMovies.filter((movie) => idMovies.includes(movie.res.id));
  }





  // newList.map((movie) => setAddToList({
  //   movie
  // }))




  // const listToFilter = Object.values(addToList).map((id) => movies.allMovies.res.filter((movieId) => movieId === id));



  return {
    movieList,
    handleDelete
  }
}

export default useFavoriteList;