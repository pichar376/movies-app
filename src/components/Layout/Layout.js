import Carrusel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import styled from "styled-components"

const MyLayoutStyles = styled.div`
display:flex;
flex-direction:column;
position:relative;
 background-color:#000;
 min-width:100vw;
 min-height:100vh;

 `
const Layout = ({ children }) => {
  return (

    <MyLayoutStyles >
      {children}
    </MyLayoutStyles>

  );
}

export default Layout;