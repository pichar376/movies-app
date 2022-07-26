import styledComponents from "styled-components"

import { useContext, useMemo } from "react";
import MoviesContext from "../../context/MoviesContext";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";


const MyDescriptionStyle = styledComponents.div`
  color:white;
  margin:0 14rem;

  img{
    width:100%;
  }

  h1{
    font-size:55px;
    margin:2rem 0;
    text-align:center;
  }
  `
const MyContainerDataMovie = styledComponents.div`
display:flex;
flex-flow:column wrap;
gap:1rem;
 .item-data-movie{
    display:flex;
    flex-flow:column wrap;
    background-color:grey;
  }
  h2{
    font-size:35px;
  }
  p{
    font-size:25px;
  }


`

const currentMovieObj = {
  name: "harry Poter",
  year: 2026,
  overview: "good"
}



const MovieDescription = () => {

  const { category, movies } = useContext(MoviesContext)
  const [movieCurrent, setMovieCurrent] = useState({});


  // if (!props.location.state == undefined) {
  //   return (
  //     <div>
  //       <h1>no hay peliculas aun</h1>
  //     </div>
  //   )
  // }


  // const { poster_path, title } = props.location.state;
  const { id } = useParams()


  const itemFiltered = movies.allMovies.filter((item) => item.res.id == id)

  const currentMovie = itemFiltered.map((item) => item)

  const infoMovie = currentMovie[0].res;



  const { title, runtime, poster_path, overview, original_language, vote_average, popularity, vote_count, release_date } = infoMovie;


  console.log(infoMovie)

  console.log(title, runtime, poster_path, overview, original_language, vote_average, popularity, vote_count, release_date)

  return (
    <MyDescriptionStyle>
      <h1>{title}</h1>
      <img src={
        poster_path === "https://picsum.photos/720"
          ? "https://picsum.photos/720"
          : `https://image.tmdb.org/t/p/w500${poster_path}`
      } />
      <MyContainerDataMovie>
        <article class="item-data-movie"><h2>Duration</h2><p>
        </p>{runtime}</article>
        <article class="item-data-movie"><h2>Language</h2><p>{original_language}
        </p></article>
        <article class="item-data-movie"><h2>Description</h2><p>{overview}
        </p>
        </article>
        <article class="item-data-movie"><h2>Popularity</h2><p>{popularity}
        </p>
        </article>
        <article class="item-data-movie"><h2>Vote Average</h2><p>{vote_average}
        </p></article>
        <article class="item-data-movie"><h2>Total Votes</h2><p>{vote_count}
        </p>
        </article>
        <article class="item-data-movie"><h1>Release Date</h1><p>{release_date}
        </p>
        </article>
      </MyContainerDataMovie>
    </MyDescriptionStyle>
  );
}

export default MovieDescription;