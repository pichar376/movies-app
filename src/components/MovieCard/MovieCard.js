import { Link, useLocation, useParams } from "react-router-dom";
import styledComponents from "styled-components"

const MyMovieCardStyle = styledComponents.div`

display:flex;
flex-flow:column wrap;
position:relative;
justify-content:flex-end;
border:thin solid gray;
width:500px;
height:500px;
border-radius:40px;
margin:.7rem;


.info{
display:flex;
flex-flow:column wrap;
position:absolute;
justify-content:flex-end;
margin-bottom:1rem;
}
 img{
  width:100%;
  height:100%;
  border-radius:20px;
 }

 a{
  color:red;
 }

`

const MovieCard = ({ duration, title, imgSrc }) => {



  return (
    < MyMovieCardStyle >
      <img src={`https://image.tmdb.org/t/p/w500${imgSrc}`} />
      <article className="info">
        <h2 >{title}</h2>
        <span>duration:{duration}</span>
      </article>
    </MyMovieCardStyle >


  );
}

export default MovieCard;