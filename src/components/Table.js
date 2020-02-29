import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { ArrowUpCircle, ArrowDownCircle } from "react-feather";
import { media } from "../style-utils/media";
import Editable from "./Editable";

export const Table = styled.table`
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  height: fit-content;
  width: fit-content;
  flex-grow: 2;
  margin: 1rem;
  min-width: 50%;
  color: #292929;
  & thead,
  tbody {
    width: 100%;
  }
  ${media.tablet`
    width: 100%;
  `}
`;

export const TableHead = styled.thead`
  background: #36304b;
  height: 3rem;
  display: grid;
  align-items: center;
  font-size: 18px;
  border-radius: 10px 10px 0 0;
  & > tr {
    height: 100%;
  }
`;

export const TableBody = styled.tbody`
  max-height: 49vh;
  display: block;
  overflow: auto;
  border-radius: 0 0 10px 10px;
  & tr:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

export const TableRow = styled.tr`
  color: #808080;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  line-height: 2;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

export const ArrowContainer = styled.div`
  display: none;
  padding-left: 5px;
`;

export const TableHeader = styled.th`
  cursor: pointer;
  height: 100%;
  color: #ccc;
  &:hover {
    color: #fff;
    background: #8854c8;
    border-radius: 7px;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.3));
    ${ArrowContainer} {
      display: block;
    }
  }
`;

export const Cell = styled.td`
  height: 2rem;
  overflow: scroll;
  text-transform: ${props => props.ford && "uppercase"};
  &:hover {
    background: #b3ffd3;
    font-weight: bold;
    border-radius: 5px;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.3));
  }
`;

export default function TableComponent({
  tableRef,
  mainRef,
  searchResults,
  tableHeaders,
  onSortChange,
  sortDirections,
  tableData,
  handleEdit
}) {

  return (
    <>
      <Table ref={tableRef}>
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, i) => (
              <TableHeader key={header} onClick={() => onSortChange(i)}>
                {header}
                <ArrowContainer>
                  {!sortDirections[i] ? <ArrowDownCircle /> : <ArrowUpCircle />}
                </ArrowContainer>
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(searchResults.length > 0 ? searchResults : tableData).map(
            (item, i) => (
              <TableRow key={item.id}>
                {Object.keys(item).map((key, headerIndex) => (
                  <Editable
                    mainRef={mainRef}
                    ford={key === "model" ? 1 : 0}
                    key={tableHeaders[headerIndex] + item[key]}
                    cellInfo={{ item, i }}
                    text={item[key]}
                    property={key}
                    edit={handleEdit}
                    bold={item[key] === "Ford"}
                    // bold={item.manufacturer === "Ford"} //uncomment this line and comment out line above for whole row bold
                  />
                ))}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </>
  );
}

TableComponent.propTypes={
  mainRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLElement) })
]).isRequired,
  tableRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLTableElement) })
]).isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.object),
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSortChange: PropTypes.func.isRequired,
  sortDirections: PropTypes.arrayOf(PropTypes.bool).isRequired,
  tableData: PropTypes.arrayOf(PropTypes.object.isRequired),
  handleEdit: PropTypes.func.isRequired
}
