import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import MoviesContext from "../../context/MoviesContext";
import useMovieSearch from "../../pages/MovieSearch/useMovieSearch";
import logo from "./popcorn_PNG33.png";
import search from "./search.png"
import InputSearch from "./InputSearch";
import useVideo from "../Video/hooks/useVideo";




const MyNavBarStyled = styled.div`
   background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
   height:4rem;
   position:fixed;
   z-index:999;
  background-color:${({ scrollY }) => (scrollY ? "black" : "#0000009")}; 
   transition:all .4s ease-in-out;
  display:flex;
  justify-content:space-between;
  padding-left:1rem;
  padding-right:1rem;
  align-items:center;
  color:white;
  width:100%;
   `
const MyItemMyList = styled.article`
  display:flex;
  color:white;
  justify-content:flex-end;
  align-items:center;
  margin-right:2rem;

a{
  margin: 0 2rem;
  font-size:20px;
  color:white;
  text-decoration:none;

  @media(max-width:578px){
    width:4rem;
     font-size:16px;
  }
}
  
  `

const MyItemLogo = styled.article`
    
    display:flex;
    flex-flow:row wrap;
    align-items:center;
    position:relative;
    margin-left:2rem;
    min-width:150px;

    @media(max-width:320px){
   margin:0;
   }

  & > .logo-corn{
    width:2rem;
    height:2em;
    margin-right:10px;

    @media(max-width:700px){
      width:1.3rem;
    height:1.3rem;
    margin:0;

    }

  }

  .title-movies{
    margin-top:1rem;
    height:4rem;
   border-left:thin solid white;
  
   @media(max-width:700px){
   margin-top:5px;
    height:2rem;
   }
  
    .movies{
      position:absolute;
      top:40px;
      margin-left:5px;

      @media(max-width:700px){
   top:20px;
   font-size:12px;
    
   }
   }

   .pichar{
    margin-left:5px;
    font-size:24px;
    font-weight:900;
    color:red;
    letter-spacing:2px;

    @media(max-width:678px){
   font-size:16px;
   }
  }
  }
  `


const NavBar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);




  const { scrollY } = useVideo()


  return (

    <MyNavBarStyled scrollY={scrollY}>
      <MyItemLogo>
        <img src={logo} className="logo-corn" alt="Logo" />
        <div className="title-movies"
        >
          <p className="pichar">PICHAR</p>
          <p className="movies">Movies</p>

        </div>
      </MyItemLogo>

      <MyItemMyList >
        <InputSearch />

        <NavLink to="/favorite-list">My List</NavLink>
      </MyItemMyList>
    </MyNavBarStyled>);
}

export default NavBar;