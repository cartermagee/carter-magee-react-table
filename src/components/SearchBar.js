import React from 'react'
import styled from "styled-components";
import PropTypes from "prop-types";

export const SearchContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2rem;
  & > * {
    height: 100%;
    padding: 5px;
    display: grid;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 20rem;
  border-radius: 7px;
`;

export default function SearchBar({
  searchTerm,
  handleChange
}) {
  return (
    <>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </SearchContainer>
    </>
  );
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.object)
};
