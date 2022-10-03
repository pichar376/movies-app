import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesContext from "../../../context/MoviesContext";


const useMovieDescription = () => {

  const { category, movies } = useContext(MoviesContext)
  const [movieCurrent, setMovieCurrent] = useState({});
  const { id } = useParams()
  const itemFiltered = movies.allMovies.filter((item) => item.res.id == id)
  const currentMovie = itemFiltered.map((item) => item)
  const infoMovie = currentMovie[0].res;

  return {
    infoMovie
  }

}
export default useMovieDescription;


