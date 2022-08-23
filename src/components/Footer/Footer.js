import styledComponents from "styled-components"

const MyFooterStyle = styledComponents.footer`
   width:100%;
   background-color:#000;
   height:8rem;
`
const Footer = () => {



  return (
    <MyFooterStyle>
      <h1>footer</h1>
    </MyFooterStyle>
  );
}

export default Footer;