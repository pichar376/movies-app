import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import MoviesContext from "../../context/MoviesContext";
import useMovieSearch from "../../pages/MovieSearch/useMovieSearch";
import logo from "./popcorn_PNG33.png";
import search from "./search.png"
import InputSearch from "./InputSearch";




const MyNavBarStyled = styled.div`
   background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
   position:fixed;
   z-index:999;
  background-color:${({ scrollY }) => (scrollY ? "black" : "#0000009")}; 
   transition:all .4s ease-in-out;
  display:flex;
  justify-content:space-between;
  padding-left:1rem;
  padding-right:1rem;
  align-items:center;
  width:100%;
  height:8rem;
  color:white;
  `
const MyItemNavBar = styled.article`
  display:flex;
  color:white;
  justify-content:flex-end;
    flex-basis:70%;
    margin:1.5rem 5.5rem 0 0;
  

    
input{
  margin:0 2rem;
  color:white;
  width:25rem;
  height:4rem;
  font-size:35px;
  padding:2rem;
  background-color:#00000075;
  border:thin solid #fff;
}

a{
  margin-left: 2rem;
  font-size:1.8rem;
  color:white;
  height:3rem;
  text-decoration:none;
}
  

  `
const MyItemLogo = styled.article`
    
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
    letter-spacing:1.2px;            
   }

   h1{
    flex-flow:column wrap;
    color:red;
    font-size:60px;
  }
  }
  `

const NavBar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [active, setActive] = useState(false);

  const { scrollY } = useContext(MoviesContext)

  return (

    <MyNavBarStyled scrollY={scrollY}>
      <MyItemLogo>
        <img src={logo} className="logo-corn" alt="Logo" />
        <div className="title-movies"
        >
          <h1>PICHAR</h1>
          <span className="movies">Movies</span>

        </div>
      </MyItemLogo>

      <MyItemNavBar >
        <InputSearch />

        <NavLink to="/favorite-list">My List</NavLink>
      </MyItemNavBar>
    </MyNavBarStyled>);
}

export default NavBar;