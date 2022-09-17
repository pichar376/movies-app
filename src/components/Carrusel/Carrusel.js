import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import MoviesContext, { MoviesProvider } from "../../context/MoviesContext";
import MovieSearch from "../../pages/MovieSearch/MovieSearch";
import MovieCard from "../MovieCard/MovieCard";

const MyCarruselContainer = styled.div`
display:flex;
position:relative;
flex-flow:column wrap;
color:white;
overflow-x:scroll;
height:700px;
padding:0 2rem;

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
    return <h1>Cargando...</h1>
  }

  return (




    <MyCarruselContainer>
      <section className="title">
        <h1>{title}</h1>
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