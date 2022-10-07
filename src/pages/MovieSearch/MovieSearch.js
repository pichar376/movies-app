import MovieCard from "../../components/MovieCard/MovieCard";
import useMovieSearch from "./hooks/useMovieSearch";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AiOutlineHeart } from 'react-icons/ai'
import MoviesContext from "../../context/MoviesContext";
import NotFound from "../NotFound";


const MySearchSection = styled.section`
    position:relative;      
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(250px,1fr));
    align-items:center;
    margin-top:4rem;
    width:100%;
    @media(max-width:576px){
    display:flex;
    flex-flow:column wrap
    }
    div{
      margin:1rem .5rem;

      .heart{
        color:white;
      }
      @media(max-width:576px){
     
    }

    }

    .prev{
      position:absolute;
      color:white;
      top:-4rem;
      left:30rem;
      font-size:1.5rem;
    

    }
`



const MovieSearch = () => {
  const navigate = useNavigate()

  const { moviesDataFinal, moviesList } = useMovieSearch();

  const { currentSearch } = useContext(MoviesContext)



  useEffect(() => {
    return () => {

      if (moviesList.length === 0) {
        navigate("/")
      }
    }
  }, [currentSearch]);




  if (moviesDataFinal.length === 0) {
    return (
      <NotFound />
    )


  }
  return (
    <MySearchSection>

      {moviesDataFinal && moviesDataFinal.map((movie) => <div key={movie.id} >
        <MovieCard title={movie.title} duration={movie.runtime} imgSrc={movie.poster_path} movieId={movie.id} /></div>
      )
      }
    </MySearchSection>




  );
}

export default MovieSearch;