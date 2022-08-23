import MovieCard from "../../components/MovieCard/MovieCard";
import useMovieSearch from "./useMovieSearch";
import styledComponents from "styled-components";

const MySearchSection = styledComponents.section`
    display:flex;
    
`

const MovieSearch = () => {


  const { handleChance, moviesDataFinal } = useMovieSearch();


  return (
    <MySearchSection>
      {moviesDataFinal && moviesDataFinal.map((movie) => <div key={movie.id}><MovieCard title={movie.title} duration={movie.runtime} imgSrc={movie.poster_path} movieId={movie.id} />
      </div>)
      }
    </MySearchSection>




  );
}

export default MovieSearch;