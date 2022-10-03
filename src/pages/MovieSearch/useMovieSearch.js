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


  const arrMovies = Object.values(moviesList)

  const moviesData = arrMovies.map((movie) => movie.res);

  const moviesDataFinal = moviesData.map((movie) => movie)



  console.log(moviesList)

  const filterMovies = (searchElement) => {
    const titlesMovies = allMovies.map((el) => el.res.title)
    const searchResult = titlesMovies.filter((element) => {
      if (element.toString().toLowerCase().includes(searchElement.toLowerCase())) {
        return element;
      }
    });
    const filteredMoviesData = allMovies.filter((movie) => searchResult.includes(movie.res.title))

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


