import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import styled from "styled-components";
import PokedexImg from "../assets/img/pokedex.png";

const PokedexHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PokedexGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 2fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 2fr);
  }
`;

const PokedexTitulo = styled.h1`
  font-size: 1.8rem;
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const PokedexTag = styled.img`
  animation: tada 1s both;
  @keyframes tada {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    10%,
    20% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }
    40%,
    60%,
    80% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
`;

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;
  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <div>
      <PokedexHeader>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
        <PokedexTitulo>Pokémons</PokedexTitulo>
      </PokedexHeader>
      {loading ? (
        <Loading>
          Carregando, segura fera...
          <PokedexTag src={PokedexImg} />
        </Loading>
      ) : (
        <PokedexGrid>
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </PokedexGrid>
      )}
    </div>
  );
};

export default Pokedex;
