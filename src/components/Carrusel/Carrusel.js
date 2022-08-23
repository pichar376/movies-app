import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styledComponents from "styled-components";
import MoviesContext, { MoviesProvider } from "../../context/MoviesContext";
import MovieSearch from "../../pages/MovieSearch/MovieSearch";
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

  const { myListActive, setMyListActive, moviesList } = useContext(MoviesContext)




  //   if (!myListActive) {
  //     const dataMovie = moviesList[0].res;
  //     return
  //     { <MovieCard title={dataMovie.title} duration={dataMovie.runtime} imgSrc={dataMovie.poster_path} movieId={dataMovie.id} /> }

  //   moviesList.map((movie) => <div key={movie.res.id}><MovieCard title={movie.res.title} duration={movie.res.runtime} imgSrc={movie.res.poster_path} movieId={movie.res.id} />

  //   </div>)
  //   console.log(moviesList.res)

  // }

  if (!category) {
    return <h1>Cargando...</h1>
  }
  return (




    <MyCarruselStyle>
      {category.map((movie) => <div key={movie.res.id}><MovieCard title={movie.res.title} duration={movie.res.runtime} imgSrc={movie.res.poster_path} movieId={movie.res.id} />




      </div>)
      }
    </MyCarruselStyle>
  )
}


export default Carrusel;