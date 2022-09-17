import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { dramaMovies, kidsMovies, oldMovies, popularMovies, scienceFiccionMovies } from "../helpers/categories";
import useFetch from "../helpers/useFetch";




const MoviesContext = createContext();



const MoviesProvider = ({ children }) => {
  ;
  const [categoryList, setCategoryList] = useState({});
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  const [myList, setMyList] = useState({});
  const [addToList, setAddToList] = useState({});
  const [currentSearch, setCurrentSearch] = useState("");
  const [moviesList, setMoviesList] = useState({})
  const [myMoviesList, setMyMoviesList] = useState({});






  const apiKey = "4c33c096c97964f1af4afe925f4f5687"


  const baseUrl = "https://api.themoviedb.org/3";

  const arrMovies = [popularMovies, kidsMovies, oldMovies, dramaMovies, scienceFiccionMovies]

  const getMovie = async (movie, apiKey) => {

    const moviePetition = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}`)

    const res = await moviePetition.json
      ()

    let time = await res.runtime;

    if (time) {
      res.runtime = time
    } else {

      const numRandom = Math.floor(Math.random() * 150 + 40);

      time = numRandom
    }
    return {
      res,
      runtime: time,
    }


  }


  const getCategories = async (arr, apiKey) => {
    const categoriesPromise = await arr.map((category) =>
      fetch(`${baseUrl}${category}&api_key=${apiKey}`)
    );


    const promiseResCategory = await Promise.all(categoriesPromise)



    const jsonCategoriesPromise = await promiseResCategory.map((category) => category.json());

    const jsonCategories = await Promise.all(jsonCategoriesPromise);










    const categoryResults = jsonCategories.map((category) =>
      category.results)


    const categoryPromiseResults = categoryResults.map(
      (categoryResult) =>
        categoryResult.map((movie) => getMovie(movie, apiKey)))



    const finalDataResults = await Promise.all(
      categoryPromiseResults.map(async (category) => await Promise.all(category))
    )


    const allMovies = finalDataResults[0].concat(
      finalDataResults[1],
      finalDataResults[2],
      finalDataResults[3],
      finalDataResults[4],
    )



    setMovies({
      allMovies
    })


    setCategoryList(
      {
        popularData: finalDataResults[0],
        kidsData: finalDataResults[1],
        dramaData: finalDataResults[2],
        oldData: finalDataResults[3],
        scienceFictionData: finalDataResults[4],
      }
    )





    return {
      movies,
      categoryList,
      currentSearch,
      setCurrentSearch,
      moviesList,
      setMoviesList,

    }
  }





  useEffect(() => {

    getCategories(arrMovies, apiKey)

  }, []);



  // find element for checkout in list
  const addArray = Object.values(addToList)

  const itemFind = (id) => {

    const findItem = addArray.find((item => item.id === id))

    return findItem
  }


  const validationMovies = () => {
    const moviesValues = Object.values(addToList);
    const idMoviesAdded = moviesValues.filter((movieId) => movieId !== undefined);
    console.log(idMoviesAdded)
    return idMoviesAdded
  }





  const addAndDeleteMovie = (id, status) => {

    switch (status) {
      case undefined:
        setAddToList({
          ...addToList,
          [id]: id,
        })
        break;
      case null:
        setAddToList({
          ...addToList,
          [id]: id,
        })
        break;
      case true:
        setAddToList({
          ...addToList,
          [id]: undefined,
        })
        break;

      default:
        break;
    }


  }




  const data = {
    categoryList,
    movies,
    addToList,
    setAddToList,
    setMyList,
    myList,
    setCurrentSearch,
    setMoviesList,
    currentSearch,
    moviesList,
    addAndDeleteMovie,
    validationMovies,


  }
  return (
    <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>
  )
}

export { MoviesProvider };
export default MoviesContext;

