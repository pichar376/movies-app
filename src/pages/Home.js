import { useContext } from "react";
import Carrusel from "../components/Carrusel/Carrusel";
import MoviesContext from "../context/MoviesContext";
import { useLocation, Link } from "react-router-dom";
import Video from "../components/Video/Video";
import styled from "styled-components";

const MyContainerCarrusel = styled.div`

`
const Home = () => {
  const { categoryList } = useContext(MoviesContext);



  return (
    <div>
      <Video />
      <MyContainerCarrusel>


        <Carrusel category={categoryList.popularData} />
        <Carrusel category={categoryList.kidsData} />
        <Carrusel category={categoryList.dramaData} />
        <Carrusel category={categoryList.oldData} />
        <Carrusel category={categoryList.scienceFictionData} />
      </MyContainerCarrusel>
    </div >
  );
}

export default Home;