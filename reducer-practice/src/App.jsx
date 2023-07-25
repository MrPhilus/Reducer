import { useState, useReducer } from "react";
import "./App.css";
import formReducer from "./assets/reducer/formReducer";
import CustomInput from "./assets/components/CustomInput";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);

  const formOne = [{ type: "First Name" }, { type: "Email" }];
  const formTwo = [{ type: "Last Name" }, { type: "Password" }];

  function changeFirstName(e) {
    dispatch({ type: "CHANGE_FIRST", payload: e.target.value });
  }

  function changeLastName(e) {
    dispatch({ type: "CHANGE_LAST", payload: e.target.value });
  }

  function changeForm() {
    setInputOne((prev) => prev + 1);
    setInputTwo((prev) => prev + 1);
  }

  return (
    <div>
      <form>
        <div>
          {/* <label htmlFor="">First Name</label>
          <input
            type="text"
            onInput={changeFirstName}
            value={state.firstName} 
          /> */}
          <CustomInput
            labeltext={formOne[inputOne].type}
            type={"text"}
            value={state.firstName}
            onInput={changeFirstName}
          />
        </div>
        <div>
          {/* <label htmlFor="">Last Name</label>
          <input type="text" onInput={changeLastName} value={state.lastName} /> */}
          <CustomInput
            labeltext={formTwo[inputTwo].type}
            type={"text"}
            value={state.lastName}
            onInput={changeLastName}
          />
        </div>
      </form>
      <button onClick={changeForm}>Next</button>
    </div>
  );
}

export default App;
