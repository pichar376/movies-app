import styled from "styled-components";

const MyFooterStyle = styled.footer`
display:flex;
   width:100%;
   background-color:#000;
   height:4rem;
   color:white;
   align-items:flex-end;
   justify-content:center;
   padding:0 1rem;

   p{
    color:#ffffff90   }
`
const Footer = () => {



  return (
    <MyFooterStyle>
      <p>PROJECT DEVELOPED BY ERNESTO PICHARDO</p>
    </MyFooterStyle>
  );
}

export default Footer;