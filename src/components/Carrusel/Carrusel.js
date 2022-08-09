import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
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


const Carrusel = ({ category }) => {






  if (!category) {
    return <h1>Cargando...</h1>
  }
  return (
    <MyCarruselStyle>
      {category.map((movie) => <div key={movie.res.id}><MovieCard title={movie.res.title} duration={movie.res.runtime} imgSrc={movie.res.poster_path} movieId={movie.res.id} />




      </div>)
      }
    </MyCarruselStyle>
  );
}


export default Carrusel;