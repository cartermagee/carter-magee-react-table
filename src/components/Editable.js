import React, { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Cell = styled.td`
  height: 2rem;
  text-transform: ${props => props.ford && "uppercase"};
  &:hover {
    background: #b3ffd3;
    font-weight: bold;
    border-radius: 5px;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.3));
  }
`;

export const Input = styled.input`
  font-size: 18px;
  background: #b3ffd3;
  border-radius: 7px;
  border: none;
  width: 100%;
  height: 100%;
  text-align: center;
  `

  export const InputContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: visible;
`;

export default function Editable({
  text,
  property,
  edit,
  cellInfo,
  bold
}) {

  const initialState = cellInfo;
  const [isEditing, setEditing] = useState(false);
  const [cellObj, setCellObj] = useState(initialState);

  const prep = e =>{
    let obj = {...cellObj};
    obj.item[property] = e.target.value;
  setCellObj(obj);
}

  const escFunction = useCallback(
    e => {
      if (e.keyCode === 27 || e.keyCode === 9 || e.keyCode === 13) {
        edit(cellInfo);
        setEditing(false);
      }
    },
    [cellInfo, edit]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const inputRef = useRef();

  useEffect(() => {
    if (inputRef && inputRef.current && isEditing === true) {
      inputRef.current.focus();
    }
  }, [isEditing, inputRef]);

  return (
    <Cell ford={property === "model"}>
      {isEditing ? (
        <InputContainer
          onBlur={() => {
            edit(cellInfo);
            setEditing(false);
          }}
        >
          <Input
            ref={inputRef}
            type="text"
            name="cellObj"
            placeholder={text}
            value={cellObj.item.property}
            onChange={e => prep(e, null)}
          />
        </InputContainer>
      ) : (
        <div onClick={() => setEditing(true)}>
          {bold ? (
            <span>
              <b>{text}</b>
            </span>
          ) : (
            <span>{text}</span>
          )}
        </div>
      )}
    </Cell>
  );
};

Editable.propTypes = {
  text: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]),
  property: PropTypes.string.isRequired,
  edit: PropTypes.func.isRequired,
  cellInfo: PropTypes.object.isRequired,
}
