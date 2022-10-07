import { AiOutlineHeart } from "react-icons/ai";
import { BsSuitHeartFill } from "react-icons/bs";
import styled from "styled-components";
import MoviesContext from "../../context/MoviesContext";
import { useContext } from "react";
import useMovieCard from "./useMovieCard";
import { motion } from "framer-motion"

const MyMovieCardStyle = styled.div`

display:flex;
flex-flow:column wrap;
justify-content:flex-end;
margin:0 1rem;;
position:relative;
transition:all .4s ease-in;
width:250px;
height:250px;

@media(min-width:960px){
margin:0 1rem;
}

.heart{
  
  position:absolute;
  top:1rem;
  right:1rem;
  font-size:1rem;

  &:hover{
    transform:scale(1.1);
  
  }
}
 img{
  width:250px;
  height:250px;
  object-fit:cover;
  border-radius: 20px;

  @media(max-width:576px){
    width:250px;
    heigth:250px;
  }
 }
`
const MyDescription = styled.article`

display:flex;
flex-flow:column wrap;
position:absolute;
justify-content:flex-end;
margin:1rem;

.title{
display:flex;
flex-wrap:wrap;
}
  .description-details{
    color:#ffffff99;
    font-weight:700;
    transition:all .3s ease-in-out;
   margin:0;
   transition:all .3s ease-in-out;
    &:hover{
      text-decoration:underLine;
      color:white;
      cursor:pointer;
    }
  }


`









const MovieCard = ({ duration, title, imgSrc, movieId }) => {

  const { addToList } = useContext(MoviesContext)




  const {
    goDescription,
    deleteMovie
  } = useMovieCard();

  return (


    < MyMovieCardStyle >
      <motion.section className="heart" onClick={() => {

        deleteMovie(movieId)
      }} initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}>
        {
          addToList[`${movieId}`] ? (< BsSuitHeartFill />) : (<AiOutlineHeart />)

        }
      </motion.section>
      <img src={imgSrc ? `https://image.tmdb.org/t/p/w500${imgSrc}` : "https://picsum.photos/720"}
      />
      <MyDescription>
        <div className="title"><p className="description-details">{title}</p>
        </div>
        <span className="description-details">duration:{duration}</span>
        <span className="description-details" onClick={() => { goDescription(movieId) }} >Description</span>
      </MyDescription>
    </MyMovieCardStyle >





  );
}

export default MovieCard;