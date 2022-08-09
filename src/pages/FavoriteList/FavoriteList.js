import { useContext } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";
import styledComponents from "styled-components"
import MovieCard from "../../components/MovieCard/MovieCard";
import MoviesContext, { MoviesProvider } from "../../context/MoviesContext";
import useFavoriteList from "./hooks/useFavoriteList";




const MyListStyled = styledComponents.div`
color:white;
 



.map-container{
  margin:9rem auto;
  width:90%;
display:grid;
grid-template-columns:repeat(4,1fr);
gap:4rem;

.map-item{
position:relative;
width:100%;
height:auto;
}
  a{
  position:absolute;
  bottom:3rem;
  left:3rem;
  color:red;

}

img{
width:100%;
height:500px;
border-radius:40px;
}

}
.heart{
  position:absolute;
  top:2rem;
  right:2rem;
  font-size:2rem;
  

}
`
const FavoriteList = () => {

  const { movieList, handleDelete, saveId } = useFavoriteList();

  // if (!listToFilter) {
  //   return
  // }
  return (
    <MyListStyled>
      <Link to="/">Go Home</Link>
      <section className="map-container">


        {
          movieList.map((movie) =>
            <div key={movie.res.id} className="map-item">
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
      </section>


    </MyListStyled>

  );
}

export default FavoriteList;


