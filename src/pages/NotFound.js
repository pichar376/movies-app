import styled from "styled-components";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { pageVariant } from "../helpers/variants";

const NotFound = () => {


  const MyNotFound = styled.div`
 display:flex;
justify-content:space-evenly;
align-items:center;
flex-flow:column wrap;
width:100vw;
height:50vh;

  a{
    text-decoration:none;
  }
  `
  return (

    <>
      <MyNotFound>
        <motion.div initial="out" animate="in" exit="out" variants={pageVariant} transition={{ duration: 3 }}>
          <MyNotFound>
            <motion.h1 className="not-found" initial={{ color: "grey", opacity: 0 }} transition={{ duration: 1 }} animate={{ y: 100, opacity: 1, color: "white", }}>NOT FOUND :(</motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .7 }}>

              <Link to="/">Go home add to movies</Link>
            </motion.div>
          </MyNotFound>
        </motion.div>
      </MyNotFound >
    </>
  );
}

export default NotFound;