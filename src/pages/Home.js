import { useContext } from "react";
import Carrusel from "../components/Carrusel/Carrusel";
import MoviesContext from "../context/MoviesContext";
import { useLocation, Link } from "react-router-dom";


const Home = () => {
  const { categoryList } = useContext(MoviesContext);



  return (
    <div>

      <Carrusel category={categoryList.popularData} />
      <Carrusel category={categoryList.kidsData} />
      <Carrusel category={categoryList.dramaData} />
      <Carrusel category={categoryList.oldData} />
      <Carrusel category={categoryList.scienceFictionData} />
    </div >
  );
}

export default Home;