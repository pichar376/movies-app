import { useContext, useEffect } from "react";
import Carrusel from "../components/Carrusel/Carrusel";
import MoviesContext from "../context/MoviesContext";
import { useLocation, Link } from "react-router-dom";
import Video from "../components/Video/Video";
import styled from "styled-components";
import { motion } from "framer-motion"
import { pageVariant } from "../helpers/variants";
import { dramaMovies, fictionMovies, kidsMovies, oldMovies, popularMovies } from "../helpers/titlesMovies";

const MyContainerCarrusel = styled.div`
margin:0 5rem;
`
const Home = () => {





  const { categoryList } = useContext(MoviesContext);



  return (

    <div>



      <Video />

      <MyContainerCarrusel>
        <motion.div initial="out" animate="in" exit="out" variants={pageVariant}>

          <Carrusel category={categoryList.popularData} title={popularMovies} />

          <Carrusel category={categoryList.kidsData} title={
            kidsMovies
          } />

          <Carrusel category={categoryList.dramaData} title={dramaMovies} />

          <Carrusel category={categoryList.oldData} title={oldMovies} />

          <Carrusel category={categoryList.scienceFictionData} title={fictionMovies} />
        </motion.div>
      </MyContainerCarrusel>

    </div>
  );
}

export default Home;