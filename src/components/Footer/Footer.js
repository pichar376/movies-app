import styled from "styled-components";

const MyFooterStyle = styled.footer`
display:flex;
   width:100%;
   background-color:#000;
   height:4rem;
   color:white;
   align-items:flex-end;
   padding:0 1rem;
`
const Footer = () => {



  return (
    <MyFooterStyle>
      <p>Proyect developed by Ernesto Pichardo</p>
    </MyFooterStyle>
  );
}

export default Footer;