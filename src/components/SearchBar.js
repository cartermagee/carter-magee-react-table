import React from 'react'
import styled from "styled-components";
import { media } from "../style-utils/media";
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

export const NoResults = styled.div`
  position: absolute;
  z-index: 5;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 0, 0, 0.4);
  top: ${({ tableRef }) => tableRef.current.offsetTop}px;
  width: ${({ tableRef }) => tableRef.current.offsetWidth}px;
  height: ${({ tableRef }) => tableRef.current.offsetHeight}px;
  left: ${({ tableRef }) => tableRef.current.offsetLeft}px;
  font-weight: bold;
  font-size: 2rem;
  & > * {
    transform: rotate(27deg);
    ${media.tablet`
      transform: rotate(0deg);
      font-size: 1.8rem;
    `}
  }
`;

export default function SearchBar({
  searchTerm,
  handleChange,
  searchResults,
  tableRef
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
      {searchTerm && searchResults.length === 0 && (
        <NoResults tableRef={tableRef}>
          <h1>Ope! No Results 😬</h1>
        </NoResults>
      )}
    </>
  );
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.object),
  tableRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLTableElement) })
  ]).isRequired
};
