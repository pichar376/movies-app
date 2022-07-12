import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import useFetch from "../helpers/useFetch";



const Home = () => {

  useFetch()

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;