import styled from "styled-components"


import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  descriptionVariants
} from "../../helpers/variants";
import { motion } from "framer-motion"
import useMovieDescription from "./hooks/useMovieDescription"
import { useEffect } from "react";



const MyDescriptionStyle = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
  color:white;
  margin:0 2rem;
  position:relative;
  min-width:250px;

.container-img{
  align-items:center;
  min-width:250px;


img{
  width:100%;
}
}
  .title{
    font-size:4rem;
    margin:4rem;
    text-align:center;

    @media(max-width:576px){
      font-size:2rem;
      margin: 3rem;
    }

  }

  .go-back{
display:flex;
flex-flow:row wrap;
justify-content:center;
margin-top:8rem;
margin-bottom:0;

a{
  text-decoration:none;
   color:white;
}
  }
  `
const MyContainerDataMovie = styled.div`
width:80%;
display:flex;
margin: 3rem auto;
flex-flow:column wrap;
gap:1rem;
 &>*{
  margin: 0 1rem;
    display:flex;
    flex-flow:column wrap;
       background-color:rgba(255, 255, 255, 0.1);
    border-radius:10px;
    padding:1rem;
    

  }
  .title-descriptions{
    color:white;
    @media(max-width:576px){
      font-size:18px;
    }
  }
  p{
  
    color:#ffffff98;

    @media(max-width:576px){
      font-size:14px;
    }
  }

`



const MovieDescription = () => {

  useEffect(() => {
    window.scrollTo(9, 0);
  }, []);

  const { infoMovie } = useMovieDescription()

  const { title, runtime, poster_path, overview, original_language, vote_average, popularity, vote_count, release_date } = infoMovie;


  return (


    <motion.div initial="out" animate="in" exit="out" variants={
      descriptionVariants}>
      <MyDescriptionStyle>
        <Helmet>
          <title>{title}</title>
          <meta
            name="description"
            content="Page to know all information about your selected movie"
          />
        </Helmet>
        <div className="go-back">

          <Link to="/">Go Back</Link>

        </div>
        <h1 className="title">{title}</h1>
        <section className="container-img">
          <img src={
            poster_path === "https://picsum.photos/720"
              ? "https://picsum.photos/720"
              : `https://image.tmdb.org/t/p/w500${poster_path}`
          } />
        </section>
      </MyDescriptionStyle>
      <MyContainerDataMovie>


        <article><p className="title-descriptions">Duration:</p><p>{runtime}
        </p>
        </article>
        <article><p className="title-descriptions">Language:</p><p>{original_language}
        </p></article>
        <article><p className="title-descriptions">Description:</p><p>{overview}
        </p>
        </article>
        <article><p className="title-descriptions">Popularity:</p><p>{popularity}
        </p>
        </article>
        <article><p className="title-descriptions">Vote Average</p><p>{vote_average}
        </p></article>
        <article ><p className="title-descriptions">Total Votes</p><p>{vote_count}
        </p>
        </article>
        <article ><p className="title-descriptions">Release Date</p><p>{release_date}
        </p>
        </article>


      </MyContainerDataMovie>
    </motion.div>


  );
}

export default MovieDescription;