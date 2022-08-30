import { useContext } from "react";
import MoviesContext, { MoviesProvider } from "../../../context/MoviesContext";

const useFavoriteList = () => {

  const { movies, addToList, setAddToList } = useContext(MoviesContext)



  const saveId = Object.values(addToList);

  let movieList = [];
  if (movies.allMovies) {

    movieList = movies.allMovies.filter((movie) => saveId.includes(movie.res.id));
  }


  const handleDelete = (movieId) => {

    const newList = saveId.filter((movie) => movie != movieId)

    setAddToList({
      ...newList

    })

    // newList.map((movie) => setAddToList({
    //   movie
    // }))



    console.log(addToList)



  }


  // const listToFilter = Object.values(addToList).map((id) => movies.allMovies.res.filter((movieId) => movieId === id));



  return {
    movieList,
    handleDelete,
    saveId
  }
}

export default useFavoriteList;