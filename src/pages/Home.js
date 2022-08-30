import { useContext } from "react";
import Carrusel from "../components/Carrusel/Carrusel";
import MoviesContext from "../context/MoviesContext";
import { useLocation, Link } from "react-router-dom";
import Video from "../components/Video/Video";
import styled from "styled-components";
import { motion } from "framer-motion"
import { pageVariant } from "../helpers/variants";

const MyContainerCarrusel = styled.div`
margin:0 5rem;
h2{
  font-size:4rem;
  padding:2rem;
  color:white;
  
}
`
const Home = () => {
  const { categoryList } = useContext(MoviesContext);



  return (

    <div>

      <Video />
      <MyContainerCarrusel>

        <motion.div initial="out" animate="in" exit="out" variants={pageVariant}>
          <h2>Popular Movies</h2>
          <Carrusel category={categoryList.popularData} />
          <h2>Kids Movies</h2>
          <Carrusel category={categoryList.kidsData} />
          <h2>Drama Movies</h2>
          <Carrusel category={categoryList.dramaData} />
          <h2>Old Movies</h2>
          <Carrusel category={categoryList.oldData} />
          <h2>Science Fiction Movies</h2>
          <Carrusel category={categoryList.scienceFictionData} />
        </motion.div>
      </MyContainerCarrusel>
    </div>
  );
}

export default Home;