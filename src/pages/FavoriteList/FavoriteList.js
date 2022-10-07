import { useContext, useEffect, useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components"
import MovieCard from "../../components/MovieCard/MovieCard";
import MoviesContext, { MoviesProvider } from "../../context/MoviesContext";
import useFavoriteList from "./hooks/useFavoriteList";
import { motion } from "framer-motion"
import { pageVariant, pageVariantList } from "../../helpers/variants";
import { Helmet } from "react-helmet";




const MyListStyled = styled.div`
color:white;
width:100%;

 

.map-container{
  margin:7rem 2rem 4rem 2rem;
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(250px,1fr));
  min-width:250px;
  max-width:80%;
  gap:1rem;


  &>*{
    width: 250px;
  height: 250px;
  position: relative;
  border-radius: 20px;
  transition: 450ms;
  cursor: pointer;
  display: flex;
  justify-content: center;
  }
  
}
  




a{
  position:absolute;
  top:0;
  left:0;
  margin-top:6rem;
  margin-left:3rem;
  color:white;
  text-decoration:none;

}
.heart{
  position:absolute;
  top:1rem;
  right:1rem;
  font-size:1rem;
  

}
`
const StyledWithOutMovie = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
flex-flow:column wrap;
width:100vw;
height:50vh;
@media(min-width:480px){
  font-size:20px;
}
a{
  text-decoration:none;
}
`
const FavoriteList = () => {

  useEffect(() => {
    window.scrollTo(9, 0);
  }, []);


  const { addToList, validationMovies } = useContext(MoviesContext);

  const { movieList, handleDelete, moviesWithOutRepeating, movieToDelete } = useFavoriteList();

  const moviesValues = Object.values(addToList);

  if (!moviesWithOutRepeating || moviesWithOutRepeating.length === 0) {
    return (
      <motion.div initial="out" animate="in" exit="out" variants={pageVariant} transition={{ duration: 3 }}>
        \<Helmet >
          <title>My List</title>
          <meta
            name="description"
            content="Page to know all information about your selected movie"
          />
        </Helmet >
        <StyledWithOutMovie>
          <motion.h1 className="no-movies" initial={{ color: "grey", opacity: 0 }} transition={{ duration: 1 }} animate={{ y: 100, opacity: 1, color: "white", }}>No movies Yet</motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .7 }}>

            <Link to="/">Go home add to movies</Link>
          </motion.div>
        </StyledWithOutMovie>
      </motion.div>
    )
  };
  return (
    <MyListStyled>
      <Helmet >
        <title>My List</title>
        <meta
          name="no movies"
          content="no  movies yet"
        />
      </Helmet >
      <Link to="/">Go Home</Link>

      <motion.div initial="out" animate="in" exit="out" variants={pageVariantList}
        className="map-container">

        {moviesWithOutRepeating.map((movie) =>
          <div key={movie.res.id}>

            <MovieCard duration={movie.res.runtime} title={movie.res.title} imgSrc={movie.res.poster_path} movieId={movie.res.id} />


          </div >
        )

        }
      </motion.div>


    </MyListStyled>

  );
}

export default FavoriteList;





