import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

export const Header = styled.header`
  display: grid;
  justify-items: center;
  margin: 0 auto;
  border-radius: 7px;
  padding: 1rem;
  height: fit-content;
`;

export const H1 = styled.h1`
  white-space: nowrap;
  font-size: 2.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 10px;
  &::after,
  ::before {
    display: block;
    content: "";
    width: 100%;
    height: 10px;
    background: linear-gradient(to var(--direction, left), #fff, transparent);
  }
  &::after {
    --direction: right;
  }
`;

function Head({
  title,
  sortInstructions,
  searchInstructions,
  editInstructions
}) {
  return (
    <Header>
      <H1>{title}</H1>
      <div>
        instructions:
        <h3>{sortInstructions}</h3>
        <h3>{searchInstructions}</h3>
        <h3>{editInstructions}</h3>
      </div>
    </Header>
  );
};
export default Head;

Head.propTypes = {
  title: PropTypes.string.isRequired,
  sortInstructions: PropTypes.string.isRequired,
  searchInstructions: PropTypes.string.isRequired,
  editInstructions: PropTypes.string.isRequired
};
