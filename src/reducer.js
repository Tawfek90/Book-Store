const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, loading: false, books: action.payload };
    case "failure":
      console.log("failure");
      return { ...state, loading: false, error: action.payload };

    case "CHANGEPAGENUMBER":
      return { ...state, pageNumber: action.payload };
    case "FETCHDETAILSDATA":
      return { ...state, detailsData: action.payload, loading: false };
    case "FETCHSEARCHDATA":
      return { ...state, loading: false, books: action.payload };
  }
  return state;
};
export default reducer;
