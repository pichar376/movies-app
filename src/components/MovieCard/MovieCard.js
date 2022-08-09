import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { BsSuitHeartFill } from "react-icons/bs";
import styledComponents from "styled-components";
import MoviesContext from "../../context/MoviesContext";
import { useContext } from "react";
import useMovieCard from "./useMovieCard";

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
position:relative;


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

 h1{
  position:absolute;
  bottom:1rem;
  left:1rem;
 }
.heart{
  position:absolute;
  top:2rem;
  right:2rem;
  font-size:2rem;
  

}
`




const MovieCard = ({ duration, title, imgSrc, movieId, validation, movieAdd }) => {

  const navigate = useNavigate();
  const { listMoviesId } = useContext(MoviesContext);


  const handleClick = () => {
    console.log("enter")
  }

  const goDescription = () => {
    navigate(`/description/${movieId}`)
  }
  return (
    < MyMovieCardStyle >
      <section className="heart" onClick={() => { listMoviesId(movieId) }}>

        <BsSuitHeartFill />

      </section>
      <img src={`https://image.tmdb.org/t/p/w500${imgSrc}`} />
      <article className="info">
        <h2 >{title}</h2>
        <span>duration:{duration}</span>
      </article>
      <h1 onClick={goDescription} >Description</h1>
    </MyMovieCardStyle >


  );
}

export default MovieCard;