import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchBarContainer = styled.div`
  display: flex;
  margin: 0px auto;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;

const SearchBar = styled.div`
  background-color: white;
  margin-right: 10px;
`;

const SearchBarInput = styled.input`
  padding: 12px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  width: 24rem;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    width: 14rem;
  }
`;

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };
  const onButtonClickHandler = () => {
    onSearch(search);
  };
  const onEnterClickHandler = (e) => {
    let key = e.which || e.keyCode;
    if (key === 13) {
      onSearch(search);
    }
  };

  return (
    <SearchBarContainer>
      <SearchBar>
        <SearchBarInput
          placeholder="Buscar pokémon"
          onChange={onChangeHandler}
          onKeyUp={onEnterClickHandler}
        />
      </SearchBar>
      <FaSearch className="FaSearch" onClick={onButtonClickHandler} />
    </SearchBarContainer>
  );
};

export default Searchbar;
