import React, { useLayoutEffect, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Head from "./components/Head";
import SearchBar from "./components/SearchBar";
import TableComponent from "./components/Table";
import GlobalStyles from "./style-utils/GlobalStyles";
import { data } from "./data/data";
import { media } from "./style-utils/media";

const Main = styled.main`
  display: grid;
  height: 100vh;
  padding: 0;
  justify-items: center;
  grid-template-rows: auto auto 1fr auto;
  width: 100%;
  & > * {
    filter: drop-shadow(0px 5px 3px rgba(0, 0, 0, 0.5));
  }
  ${media.tablet`
    grid-template-rows: 2fr 1fr 3fr;
  `}
`;

export default function App() {

  const initialTableData = () => JSON.parse(window.localStorage.getItem("data")) || [];
  const initialTableHeaders = () => {
    const tData = initialTableData();
    if (tData && tData.length > 0) return Object.keys(tData[0]);
    return [];
      };

  const [tableData, setTableData] = useState(initialTableData);
  const [tableHeaders, setTableHeaders] = useState(initialTableHeaders);
  const [sortDirections, setSortDirections] = useState([]);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  useLayoutEffect(() => {
    if (window.localStorage.getItem("data")) {
      console.log("getting saved data from local storage");
    } else if (false) {
      // Change to true if you're hitting some endpoint for different data BUT the shape of the data has to be an array of objects who's properties' values have to all be strings
      const fetchData = async () => {
        const API_URL = "http://jsonplaceholder.typicode.com"; // example for testing
        console.log(`fetching data from ${API_URL}`);
        await axios
          .get(`${API_URL}/posts?_start=10&_limit=30`)
          .then(response => {
            setTableHeaders(Object.keys(response.data[0]));
            setTableData(response.data);
          })
          .catch(error => {
            console.error({ error });
            setTableData(data);
          });
      };
      fetchData();
    } else {
      console.log("using default data");
      const hData = Object.keys(data[0]);
      setTableHeaders(hData);
      setTableData(data);
    }

    const sortValueArray = new Array(tableHeaders.length).fill(true);
    setSortDirections(sortValueArray);
  }, [setTableHeaders, setTableData, setSortDirections, tableHeaders.length]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      searchTerm.toLowerCase();
      let data = [];
      const tHLength = tableHeaders.length;
      const tDLength = tableData.length;
      for (let i = 0; i < tDLength; i++) {
        const obj = tableData[i];
        for (let j = 0; j < tHLength; j++) {
          const key = tableHeaders[j];
          if (
            obj[key]
              .toString()
              .toLowerCase()
              .includes(searchTerm)
          ) {
            data.push(obj);
            break;
          } else {
            continue;
          }
        }
      }
      setSearchResults(data);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, tableData, tableHeaders]);

  const persistLocalData =(data) => {
    window.localStorage.setItem("data", JSON.stringify(data));
  };

  function compareValues(key, order) {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === false ? comparison * -1 : comparison;
    };
  }

  const onSortChange = i => {
    const key = tableHeaders[i];
    let sort = sortDirections[i];
    const data = [...tableData].sort(compareValues(key, sort));
    setTableData(data);
    let sortValueArray = [...sortDirections];
    sortValueArray.splice(i, 1, !sort);
    setSortDirections(sortValueArray);
    persistLocalData(data);
  };

  const handleEdit = (obj) => {
    let data = [...tableData];
    data[obj.i] = obj.item;
    setTableData(data);
    persistLocalData(data);
  }

  return (
    <Main>
      <GlobalStyles />
      <Head
        title="Carter's ReactJs Table"
        sortInstructions="Click on each table header to sort"
        searchInstructions="Enter your search terms in the search input"
        editInstructions="click the text in the cells to edit inline"
      />
      <SearchBar
        searchTerm={searchTerm}
        handleChange={handleChange}
        searchResults={searchResults}
      />
      <TableComponent
        searchTerm={searchTerm}
        searchResults={searchResults}
        tableHeaders={tableHeaders}
        onSortChange={onSortChange}
        sortDirections={sortDirections}
        tableData={tableData}
        handleEdit={handleEdit}
      />
    </Main>
  );
}
