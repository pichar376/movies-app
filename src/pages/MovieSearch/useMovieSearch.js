import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MoviesContext, { MoviesProvider } from "../../context/MoviesContext";


const useMovieSearch = () => {

  const { movies, currentSearch, moviesList, setMoviesList, setCurrentSearch } = useContext(MoviesContext)

  const { allMovies } = movies;






  const navigate = useNavigate()

  const handleChange = e => {
    setCurrentSearch(e.target.value)
    filterMovies(e.target.value)
    navigate(`/movie-search/${e.target.value}`)

    if (e.target.value === "") {
      navigate("/")
    }
  }


  const moviesData = moviesList.map((movie) => movie.res);

  const moviesDataFinal = moviesData.map((movie) => movie)





  const filterMovies = (terminoBusqueda) => {
    const titlesMovies = allMovies.map((el) => el.res.title)
    const resultadosBusqueda = titlesMovies.filter((elemento) => {
      if (elemento.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return elemento;
      }
    });
    const filteredMoviesData = allMovies.filter((movie) => resultadosBusqueda.includes(movie.res.title))

    setMoviesList(filteredMoviesData)
  }

  // const moviesMatches = Object.values(currentSearch)

  // const moviesFiltered = allMovies.filter((movie) => moviesMatches.includes(movie.res.title))
  // console.log(moviesFiltered)

  return {
    handleChange,
    moviesDataFinal,
  }
}

export default useMovieSearch;

// const handleChange = e => {
//   setBusqueda(e.target.value);
//   filtrar(e.target.value);
// }


