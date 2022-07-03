import styledComponents from "styled-components";
import MovieCard from "../MovieCard/MovieCard";

const MyCarruselStyle = styledComponents.div`
display:flex;
scrollbar-width:none;
color:white;
overflow-x:scroll;

&::-webkit-scrollbar{
  display:none;
}

`

const Carrusel = () => {
  return (
    <MyCarruselStyle>

      <MovieCard />

    </MyCarruselStyle>
  );
}

export default Carrusel;