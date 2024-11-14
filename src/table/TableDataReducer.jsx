function TableDataReducer(state, action) {
  switch (action.type) {
    case "SORT_ASCENDING":
      return {
        ...state,
        tableData: [...state.initialData].sort((a, b) => a.commentsCount - b.commentsCount),
        sortOrder: "ascending"
      };
    case "SORT_DESCENDING":
      return {
        ...state,
        tableData: [...state.initialData].sort((a, b) => b.commentsCount - a.commentsCount),
        sortOrder: "descending"
      };
    case "RESET":
      return {
        ...state,
        tableData: state.initialData,
        sortOrder: "natural"
      };
    case "SET_DATA":
      return {
        ...state,
        initialData: action.payload,
        tableData: action.payload,
        sortOrder: "natural"
      };
    default:
      return state;
  }
}

export default TableDataReducer;