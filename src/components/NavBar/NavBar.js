import { NavLink } from "react-router-dom";
import styledComponents from "styled-components";
import logo from "./popcorn_PNG33.png";
import search from "./search.png"

const NavBar = () => {
  const MyNavBarStyled = styledComponents.div`
  background-color:#000;
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
  height:4.5rem;
  color:white;
  border-bottom:1px solid white;
  `
  const MyItemNavBar = styledComponents.article`
  color:white;


  &.pop-corn{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-basis:50%;
    margin-left:3rem;

  & > .logo-corn{
    width:2.5rem;
    height:2.5rem;
    margin-right:.5rem;
  }

  }

  .movies{
    position:relative;
   border-left:1.5px solid white;
   padding:.3em;

   span{
    position:absolute;
    bottom:-2px;
    font-size:11px;
    letter-spacing:1.2px;
   }

   h1{
    flex-flow:column wrap;
    font-size:35px;
    color:red;
  }
  }

  &.my-list{
    display:flex;
flex-basis:50%;
justify-content:flex-end;
fon-size:18px;
 margin-right:3rem;
align-items:center;
.search{
  width:1.5rem;
  heigth:1.5rem;
  margin-right:.5rem;
}
  }

  `
  return (<MyNavBarStyled>
    <MyItemNavBar className="pop-corn">
      <img src={logo} className="logo-corn" alt="Logo" />
      <div className="movies">
        <h1>PICHAR</h1>
        <span>Movies</span>

      </div>
    </MyItemNavBar>

    <MyItemNavBar className="my-list">

      <img src={search} className="search" alt="search" />
      <NavLink to="/favorite-list">My List</NavLink>
    </MyItemNavBar>
  </MyNavBarStyled>);
}

export default NavBar;