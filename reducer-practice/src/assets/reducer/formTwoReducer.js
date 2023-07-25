const formTwoReducer = (state, action) => {
  if (action.type === "CHANGE_EMAIL") {
    return { ...state, email: action.payload };
  } else if (action.type === "CHANGE_PASSWORD") {
    return { ...state, password: action.payload };
  } else {
    return state;
  }
};
export default formTwoReducer;
