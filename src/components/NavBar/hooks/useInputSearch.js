import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MoviesContext from "../../../context/MoviesContext";
import useMovieSearch from "../../../pages/MovieSearch/useMovieSearch";

const useInputSearch = () => {
  const navigate = useNavigate();
  const handleClicked = () => {
    setClicked((!clicked))
  }


  const handleBlur = (e) => {
    if (e.target.value === "") {
      setClicked(!clicked)
      navigate("/")
    }
  }
  const [clicked, setClicked] = useState(false);

  return {
    clicked,
    setClicked,
    handleClicked,
    handleBlur,
  }
}

export default useInputSearch;