import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import styled from "styled-components";

const Nav = styled.nav`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const NavBarImg = styled.img`
  width: 160px;
`;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <Nav>
      <div>
        <NavBarImg alt="pokeapi-logo" src={logoImg} />
      </div>
      <div>{favoritePokemons.length} ❤️</div>
    </Nav>
  );
};

export default Navbar;
