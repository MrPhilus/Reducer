const formReducer = (state, action) => {
  if (action.type === "CHANGE_FIRST") {
    return { ...state, firstName: action.payload };
  } else if (action.type === "CHANGE_LAST") {
    return { ...state, lastName: action.payload };
  } else {
    return state;
  }
};
export default formReducer;
