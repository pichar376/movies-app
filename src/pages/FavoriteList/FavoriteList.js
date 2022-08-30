import { useContext, useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components"
import MovieCard from "../../components/MovieCard/MovieCard";
import MoviesContext, { MoviesProvider } from "../../context/MoviesContext";
import useFavoriteList from "./hooks/useFavoriteList";
import { motion } from "framer-motion"
import { pageVariant, pageVariantList } from "../../helpers/variants";




const MyListStyled = styled.div`
color:white;
 



.map-container{
  margin:9rem auto;
  width:90%;
display:grid;
grid-template-columns:repeat(4,1fr);
gap:4rem;

.map-item{
position:relative;
width:100%;
height:auto;
}
  a{
  position:absolute;
  bottom:3rem;
  left:3rem;
  color:red;

}

img{
width:100%;
height:500px;
border-radius:40px;
}

}
.heart{
  position:absolute;
  top:2rem;
  right:2rem;
  font-size:2rem;
  

}
`
const StyledWithOutMovie = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
flex-flow:column wrap;
width:100vw;
height:50vh;
font-size:40px;
.no-movies{
  font-size:60px;
  color:white;
}
a{
  text-decoration:none;
  color:wite;
}
`
const FavoriteList = () => {

  const { addToList } = useContext(MoviesContext);

  const { movieList, handleDelete, saveId } = useFavoriteList();

  const moviesAdd = Object.values(addToList);

  if (moviesAdd.length === 0) {
    return (
      <motion.div initial="out" animate="in" exit="out" variants={pageVariant}>

        <StyledWithOutMovie>
          <motion.h1 className="no-movies" initial={{ color: "grey", opacity: 0 }} transition={{ duration: 1 }} animate={{ y: 100, opacity: 1, color: "white", }}>No movies Yet</motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: 1 }}>

            <Link to="/">Go home add to movies</Link>
          </motion.div>
        </StyledWithOutMovie>
      </motion.div>
    )
  };
  return (
    <MyListStyled>
      <Link to="/">Go Home</Link>

      <motion.div initial="out" animate="in" exit="out" variants={pageVariantList} className="map-container">

        {movieList.map((movie) =>
          <div key={movie.res.id} className="map-item">
            <section className="heart" onClick={() => { handleDelete(movie.res.id) }}>

              <BsSuitHeartFill />

            </section>
            <Link className="link" to={{ pathname: `/description/${movie.res.id}` }}>Description</Link ><img src={
              !movie.res.poster_path
                ? "https://picsum.photos/720"
                : `https://image.tmdb.org/t/p/w500${movie.res.poster_path}`
            } alt="poster" />


          </div >
        )

        }
      </motion.div>


    </MyListStyled>

  );
}

export default FavoriteList;


