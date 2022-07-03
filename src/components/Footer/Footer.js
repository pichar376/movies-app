import styledComponents from "styled-components"
const Footer = () => {

  const MyFooterStyle = styledComponents.footer`
   width:100%;
   background-color:white;
   height:3rem;
`
  return (
    <MyFooterStyle>
      <h1>footer</h1>
    </MyFooterStyle>
  );
}

export default Footer;