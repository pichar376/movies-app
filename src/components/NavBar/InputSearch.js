import searchIcon from "./search.png"
import styled from "styled-components"
import useInputSearch from "./hooks/useInputSearch"
import { useContext } from "react"
import MoviesContext from "../../context/MoviesContext"
import useMovieSearch from "../../pages/MovieSearch/useMovieSearch"
import { motion } from "framer-motion"
import { variantInput } from "../../helpers/variants"




const MyStyledSearch = styled.div`
display:flex;
align-items:center;
img{
width:20px;
height:auto;
  cursor: pointer;
  }
input{
  border-radius:11px;
  color:white;
  width:170px;
  height:28px;
  background-color:#00000075;
  border:thin solid #fff;
  font-size:14px;
  padding:1rem;
  outline:none;

  @media(max-width:576px){
  margin:0;
  border-radius:8px;
  color:white;
  width:120px;
  height:28px;
  background-color:#00000075;
  border:thin solid #fff;
  font-size:11px;
  padding:1rem;
  outline:none;
  }
}
`

const InputSearch = () => {
  const { clicked, setClicked, handleClicked, handleBlur } = useInputSearch();

  const { handleChange, currentSearch } = useMovieSearch()
  return (

    <MyStyledSearch>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container-input">

        {!clicked ? (<img src={searchIcon} onClick={handleClicked} />) :
          (<motion.input type="text" placeholder="
        Search a movie" aria-label="Username" aria-describedby="addon-wrapping" value={currentSearch} onChange={handleChange} autoFocus onBlur={handleBlur} variants={variantInput} initial="out" animate="in" exit="out" />)}
      </motion.div>
    </MyStyledSearch>
  );
}

export default InputSearch;