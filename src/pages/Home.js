import { useContext, useEffect } from "react";
import Carrusel from "../components/Carrusel/Carrusel";
import MoviesContext from "../context/MoviesContext";
import Video from "../components/Video/Video";
import styled from "styled-components";
import { motion } from "framer-motion"
import { pageVariant } from "../helpers/variants";
import { dramaMovies, fictionMovies, kidsMovies, oldMovies, popularMovies } from "../helpers/titlesMovies";
import Loader from "../components/Loader/Loader";
import { Helmet } from "react-helmet";
import NotFound from "./NotFound";

const MyContainerCarrusel = styled.div`
display:flex;
flex-flow:row wrap;


`
const Home = () => {


  const { categoryList, } = useContext(MoviesContext);





  return (

    <div>



      <Video />
      <Helmet >
        <title>Movies</title>
        <meta
          name="home"
          content="main container"
        />
      </Helmet >

      <MyContainerCarrusel>
        <motion.div initial="out" animate="in" exit="out" variants={pageVariant}>

          <section className="popular">

            <Carrusel category={categoryList.popularData} title={popularMovies} />
          </section>
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