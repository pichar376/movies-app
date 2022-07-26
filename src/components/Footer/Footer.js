import styledComponents from "styled-components"
const Footer = () => {

  const MyFooterStyle = styledComponents.footer`
   width:100%;
   background-color:#000;
   height:8rem;
`
  return (
    <MyFooterStyle>
      <h1>footer</h1>
    </MyFooterStyle>
  );
}

export default Footer;