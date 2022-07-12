import { useContext } from "react";
import styledComponents from "styled-components";
import MoviesContext from "../../context/MoviesContext";
import MovieCard from "../MovieCard/MovieCard";

const MyCarruselStyle = styledComponents.div`
display:flex;
scrollbar-width:none;
color:white;
overflow-x:scroll;

&::-webkit-scrollbar{
  display:none;
}

`

const Carrusel = () => {
  const { res, loading, error } = useContext(MoviesContext);
  return (
    <MyCarruselStyle>

      <MovieCard />
      <img src="https://image.tmdb.org/t/p/w500/hQ4pYsIbP22TMXOUdSfC2mjWrO0.jpg" alt="imagen" />

    </MyCarruselStyle>
  );
}

export default Carrusel;