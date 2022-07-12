import { createContext, useEffect, useState } from "react";
import { dramaMovies, kidsMovies, oldMovies, popularMovies, scienceFiccionMovies } from "../helpers/categories";
import useFetch from "../helpers/useFetch";




const MoviesContext = createContext();



const MoviesProvider = ({ children }) => {
  ;
  const [categoryList, setCategoryList] = useState([]);

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
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

    return setMovie({
      ...res,
      runtime: time,
    })


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

    const [po, ki, old, dram, scie] = categoryResults;



    getMovie(po[0], apiKey)
  }
  useEffect(() => {

    getCategories(arrMovies, apiKey)



  }, []);



  const data = {}
  return (
    <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>
  )
}

export { MoviesProvider };
export default MoviesContext;

