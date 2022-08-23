import { NavLink } from "react-router-dom";
import styledComponents from "styled-components";
import useMovieSearch from "../../pages/MovieSearch/useMovieSearch";
import logo from "./popcorn_PNG33.png";
import search from "./search.png"
const MyNavBarStyled = styledComponents.div`

  background-color:#000;
  display:flex;
  align-items:center;
  width:100%;
  height:8rem;
  color:white;
  border-bottom:1px solid white;
  `
const MyItemNavBar = styledComponents.article`
  display:flex;
  color:white;
  justify-content:flex-end;
    flex-basis:70%;
  
img{
  width:1.5rem;
  heigth:1.5rem;
  margin-right:.5rem;
}
input{
  color:red;
  width:5rem;
}
  

  `
const MyItemLogo = styledComponents.article`
    
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-left:3rem;

  & > .logo-corn{
    width:5rem;
    height:5rem;
    margin-right:.5rem;
  }

  .title-movies{
    position:relative;
    height:6rem;
   border-left:1.5px solid white;
   padding:.6em;
  
    .movies{
    position:absolute;
    bottom:-2px;
    font-size:30px;
    letter-spacing:1.2px;;             
   }

   h1{
    flex-flow:column wrap;
    color:red;
    font-size:60px;
  }
  }
  `

const NavBar = () => {

  const { handleChange, currentSearch } = useMovieSearch();






  return (<MyNavBarStyled>
    <MyItemLogo>
      <img src={logo} className="logo-corn" alt="Logo" />
      <div className="title-movies">
        <h1>PICHAR</h1>
        <span className="movies">Movies</span>

      </div>
    </MyItemLogo>

    <MyItemNavBar >

      <img src={search} className="search" alt="search" />
      <input onChange={handleChange} value={currentSearch}
      />
      <NavLink to="/favorite-list">My List</NavLink>
    </MyItemNavBar>
  </MyNavBarStyled>);
}

export default NavBar;