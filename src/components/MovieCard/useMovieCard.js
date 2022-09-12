import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MoviesContext, { MoviesProvider } from "../../context/MoviesContext";

const useMovieCard = () => {

  const { movies, addToList, setAddToList, handleDelete, addAndDeleteMovie } = useContext(MoviesContext);
  const { allMovies } = movies;
  const valuesMoviesParse = Object.values(addToList).map((el) => parseInt(el));
  const enter = () => {
    console.log("enter")
  }
  const navigate = useNavigate();
  const goDescription = (id) => {
    navigate(`/description/${id}`)
  }
  const adeddMovie = (id) => {

    setAddToList({
      ...addToList,
      [id]: id
    })


  }





  const validation = (movieID) => {
    const entries = Object.entries(addToList);

    const id = movieID.toString();

    const result = entries.filter((entry) => entry[0] === id);


    if (result.length > 0) {
      if (result[0][1] === undefined) {
        return undefined;
      }
      if (result[0][1]) {
        return true;
      }
    } else {
      return null;
    }
  };

  const addToMyList = (movieID) => {
    const result = validation(movieID);


    addAndDeleteMovie(movieID, result)


  };
  return {

    adeddMovie,
    valuesMoviesParse,
    handleDelete,
    addToMyList,
    goDescription,

  }
}

export default useMovieCard;

















