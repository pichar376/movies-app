import styledComponents from "styled-components"

const MyMovieCardStyle = styledComponents.div`
display:flex;
flex-flow:column wrap;
justify-content:flex-end;
border:thin solid gray;
min-width:250px;
min-height:250px;
border-radius:20px;
margin:.7rem;


.info{
display:flex;
flex-flow:column wrap;
justify-content:flex-end;
margin-bottom:1rem;
}

`

const MovieCard = () => {
  return (
    <MyMovieCardStyle>
      <article className="info">
        <h2 >Este es titulo de la peli el titulo es mas grande</h2>
        <span>duacion</span>
        <span>Read full description</span>
      </article>


    </MyMovieCardStyle>
  );
}

export default MovieCard;