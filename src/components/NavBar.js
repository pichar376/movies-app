import styledComponents from "styled-components";

const NavBar = () => {
  const MyNavBarStyled = styledComponents.div`
  background-color:#000;
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
  height:4.5rem;
  color:white;
  `
  const MyItemNavBar = styledComponents.article`
  color:white;


  &.pop-corn{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-basis:50%;
    border:thin solid grey;

  & > span{
    padding:.5rem;
  }
  }

  .movies{
    position:relative;
   border-left:2px solid white;
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
 border:thin solid grey;
  }

  `
  return (<MyNavBarStyled>
    <MyItemNavBar className="pop-corn">
      <span>palomitas</span>
      <div className="movies">
        <h1>PICHAR</h1>
        <span>Movies</span>

      </div>
    </MyItemNavBar>

    <MyItemNavBar className="my-list">
      <span>lupa</span>
      <span>My list</span>
    </MyItemNavBar>
  </MyNavBarStyled>);
}

export default NavBar;