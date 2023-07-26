import { useState, useReducer } from "react";
import "./App.css";
import formReducer from "./assets/reducer/formReducer";
import CustomInput from "./assets/components/CustomInput";

const initialState = {
  count: 0,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  const [type, setType] = useState(0);
  const [typeTwo, setTypeTwo] = useState(0);

  const formOne = [
    { type: "First Name", value: "firstName" },
    { type: "Email", value: "email" },
  ];
  const formTwo = [
    { type: "Last Name", value: "lastName" },
    { type: "Password", value: "password" },
  ];

  const inputType = [{ type: "text" }, { type: "email" }];
  const inputTypeTwo = [{ type: "text" }, { type: "password" }];

  function changeFirstName(e) {
    if (e.target.name === "firstName") {
      dispatch({ type: "CHANGE_FIRST", payload: e.target.value });
    } else {
      dispatch({ type: "CHANGE_EMAIL", payload: e.target.value });
    }
  }

  function changeLastName(e) {
    if (e.target.name === "lastName") {
      dispatch({ type: "CHANGE_LAST", payload: e.target.value });
    } else {
      dispatch({ type: "CHANGE_PASSWORD", payload: e.target.value });
    }
  }

  function changeForm() {
    setInputOne((prev) => prev + 1);
    setInputTwo((prev) => prev + 1);
    setType((prev) => prev + 1);
    setTypeTwo((prev) => prev + 1);
    state.count++;
  }

  return (
    <div>
      {state.count < 2 && (
        <form>
          <div>
            <CustomInput
              labeltext={formOne[inputOne].type}
              type={inputType[type].type}
              value={state[formOne[inputOne].value]}
              onInput={changeFirstName}
              name={formOne[inputOne].value}
            />
          </div>
          <div>
            <CustomInput
              labeltext={formTwo[inputTwo].type}
              type={inputTypeTwo[typeTwo].type}
              value={state[formTwo[inputTwo].value]}
              onInput={changeLastName}
              name={formTwo[inputTwo].value}
            />
          </div>
        </form>
      )}
      {state.count === 2 && (
        <div>
          <p>{state.firstName}</p>
          <p>{state.lastName}</p>
          <p>{state.email}</p>
          <p>{state.password}</p>
        </div>
      )}
      <button onClick={changeForm}>Next</button>
    </div>
  );
}

export default App;
