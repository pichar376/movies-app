import Carrusel from "../Carrusel/Carrusel";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import styledComponents from "styled-components"

const MyLaoutStyles = styledComponents.div`
display:flex;
flex-direction:column;
positon:relative;
 background-color:red;
 width:100vw;
 height:100vh;
 
 `
const Layout = ({ children }) => {
  return (
    <div>
      <MyLaoutStyles >
        <NavBar />
        {children}
      </MyLaoutStyles>
      <Footer />
    </div>
  );
}

export default Layout;