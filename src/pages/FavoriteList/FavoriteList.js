import { useContext, useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components"
import MovieCard from "../../components/MovieCard/MovieCard";
import MoviesContext, { MoviesProvider } from "../../context/MoviesContext";
import useFavoriteList from "./hooks/useFavoriteList";
import { motion } from "framer-motion"
import { pageVariant, pageVariantList } from "../../helpers/variants";
import Video from "../../components/Video/Video";




const MyListStyled = styled.div`
color:white;
margin-top:9rem;
opacity:1;


 
.map-container:hover>div{
  opacity:0.5;
  transition:.45s ease-in-out;
}


.map-container{
  margin:5rem auto;
  width:70%;
display:grid;
justify-content:center;
grid-template-columns:repeat(4,1fr);
gap:3rem;
transition:all .4s ease-in-out;
&:hover{
opacity: 0.5;
transition:all .4s ease-in;
}

.map-item-movies:hover{
  transform: scale(1.1);
  transition:all .3s ease-in-out;
  opacity:1;
}
.map-item-movies{
position:relative;
margin-top:3rem;
min-width:400px;
max-width:600px;
height:auto;
}
  


img{
width:100%;
height:500px;
border-radius:40px;
}

}


a{
  position:absolute;
  top:3rem;
  left:3rem;
  color:white;
  text-decoration:none;
  font-size:30px;

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

  const { addToList, validationMovies } = useContext(MoviesContext);

  const { movieList, handleDelete, moviesWithOutRepeating } = useFavoriteList();

  const moviesValues = Object.values(addToList);

  if (!moviesWithOutRepeating || moviesWithOutRepeating.length === 0) {
    return (
      <motion.div initial="out" animate="in" exit="out" variants={pageVariant} transition={{ duration: 3 }}>
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
      <Link to="/">Go Home</Link>

      <motion.div initial="out" animate="in" exit="out" variants={pageVariantList} className="map-container">

        {moviesWithOutRepeating.map((movie) =>
          <div key={movie.res.id} className="map-item-movies">
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





