import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import MoviesContext, { MoviesProvider } from "../../context/MoviesContext";
import MovieSearch from "../../pages/MovieSearch/MovieSearch";
import Loader from "../Loader/Loader";
import MovieCard from "../MovieCard/MovieCard";

const MyCarruselContainer = styled.div`
display:flex;
position:relative;
flex-flow:row wrap;
color:white;
overflow-x:scroll;
width:100vw;
height:320px;
align-items:center;


@media(min-width:400px){
  height:300px;
  margin-left:0;
  width:100vw;
}
@media(min-width:960px){
height:400px;
}

div:hover ~ div {
  transform: translate3d(150px, 0px, 0px);
  transition:all .45s ease-in; }

&:hover div{
  opacity:0.5;
  transition:all .3s ease-in;
}
&:hover div:hover{
  transform:scale(1.1);
  opacity:1;
  transition:all .3s ease-in;
}

&::-webkit-scrollbar {
  background: black;
  border-radius: 10px;
  height: 10px; }


&::-webkit-scrollbar-track {
  background:black;
   border-radius: 10px;
   cursor:pointer;
}

&::-webkit-scrollbar-thumb {
  background: white;
   border-radius: 10px;
}
.title{
  display:flex;
  justify-content:flex-start;

    h1{
      font-size:4rem;
    }


}

.carousel{
  display:flex;

}
`


const Carrusel = ({ category, title }) => {






  if (!category) {
    return <Loader />
  }

  return (




    <MyCarruselContainer>
      <section className="title">
        <h2>{title}</h2>
      </section>
      <section className="carousel">


        {category.map((movie, index) => <div key={index}
        ><MovieCard title={movie.res.title} duration={movie.res.runtime} imgSrc={movie.res.poster_path} movieId={movie.res.id} />
        </div>)}
      </section>
    </MyCarruselContainer>
  )
}


export default Carrusel;