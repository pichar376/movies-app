import { useContext, useEffect, useState } from "react";
import MoviesContext from "../../../context/MoviesContext";
import useMovieSearch from "../../../pages/MovieSearch/useMovieSearch";

const useInputSearch = () => {
  const handleClicked = () => {
    setClicked((!clicked))
  }

  const handleBlur = () => {
    setClicked(!clicked)
  }


  const toggleInput = e => e.stopPropagation();
  const [clicked, setClicked] = useState(false);

  return {
    toggleInput,
    clicked,
    setClicked,
    handleClicked,
    handleBlur,
  }
}

export default useInputSearch;