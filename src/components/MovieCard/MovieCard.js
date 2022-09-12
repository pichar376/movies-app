import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSuitHeartFill } from "react-icons/bs";
import styled from "styled-components";
import MoviesContext from "../../context/MoviesContext";
import { useContext, useEffect, useState } from "react";
import useMovieCard from "./useMovieCard";
import { motion } from "framer-motion"
import { variantCard } from "../../helpers/variants";

const MyMovieCardStyle = styled.div`

display:flex;
flex-flow:column wrap;
position:relative;
justify-content:flex-end;
width:500px;
height:500px;
border-radius:40px;
margin:1.5rem;
position:relative;
transition:all .4s ease-in;

.heart{
  position:absolute;
  top:0;
  right:2rem;
  font-size:2rem;
}
 img{
  width:100%;
  height:100%;
  border-radius:40px;
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

  h2{
    color:#ffffff99;
    font-size:2.7rem;
    font-weight:600;
    transition:all .3s ease-in-out;

    &:hover{
      text-decoration:underLine;
      color:white;
      cursor:pointer;
    }
  }
}

span{
  color:#ffffff97;
  font-size:2rem;
  transition:all .3s ease-in-out;
}

span:hover{
text-decoration: underline;
color:white;
cursor:pointer;
}


`






const MovieCard = ({ duration, title, imgSrc, movieId, validation, movieAdd }) => {

  const navigate = useNavigate();

  const { addToList } = useContext(MoviesContext)

  const {
    addToMyList,
    goDescription
  } = useMovieCard();












  return (


    < MyMovieCardStyle >
      <motion.section className="heart" onClick={() => {

        addToMyList(movieId)
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
        <div className="title"><h2>{title}</h2>
        </div>
        <span>duration:{duration}</span>
        <span onClick={() => { goDescription(movieId) }} >Description</span>
      </MyDescription>
    </MyMovieCardStyle >





  );
}

export default MovieCard;