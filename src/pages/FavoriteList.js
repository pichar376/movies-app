import styledComponents from "styled-components"

const FavoriteList = () => {
  const MyListStyled = styledComponents.div`
color:white;

`
  return (
    <MyListStyled>Lista de favoritos</MyListStyled>

  );
}

export default FavoriteList;