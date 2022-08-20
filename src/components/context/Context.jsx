import React, { useContext, useEffect, useReducer, useCallback } from "react";
import reducer from "../../reducer";
import axios from "axios";

//appcontext
const appContext = React.createContext();

//useGlobalcontext Hook
export const useGlobalContext = () => {
  return useContext(appContext);
};
//data url
const url = "https://gutendex.com/books/?page=";
//details url
const detailsUrl = "https://gutendex.com/books/";
//search url
const searchUrl = "https://gutendex.com/books/?search=";
//context components
export default function Context({ children }) {
  //initial state
  const intialState = {
    loading: true,
    books: [],
    pageNumber: 1,
    detailsData: {},
  };
  //useReducer hook
  const [state, dispatch] = useReducer(reducer, intialState);
  //fetching data using callback hook
  const fetchData = useCallback(() => {
    dispatch({ type: "LOADING" });
    axios
      .get(`${url}${state.pageNumber}`)
      .then((response) => {
        dispatch({ type: "SUCCESS", payload: response.data.results });
      })
      .catch((err) => {
        dispatch({ type: "failure", payload: err });
      });
  }, [state.pageNumber]);

  //fetching data according to page number
  const changePageNumber = (num) => {
    dispatch({ type: "CHANGEPAGENUMBER", payload: num });
  };
  //fetching details data according to the id
  const fetchDetailsData = (id) => {
    dispatch({ type: "LOADING" });
    axios
      .get(`${detailsUrl}${id}`)
      .then((response) => {
        dispatch({ type: "FETCHDETAILSDATA", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //fetch data according to input search
  const fetchSearchData = (text) => {
    dispatch({ type: "LOADING" });
    axios.get(`${searchUrl}${text}`).then((response) => {
      dispatch({ type: "FETCHSEARCHDATA", payload: response.data.results });
    });
  };

  //fetching data
  useEffect(() => {
    fetchData();
  }, [state.pageNumber, fetchData]);

  return (
    <appContext.Provider
      value={{
        ...state,
        changePageNumber,
        fetchDetailsData,
        fetchSearchData,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
