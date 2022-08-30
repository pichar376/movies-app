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
width:3.5rem;
height:auto;
  cursor: pointer;
  }
input{
  border-radius:15px;
  width:15rem;
  height:2.5rem;
  font-size:1.5rem;
  margin-right:1rem;
}

`
const InputSearch = () => {
  const { clicked, setClicked, handleClicked, handleBlur } = useInputSearch();

  const { handleChange, currentSearch } = useMovieSearch()
  return (

    <MyStyledSearch>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

        {!clicked ? (<img src={searchIcon} onClick={handleClicked} />) :
          (<motion.input type="text" placeholder="
        Search" aria-label="Username" aria-describedby="addon-wrapping" value={currentSearch} onChange={handleChange} autoFocus onBlur={handleBlur} variants={variantInput} initial="out" animate="in" exit="out" />)}
      </motion.div>
    </MyStyledSearch>
  );
}

export default InputSearch;