import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MoviesContext, { MoviesProvider } from "../../../context/MoviesContext";


const useMovieSearch = () => {

  const { movies, moviesList, setMoviesList, setCurrentSearch } = useContext(MoviesContext)

  const { allMovies } = movies;






  const navigate = useNavigate()

  const handleChange = e => {
    setCurrentSearch(e.target.value)
    filterMovies(e.target.value)
    navigate(`/movie-search/${e.target.value}`)
    console.log()
    if (e.target.value === "") {
      navigate("/")
    }
  }


  const arrMovies = Object.values(moviesList)

  const moviesData = arrMovies.map((movie) => movie.res);

  const moviesDataFinal = moviesData.map((movie) => movie)

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



  return {
    handleChange,
    moviesDataFinal,
    moviesList
  }
}

export default useMovieSearch;





