import Carrusel from "../Carrusel/Carrusel";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import styledComponents from "styled-components"

const MyLayoutStyles = styledComponents.div`
display:flex;
flex-direction:column;
positon:relative;
 background-color:#000;
 min-width:100vw;
 min-height:100vh;
 
 `
const Layout = ({ children }) => {
  return (
    <div>
      <MyLayoutStyles >
        {children}
      </MyLayoutStyles>
    </div>
  );
}

export default Layout;